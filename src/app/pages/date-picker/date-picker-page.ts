import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScDatePickerDemo } from '../../examples/date-picker/sc-date-picker-demo';

@Component({
  selector: 'app-date-picker-page',
  imports: [ScDatePickerDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Date Picker</h1>
        <p class="text-muted-foreground">
          A date picker component with calendar popup for selecting dates.
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
          <app-sc-date-picker-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DatePickerPage {}
