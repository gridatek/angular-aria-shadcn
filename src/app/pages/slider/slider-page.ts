import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSliderDemo } from '../../examples/slider/sc-slider-demo';

@Component({
  selector: 'app-slider-page',
  imports: [ScSliderDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Slider</h1>
        <p class="text-muted-foreground">
          An input where the user selects a value from within a given range.
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
          <app-sc-slider-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SliderPage {}
