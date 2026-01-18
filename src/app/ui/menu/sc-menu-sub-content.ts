import { OverlayModule } from '@angular/cdk/overlay';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { ScMenu } from './sc-menu';
import { ScMenuSubTrigger } from './sc-menu-sub-trigger';
import { cn } from '../../utils';

@Component({
  selector: 'div[sc-menu-sub-content]',
  imports: [OverlayModule],
  template: `
    @if (parentMenu(); as parent) {
      <ng-template
        [cdkConnectedOverlayOpen]="parent.menu.visible()"
        [cdkConnectedOverlay]="{ origin: trigger().overlayOrigin, usePopover: 'inline' }"
        [cdkConnectedOverlayPositions]="[
          { originX: 'end', originY: 'top', overlayY: 'top', overlayX: 'start', offsetX: 4 },
        ]"
        cdkAttachPopoverAsChild
      >
        <ng-content />
      </ng-template>
    }
  `,
  host: {
    'data-slot': 'menu-sub-content',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScMenuSubContent {
  readonly trigger = input.required<ScMenuSubTrigger>();
  readonly parentMenu = input.required<ScMenu>();
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('', this.classInput()));
}
