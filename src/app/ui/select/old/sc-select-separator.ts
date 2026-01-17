import { computed, Directive, input } from '@angular/core';
import { cn } from '../../../utils';

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
    cn('bg-border pointer-events-none -mx-1 my-1 h-px border-none', this.classInput()),
  );
}
