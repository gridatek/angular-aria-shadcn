import { Component } from '@angular/core';
import { ScCountdownDemo } from '../../examples/countdown';

@Component({
  selector: 'app-countdown-page',
  imports: [ScCountdownDemo],
  template: `
    <div class="container py-10">
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2">Countdown</h1>
        <p class="text-muted-foreground">
          Countdown timer with multiple variants, customizable labels, and completion events.
        </p>
      </div>
      <sc-countdown-demo />
    </div>
  `,
})
export default class CountdownPage {}
