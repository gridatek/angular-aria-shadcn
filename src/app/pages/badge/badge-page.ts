import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScBadgeDemo } from '../../examples/badge/sc-badge-demo';

@Component({
  selector: 'app-badge-page',
  imports: [ScBadgeDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Badge</h1>
        <p class="text-muted-foreground">
          Displays a badge or a component that looks like a badge.
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
          <app-sc-badge-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BadgePage {}
