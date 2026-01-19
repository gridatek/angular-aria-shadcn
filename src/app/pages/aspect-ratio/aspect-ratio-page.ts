import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScAspectRatioDemo } from '../../examples/aspect-ratio/sc-aspect-ratio-demo';

@Component({
  selector: 'app-aspect-ratio-page',
  imports: [ScAspectRatioDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Aspect Ratio</h1>
        <p class="text-muted-foreground">Displays content within a desired ratio.</p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Wrapper components with clean markup and encapsulated styles
          </p>
        </div>
        <div>
          <app-sc-aspect-ratio-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AspectRatioPage {}
