import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScRatingDemo } from '../../examples/rating/sc-rating-demo';

@Component({
  selector: 'app-rating-page',
  imports: [ScRatingDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Rating</h1>
        <p class="text-muted-foreground">A star rating component for user feedback and reviews.</p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Wrapper components with clean markup and encapsulated styles
          </p>
        </div>
        <div>
          <app-sc-rating-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RatingPage {}
