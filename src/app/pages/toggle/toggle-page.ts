import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScToggleDemo } from '../../examples/toggle/sc-toggle-demo';

@Component({
  selector: 'app-toggle-page',
  imports: [ScToggleDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Toggle</h1>
        <p class="text-muted-foreground">A two-state button that can be either on or off.</p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Wrapper components with clean markup and encapsulated styles
          </p>
        </div>
        <div>
          <app-sc-toggle-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TogglePage {}
