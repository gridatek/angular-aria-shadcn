import { ComboboxPopupContainer } from '@angular/aria/combobox';
import { CdkConnectedOverlay, OverlayModule } from '@angular/cdk/overlay';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { ScSelect } from './sc-select';

@Component({
  selector: 'div[sc-select-content]',
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
          <div [class]="contentClass()">
            <ng-content />
          </div>
        </ng-template>
      }
    </ng-template>
  `,
  host: {
    'data-slot': 'select-content',
    style: 'display: contents',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSelectContent {
  private readonly select = inject(ScSelect);
  private readonly overlay = viewChild(CdkConnectedOverlay);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly origin = computed(() => this.select.origin());

  protected readonly originWidth = computed(() => {
    const origin = this.origin();
    return origin?.elementRef.nativeElement.offsetWidth ?? 'auto';
  });

  protected readonly contentClass = computed(() =>
    cn(
      'bg-popover text-popover-foreground z-50 max-h-[min(var(--radix-select-content-available-height,384px),384px)] min-w-[8rem] overflow-hidden rounded-md border shadow-md',
      // Animation classes
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      this.classInput(),
    ),
  );
}
