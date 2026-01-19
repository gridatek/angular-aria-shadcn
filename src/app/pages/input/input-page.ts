import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScInputDemo } from '../../examples/input/sc-input-demo';

@Component({
  selector: 'app-input-page',
  imports: [ScInputDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Input</h1>
        <p class="text-muted-foreground">
          Displays a form input field or a component that looks like an input field.
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
          <app-sc-input-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputPage {}
