import { ComboboxPopupContainer } from '@angular/aria/combobox';
import { OverlayModule } from '@angular/cdk/overlay';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { ScSelect } from './sc-select';
import { cn } from '../../utils';

@Component({
  selector: 'div[sc-select-popup]',
  imports: [ComboboxPopupContainer, OverlayModule],
  template: `
    <ng-template ngComboboxPopupContainer>
      @if (origin(); as origin) {
        <ng-template
          [cdkConnectedOverlay]="{ origin, usePopover: 'inline', matchWidth: true }"
          [cdkConnectedOverlayOpen]="true"
        >
          <ng-content />
        </ng-template>
      }
    </ng-template>
  `,
  styles: `
    [sc-select]:has([sc-select-input][aria-expanded='false']) [data-slot='select-content'] {
      max-height: 0;
      opacity: 0;
      visibility: hidden;
      transition:
        max-height 150ms ease-in,
        visibility 0s 150ms,
        opacity 150ms ease-in;
    }
    [sc-select]:has([sc-select-input][aria-expanded='true']) [data-slot='select-content'] {
      opacity: 1;
      visibility: visible;
      transition:
        max-height 150ms ease-out,
        visibility 0s,
        opacity 25ms ease-out;
    }
  `,
  host: {
    'data-slot': 'select-popup',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSelectPopup {
  private readonly select = inject(ScSelect);

  protected readonly origin = computed(() => this.select.origin());

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('', this.classInput()));
}
