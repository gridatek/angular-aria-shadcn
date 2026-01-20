import { Component } from '@angular/core';
import { ScSpinnerDemo } from '../../examples/spinner';

@Component({
  selector: 'app-spinner-page',
  imports: [ScSpinnerDemo],
  template: `
    <div class="container py-10">
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2">Spinner</h1>
        <p class="text-muted-foreground">
          Loading indicators with multiple animation styles and sizes.
        </p>
      </div>
      <sc-spinner-demo />
    </div>
  `,
})
export default class SpinnerPage {}
