import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSkeletonDemo } from '../../examples/skeleton/sc-skeleton-demo';

@Component({
  selector: 'app-skeleton-page',
  imports: [ScSkeletonDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Skeleton</h1>
        <p class="text-muted-foreground">Use to show a placeholder while content is loading.</p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Wrapper components with clean markup and encapsulated styles
          </p>
        </div>
        <div>
          <app-sc-skeleton-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SkeletonPage {}
