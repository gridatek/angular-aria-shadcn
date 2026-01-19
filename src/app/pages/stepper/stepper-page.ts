import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScStepperDemo } from '../../examples/stepper/sc-stepper-demo';

@Component({
  selector: 'app-stepper-page',
  imports: [ScStepperDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Stepper</h1>
        <p class="text-muted-foreground">
          A multi-step wizard component for guiding users through a process.
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
          <app-sc-stepper-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StepperPage {}
