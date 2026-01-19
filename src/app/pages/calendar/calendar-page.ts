import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCalendarDemo } from '../../examples/calendar/sc-calendar-demo';

@Component({
  selector: 'app-calendar-page',
  imports: [ScCalendarDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Calendar</h1>
        <p class="text-muted-foreground">
          A date picker component with support for single, multiple, and range selection.
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
          <app-sc-calendar-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CalendarPage {}
