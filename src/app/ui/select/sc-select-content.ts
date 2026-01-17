import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  effect,
  forwardRef,
  inject,
  input,
  signal,
  ViewEncapsulation,
  viewChild,
} from '@angular/core';
import { Listbox } from '@angular/aria/listbox';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { cn } from '../../utils';
import { ScSelect } from './sc-select';
import { ScSelectTrigger } from './sc-select-trigger';
import { ScSelectValue } from './sc-select-value';

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

  private readonly trigger = inject(forwardRef(() => ScSelectTrigger), { optional: true });
  private readonly select = inject(forwardRef(() => ScSelect), { optional: true });

  readonly listbox = viewChild<Listbox<T>>('listbox');

  readonly selectedValues = signal<T[]>([]);

  readonly origin = computed(() => this.trigger?.origin());
  readonly expanded = computed(() => this.select?.expanded() ?? false);
  readonly triggerWidth = signal(0);

  private readonly selectValue = contentChild(ScSelectValue);

  constructor() {
    effect(() => {
      if (this.expanded()) {
        const originEl = this.origin()?.elementRef?.nativeElement;
        if (originEl) {
          const button = originEl.closest('button[sc-select-trigger]');
          if (button) {
            this.triggerWidth.set(button.getBoundingClientRect().width);
          }
        }
      }
    });

    effect(() => {
      const values = this.selectedValues();
      const selectValue = this.selectValue();
      if (selectValue && values.length > 0) {
        const listbox = this.listbox();
        if (listbox) {
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
