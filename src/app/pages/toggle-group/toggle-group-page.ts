import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScToggleGroupDemo } from '../../examples/toggle-group/sc-toggle-group-demo';

@Component({
  selector: 'app-toggle-group-page',
  imports: [ScToggleGroupDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Toggle Group</h1>
        <p class="text-muted-foreground">
          A set of two-state buttons that can be toggled on or off.
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
          <app-sc-toggle-group-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ToggleGroupPage {}
