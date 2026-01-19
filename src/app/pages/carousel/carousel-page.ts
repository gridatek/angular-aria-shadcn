import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCarouselDemo } from '../../examples/carousel/sc-carousel-demo';

@Component({
  selector: 'app-carousel-page',
  imports: [ScCarouselDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Carousel</h1>
        <p class="text-muted-foreground">
          A carousel with motion and swipe built using CSS scroll snap.
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
          <app-sc-carousel-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CarouselPage {}
