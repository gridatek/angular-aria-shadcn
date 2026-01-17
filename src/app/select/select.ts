import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  signal,
  ViewEncapsulation,
  viewChild,
} from '@angular/core';
import { Combobox, ComboboxInput, ComboboxPopupContainer } from '@angular/aria/combobox';
import { Listbox, Option } from '@angular/aria/listbox';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { cn } from '../utils';

// ============================================================================
// ScSelect - Root container wrapping ngCombobox readonly
// ============================================================================
@Component({
  selector: 'sc-select',
  imports: [Combobox],
  template: `
    <div ngCombobox #combobox="ngCombobox" readonly>
      <ng-content />
    </div>
  `,
  host: {
    'data-slot': 'select',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSelect<T> {
  readonly combobox = viewChild.required<Combobox<T>>('combobox');

  readonly expanded = computed(() => this.combobox().expanded());
}

// ============================================================================
// ScSelectValue - Displays selected value or placeholder
// ============================================================================
@Component({
  selector: 'sc-select-value',
  template: `
    @if (displayValue(); as display) {
      <span class="truncate">{{ display }}</span>
    } @else {
      <span class="text-muted-foreground" data-placeholder>{{ placeholder() }}</span>
    }
  `,
  host: {
    'data-slot': 'select-value',
    '[class]': 'hostClass()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSelectValue {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly placeholder = input<string>('Select an option');

  // This will be set by the parent trigger/select
  readonly displayValue = signal<string | undefined>(undefined);

  protected readonly hostClass = computed(() =>
    cn('pointer-events-none line-clamp-1 flex items-center gap-2', this.classInput())
  );
}

// ============================================================================
// ScSelectTrigger - Button containing ngComboboxInput
// ============================================================================
@Component({
  selector: 'button[sc-select-trigger]',
  imports: [ComboboxInput, CdkOverlayOrigin],
  template: `
    <input
      ngComboboxInput
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      class="sr-only pointer-events-none absolute"
      readonly
      tabindex="-1"
    />
    <ng-content />
    <svg
      class="text-muted-foreground size-4 shrink-0 opacity-50"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  `,
  host: {
    'data-slot': 'select-trigger',
    type: 'button',
    '[class]': 'hostClass()',
    '[attr.aria-expanded]': 'combobox()?.expanded()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSelectTrigger {
  readonly classInput = input<string>('', { alias: 'class' });

  readonly origin = viewChild.required<CdkOverlayOrigin>('origin');
  private readonly select = inject(ScSelect, { optional: true });

  readonly combobox = computed(() => this.select?.combobox());

  protected readonly hostClass = computed(() =>
    cn(
      'border-input bg-background ring-offset-background flex h-9 w-full items-center justify-between gap-2 whitespace-nowrap rounded-md border px-3 py-2 text-sm shadow-xs',
      'placeholder:text-muted-foreground',
      'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      '[&>span]:line-clamp-1',
      this.classInput()
    )
  );
}

// ============================================================================
// ScSelectContent - Popup container with ngListbox
// ============================================================================
@Component({
  selector: 'sc-select-content',
  imports: [CdkConnectedOverlay, Listbox],
  template: `
    @if (origin(); as originRef) {
      <ng-template
        cdkConnectedOverlay
        [cdkConnectedOverlayOrigin]="originRef"
        [cdkConnectedOverlayOpen]="expanded()"
        [cdkConnectedOverlayWidth]="'auto'"
        [cdkConnectedOverlayMinWidth]="triggerWidth()"
      >
        <div
          ngListbox
          #listbox="ngListbox"
          [(values)]="selectedValues"
          [class]="hostClass()"
          data-slot="select-content"
        >
          <ng-content />
        </div>
      </ng-template>
    }
  `,
  host: {
    'data-slot': 'select-content-host',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSelectContent<T> {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly position = input<'popper' | 'item-aligned'>('popper');

  private readonly trigger = inject(ScSelectTrigger, { optional: true });
  private readonly select = inject(ScSelect, { optional: true });

  readonly listbox = viewChild<Listbox<T>>('listbox');

  readonly selectedValues = signal<T[]>([]);

  readonly origin = computed(() => this.trigger?.origin());
  readonly expanded = computed(() => this.select?.expanded() ?? false);
  readonly triggerWidth = signal(0);

  private readonly selectValue = contentChild(ScSelectValue);

  constructor() {
    // Update trigger width when expanded
    effect(() => {
      if (this.expanded()) {
        const originEl = this.origin()?.elementRef?.nativeElement;
        if (originEl) {
          // Find the button parent
          const button = originEl.closest('button[sc-select-trigger]');
          if (button) {
            this.triggerWidth.set(button.getBoundingClientRect().width);
          }
        }
      }
    });

    // Update the select value display when selection changes
    effect(() => {
      const values = this.selectedValues();
      const selectValue = this.selectValue();
      if (selectValue && values.length > 0) {
        // Get the label from the selected option
        const listbox = this.listbox();
        if (listbox) {
          // For now, just use the first value's string representation
          selectValue.displayValue.set(String(values[0]));
        }
      }
    });
  }

  protected readonly hostClass = computed(() =>
    cn(
      'bg-popover text-popover-foreground relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      this.position() === 'popper' &&
        'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
      'p-1',
      this.classInput()
    )
  );
}

// ============================================================================
// ScSelectItem - Option wrapper using ngOption
// ============================================================================
@Component({
  selector: 'div[sc-select-item]',
  imports: [Option],
  template: `
    <div
      ngOption
      #option="ngOption"
      [value]="value()"
      [label]="labelText()"
      [disabled]="disabled()"
      [class]="optionClass()"
      data-slot="select-item-option"
    >
      <span class="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
        @if (option.selected()) {
          <svg
            class="size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        }
      </span>
      <ng-content />
    </div>
  `,
  host: {
    'data-slot': 'select-item',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSelectItem<T> {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly value = input.required<T>();
  readonly label = input<string>();
  readonly disabled = input(false);

  private readonly elementRef = inject(ElementRef);

  // Use the label input or the text content as the label
  protected readonly labelText = computed(
    () => this.label() ?? this.elementRef.nativeElement.textContent?.trim()
  );

  protected readonly optionClass = computed(() =>
    cn(
      'relative flex w-full cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none',
      'focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
      this.classInput()
    )
  );
}

// ============================================================================
// ScSelectLabel - Group label
// ============================================================================
@Directive({
  selector: '[sc-select-label]',
  host: {
    'data-slot': 'select-label',
    '[class]': 'hostClass()',
  },
})
export class ScSelectLabel {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly hostClass = computed(() =>
    cn('text-muted-foreground px-2 py-1.5 text-xs font-semibold', this.classInput())
  );
}

// ============================================================================
// ScSelectGroup - Groups related items
// ============================================================================
@Directive({
  selector: 'sc-select-group',
  host: {
    'data-slot': 'select-group',
    role: 'group',
  },
})
export class ScSelectGroup {}

// ============================================================================
// ScSelectSeparator - Separator
// ============================================================================
@Directive({
  selector: 'hr[sc-select-separator]',
  host: {
    'data-slot': 'select-separator',
    '[class]': 'hostClass()',
  },
})
export class ScSelectSeparator {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly hostClass = computed(() =>
    cn('bg-border pointer-events-none -mx-1 my-1 h-px border-none', this.classInput())
  );
}
