import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScChartDemo } from '../../examples/chart/sc-chart-demo';

@Component({
  selector: 'app-chart-page',
  imports: [ScChartDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Chart</h1>
        <p class="text-muted-foreground">SVG-based chart components for data visualization.</p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Wrapper components with clean markup and encapsulated styles
          </p>
        </div>
        <div>
          <app-sc-chart-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChartPage {}
