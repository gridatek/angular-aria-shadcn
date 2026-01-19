import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScAlertDemo } from '../../examples/alert/sc-alert-demo';

@Component({
  selector: 'app-alert-page',
  imports: [ScAlertDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Alert</h1>
        <p class="text-muted-foreground">Displays a callout for important information.</p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Wrapper components with clean markup and encapsulated styles
          </p>
        </div>
        <div>
          <app-sc-alert-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AlertPage {}
