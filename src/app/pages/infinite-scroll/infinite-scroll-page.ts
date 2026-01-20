import { Component } from '@angular/core';
import { ScInfiniteScrollDemo } from '../../examples/infinite-scroll';

@Component({
  selector: 'app-infinite-scroll-page',
  imports: [ScInfiniteScrollDemo],
  template: `
    <div class="container py-10">
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2">Infinite Scroll</h1>
        <p class="text-muted-foreground">
          Automatically load more content as the user scrolls to the bottom.
        </p>
      </div>
      <sc-infinite-scroll-demo />
    </div>
  `,
})
export default class InfiniteScrollPage {}
