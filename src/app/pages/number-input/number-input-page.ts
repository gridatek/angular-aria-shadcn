import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScNumberInputDemo } from '../../examples/number-input/sc-number-input-demo';

@Component({
  selector: 'app-number-input-page',
  imports: [ScNumberInputDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Number Input</h1>
        <p class="text-muted-foreground">
          A numeric input component with increment and decrement buttons.
        </p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Flexible number input with min/max constraints, custom step values, and keyboard
            support.
          </p>
        </div>
        <div>
          <app-sc-number-input-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NumberInputPage {}
