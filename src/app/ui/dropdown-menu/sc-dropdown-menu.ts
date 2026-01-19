import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Directive,
  inject,
  input,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { CdkOverlayOrigin, OverlayModule } from '@angular/cdk/overlay';
import { cn } from '../../utils';

// ============================================================================
// DropdownMenu
// ============================================================================
@Directive({
  selector: '[sc-dropdown-menu]',
  host: {
    'data-slot': 'dropdown-menu',
  },
})
export class ScDropdownMenu {}

// ============================================================================
// DropdownMenuTrigger
// ============================================================================
@Directive({
  selector: '[sc-dropdown-menu-trigger]',
  hostDirectives: [CdkMenuTrigger, CdkOverlayOrigin],
  host: {
    'data-slot': 'dropdown-menu-trigger',
    '[class]': 'class()',
  },
})
export class ScDropdownMenuTrigger {
  readonly trigger = inject(CdkMenuTrigger);
  readonly overlayOrigin = inject(CdkOverlayOrigin);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('outline-none', this.classInput()));
}

// ============================================================================
// DropdownMenuContent
// ============================================================================
@Component({
  selector: '[sc-dropdown-menu-content]',
  hostDirectives: [CdkMenu],
  imports: [OverlayModule],
  template: `<ng-content />`,
  host: {
    'data-slot': 'dropdown-menu-content',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDropdownMenuContent {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      this.classInput(),
    ),
  );
}

// ============================================================================
// DropdownMenuGroup
// ============================================================================
@Directive({
  selector: '[sc-dropdown-menu-group]',
  host: {
    'data-slot': 'dropdown-menu-group',
    role: 'group',
  },
})
export class ScDropdownMenuGroup {}

// ============================================================================
// DropdownMenuLabel
// ============================================================================
@Directive({
  selector: '[sc-dropdown-menu-label]',
  host: {
    'data-slot': 'dropdown-menu-label',
    '[class]': 'class()',
  },
})
export class ScDropdownMenuLabel {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly inset = input<boolean>(false);

  protected readonly class = computed(() =>
    cn('px-2 py-1.5 text-sm font-semibold', this.inset() && 'pl-8', this.classInput()),
  );
}

// ============================================================================
// DropdownMenuItem
// ============================================================================
@Directive({
  selector: '[sc-dropdown-menu-item]',
  hostDirectives: [CdkMenuItem],
  host: {
    'data-slot': 'dropdown-menu-item',
    '[class]': 'class()',
    '[attr.data-inset]': 'inset() || null',
  },
})
export class ScDropdownMenuItem {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly inset = input<boolean>(false);

  protected readonly class = computed(() =>
    cn(
      'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none',
      'transition-colors focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      '[&>svg]:size-4 [&>svg]:shrink-0',
      this.inset() && 'pl-8',
      this.classInput(),
    ),
  );
}

// ============================================================================
// DropdownMenuCheckboxItem
// ============================================================================
@Component({
  selector: '[sc-dropdown-menu-checkbox-item]',
  hostDirectives: [CdkMenuItem],
  template: `
    <span class="absolute left-2 flex size-3.5 items-center justify-center">
      @if (checked()) {
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="size-4"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      }
    </span>
    <ng-content />
  `,
  host: {
    'data-slot': 'dropdown-menu-checkbox-item',
    role: 'menuitemcheckbox',
    '[class]': 'class()',
    '[attr.aria-checked]': 'checked()',
    '(click)': 'toggle()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDropdownMenuCheckboxItem {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly checked = model<boolean>(false);

  protected readonly class = computed(() =>
    cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none',
      'transition-colors focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      this.classInput(),
    ),
  );

  toggle(): void {
    this.checked.update((v) => !v);
  }
}

// ============================================================================
// DropdownMenuRadioGroup
// ============================================================================
@Directive({
  selector: '[sc-dropdown-menu-radio-group]',
  host: {
    'data-slot': 'dropdown-menu-radio-group',
    role: 'group',
  },
})
export class ScDropdownMenuRadioGroup {
  readonly value = model<string>('');
}

// ============================================================================
// DropdownMenuRadioItem
// ============================================================================
@Component({
  selector: '[sc-dropdown-menu-radio-item]',
  hostDirectives: [CdkMenuItem],
  template: `
    <span class="absolute left-2 flex size-3.5 items-center justify-center">
      @if (isSelected()) {
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="size-2 fill-current"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      }
    </span>
    <ng-content />
  `,
  host: {
    'data-slot': 'dropdown-menu-radio-item',
    role: 'menuitemradio',
    '[class]': 'class()',
    '[attr.aria-checked]': 'isSelected()',
    '(click)': 'select()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDropdownMenuRadioItem {
  private readonly radioGroup = inject(ScDropdownMenuRadioGroup, { optional: true });

  readonly classInput = input<string>('', { alias: 'class' });
  readonly value = input.required<string>();

  protected readonly class = computed(() =>
    cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none',
      'transition-colors focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      this.classInput(),
    ),
  );

  protected readonly isSelected = computed(() => {
    return this.radioGroup?.value() === this.value();
  });

  select(): void {
    this.radioGroup?.value.set(this.value());
  }
}

// ============================================================================
// DropdownMenuSeparator
// ============================================================================
@Directive({
  selector: '[sc-dropdown-menu-separator]',
  host: {
    'data-slot': 'dropdown-menu-separator',
    role: 'separator',
    '[class]': 'class()',
  },
})
export class ScDropdownMenuSeparator {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('-mx-1 my-1 h-px bg-muted', this.classInput()));
}

// ============================================================================
// DropdownMenuShortcut
// ============================================================================
@Directive({
  selector: '[sc-dropdown-menu-shortcut]',
  host: {
    'data-slot': 'dropdown-menu-shortcut',
    '[class]': 'class()',
  },
})
export class ScDropdownMenuShortcut {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('ml-auto text-xs tracking-widest opacity-60', this.classInput()),
  );
}

// ============================================================================
// DropdownMenuSub
// ============================================================================
@Directive({
  selector: '[sc-dropdown-menu-sub]',
  host: {
    'data-slot': 'dropdown-menu-sub',
  },
})
export class ScDropdownMenuSub {}

// ============================================================================
// DropdownMenuSubTrigger
// ============================================================================
@Component({
  selector: '[sc-dropdown-menu-sub-trigger]',
  hostDirectives: [CdkMenuItem, CdkMenuTrigger],
  template: `
    <ng-content />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="ml-auto size-4"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  `,
  host: {
    'data-slot': 'dropdown-menu-sub-trigger',
    '[class]': 'class()',
    '[attr.data-inset]': 'inset() || null',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDropdownMenuSubTrigger {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly inset = input<boolean>(false);

  protected readonly class = computed(() =>
    cn(
      'flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none',
      'focus:bg-accent data-[state=open]:bg-accent',
      '[&>svg]:size-4 [&>svg]:shrink-0',
      this.inset() && 'pl-8',
      this.classInput(),
    ),
  );
}

// ============================================================================
// DropdownMenuSubContent
// ============================================================================
@Component({
  selector: '[sc-dropdown-menu-sub-content]',
  hostDirectives: [CdkMenu],
  template: `<ng-content />`,
  host: {
    'data-slot': 'dropdown-menu-sub-content',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDropdownMenuSubContent {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      this.classInput(),
    ),
  );
}
