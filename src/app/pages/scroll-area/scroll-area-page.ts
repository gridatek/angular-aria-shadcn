import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScScrollAreaDemo } from '../../examples/scroll-area/sc-scroll-area-demo';

@Component({
  selector: 'app-scroll-area-page',
  imports: [ScScrollAreaDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Scroll Area</h1>
        <p class="text-muted-foreground">
          Augments native scroll functionality for custom, cross-browser styling with a custom
          scrollbar.
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
          <app-sc-scroll-area-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ScrollAreaPage {}
