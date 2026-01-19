import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScProgressDemo } from '../../examples/progress/sc-progress-demo';

@Component({
  selector: 'app-progress-page',
  imports: [ScProgressDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Progress</h1>
        <p class="text-muted-foreground">
          Displays an indicator showing the completion progress of a task, typically displayed as a
          progress bar.
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
          <app-sc-progress-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProgressPage {}
