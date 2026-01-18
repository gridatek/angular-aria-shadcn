import { Listbox } from '@angular/aria/listbox';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: 'div[sc-select-content]',
  imports: [],
  template: `<ng-content />`,
  hostDirectives: [Listbox],
  host: {
    'data-slot': 'select-content',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSelectContent {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'bg-popover text-popover-foreground z-50 mt-1 flex max-h-44 min-w-[8rem] flex-col gap-0.5 overflow-auto rounded-md border p-1 shadow-md',
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      this.classInput(),
    ),
  );
}
