import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCheckboxDemo } from '../../examples/checkbox/sc-checkbox-demo';

@Component({
  selector: 'app-checkbox-page',
  imports: [ScCheckboxDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Checkbox</h1>
        <p class="text-muted-foreground">
          A control that allows the user to toggle between checked and not checked.
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
          <app-sc-checkbox-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CheckboxPage {}
