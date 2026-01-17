import { computed, Directive, input } from '@angular/core';
import { cn } from '../../../utils';

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
    cn('text-muted-foreground px-2 py-1.5 text-xs font-semibold', this.classInput()),
  );
}
