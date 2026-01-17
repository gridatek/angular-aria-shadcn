import { Combobox } from '@angular/aria/combobox';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: 'div[sc-select]',
  imports: [Combobox],
  hostDirectives: [Combobox],
  template: `<ng-content />`,
  host: {
    'data-slot': 'select',
    '[class]': 'class()',
    readonly: 'true',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSelect {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('relative', this.classInput()));
}
