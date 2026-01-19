import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScTimePickerDemo } from '../../examples/time-picker/sc-time-picker-demo';

@Component({
  selector: 'app-time-picker-page',
  imports: [ScTimePickerDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Time Picker</h1>
        <p class="text-muted-foreground">A component for selecting time values.</p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Wrapper components with clean markup and encapsulated styles
          </p>
        </div>
        <div>
          <app-sc-time-picker-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TimePickerPage {}
