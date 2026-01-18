import { Combobox } from '@angular/aria/combobox';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { ScSelectTrigger } from './sc-select-trigger';

@Component({
  selector: 'div[sc-select]',
  imports: [Combobox],
  hostDirectives: [
    {
      directive: Combobox,
      inputs: ['readonly'],
    },
  ],
  template: `<ng-content />`,
  host: {
    'data-slot': 'select',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSelect {
  readonly classInput = input<string>('', { alias: 'class' });

  private readonly trigger = contentChild(ScSelectTrigger);
  readonly origin = computed(() => this.trigger()?.overlayOrigin);

  protected readonly class = computed(() => cn('relative', this.classInput()));
}
