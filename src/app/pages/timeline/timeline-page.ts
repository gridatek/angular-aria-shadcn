import { Component } from '@angular/core';
import { ScTimelineDemo } from '../../examples/timeline';

@Component({
  selector: 'app-timeline-page',
  imports: [ScTimelineDemo],
  template: `
    <div class="container py-10">
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2">Timeline</h1>
        <p class="text-muted-foreground">
          Display a sequence of events or activities in chronological order.
        </p>
      </div>
      <sc-timeline-demo />
    </div>
  `,
})
export default class TimelinePage {}
