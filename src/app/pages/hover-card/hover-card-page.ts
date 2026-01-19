import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScHoverCardDemo } from '../../examples/hover-card/sc-hover-card-demo';

@Component({
  selector: 'app-hover-card-page',
  imports: [ScHoverCardDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Hover Card</h1>
        <p class="text-muted-foreground">
          For sighted users to preview content available behind a link.
        </p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Hover-triggered cards with customizable positioning and delays
          </p>
        </div>
        <div>
          <app-sc-hover-card-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HoverCardPage {}
