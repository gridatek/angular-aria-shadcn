import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScTooltipDemo } from '../../examples/tooltip/sc-tooltip-demo';

@Component({
  selector: 'app-tooltip-page',
  imports: [ScTooltipDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Tooltip</h1>
        <p class="text-muted-foreground">
          A popup that displays information related to an element when the element receives keyboard
          focus or the mouse hovers over it.
        </p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Wrapper components with clean markup and encapsulated styles
          </p>
        </div>
        <div>
          <app-sc-tooltip-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TooltipPage {}
