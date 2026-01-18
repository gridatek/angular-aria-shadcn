import { OverlayModule } from '@angular/cdk/overlay';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { ScMenuTrigger } from './sc-menu-trigger';
import { cn } from '../../utils';

@Component({
  selector: 'div[sc-menu-popup]',
  imports: [OverlayModule],
  template: `
    @if (trigger(); as trig) {
      <ng-template
        [cdkConnectedOverlayOpen]="trig.trigger.expanded()"
        [cdkConnectedOverlay]="{ origin: trig.overlayOrigin, usePopover: 'inline' }"
        [cdkConnectedOverlayPositions]="[
          { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top', offsetY: 4 },
        ]"
        cdkAttachPopoverAsChild
      >
        <ng-content />
      </ng-template>
    }
  `,
  host: {
    'data-slot': 'menu-popup',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScMenuPopup {
  readonly trigger = input.required<ScMenuTrigger>();
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('', this.classInput()));
}
