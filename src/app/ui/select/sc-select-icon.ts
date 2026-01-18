import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: 'svg[sc-select-icon]',
  imports: [],
  template: ``,
  host: {
    'data-slot': 'select-icon',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSelectIcon {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'text-muted-foreground pointer-events-none absolute right-3 size-4 shrink-0 opacity-50 transition-transform duration-150 [[aria-expanded=true]~&]:rotate-180',
      this.classInput(),
    ),
  );
}
