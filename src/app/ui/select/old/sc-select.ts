import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ViewEncapsulation,
  viewChild,
} from '@angular/core';
import { Combobox } from '@angular/aria/combobox';

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
