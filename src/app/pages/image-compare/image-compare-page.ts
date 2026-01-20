import { Component } from '@angular/core';
import { ScImageCompareDemo } from '../../examples/image-compare';

@Component({
  selector: 'app-image-compare-page',
  imports: [ScImageCompareDemo],
  template: `
    <div class="container py-10">
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2">Image Compare</h1>
        <p class="text-muted-foreground">
          Before/after image comparison slider with keyboard support.
        </p>
      </div>
      <sc-image-compare-demo />
    </div>
  `,
})
export default class ImageComparePage {}
