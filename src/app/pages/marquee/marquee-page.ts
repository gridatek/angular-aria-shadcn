import { Component } from '@angular/core';
import { ScMarqueeDemo } from '../../examples/marquee';

@Component({
  selector: 'app-marquee-page',
  imports: [ScMarqueeDemo],
  template: `
    <div class="container py-10">
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2">Marquee</h1>
        <p class="text-muted-foreground">
          Scrolling content with smooth animations, multiple directions, and customizable speed.
        </p>
      </div>
      <sc-marquee-demo />
    </div>
  `,
})
export default class MarqueePage {}
