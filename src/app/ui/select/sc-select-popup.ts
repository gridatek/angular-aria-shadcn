import { ComboboxPopupContainer } from '@angular/aria/combobox';
import { CdkConnectedOverlay, OverlayModule } from '@angular/cdk/overlay';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ScSelect } from './sc-select';

@Component({
  selector: 'div[sc-select-popup]',
  imports: [ComboboxPopupContainer, OverlayModule],
  template: `
    <ng-template ngComboboxPopupContainer>
      @if (origin(); as origin) {
        <ng-template
          cdkConnectedOverlay
          [cdkConnectedOverlayOrigin]="origin"
          [cdkConnectedOverlayOpen]="true"
          [cdkConnectedOverlayWidth]="originWidth()"
        >
          <ng-content />
        </ng-template>
      }
    </ng-template>
  `,
  host: {
    'data-slot': 'select-popup',
    style: 'display: contents',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSelectPopup {
  private readonly select = inject(ScSelect);
  private readonly overlay = viewChild(CdkConnectedOverlay);

  protected readonly origin = computed(() => this.select.origin());

  protected readonly originWidth = computed(() => {
    const origin = this.origin();
    return origin?.elementRef.nativeElement.offsetWidth ?? 'auto';
  });
}
