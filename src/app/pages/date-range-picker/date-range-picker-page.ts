import { Component } from '@angular/core';
import { ScDateRangePickerDemo } from '../../examples/date-range-picker';

@Component({
  selector: 'app-date-range-picker-page',
  imports: [ScDateRangePickerDemo],
  template: `
    <div class="container py-10">
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2">Date Range Picker</h1>
        <p class="text-muted-foreground">
          Select a range of dates with presets, min/max constraints, and various display formats.
        </p>
      </div>
      <sc-date-range-picker-demo />
    </div>
  `,
})
export default class DateRangePickerPage {}
