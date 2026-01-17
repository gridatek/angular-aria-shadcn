import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

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

  readonly displayValue = signal<string | undefined>(undefined);

  protected readonly hostClass = computed(() =>
    cn('pointer-events-none line-clamp-1 flex items-center gap-2', this.classInput())
  );
}
