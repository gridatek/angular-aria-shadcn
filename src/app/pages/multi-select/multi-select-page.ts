import { Component } from '@angular/core';
import { ScMultiSelectDemo } from '../../examples/multi-select';

@Component({
  selector: 'app-multi-select-page',
  imports: [ScMultiSelectDemo],
  template: `
    <div class="container py-10">
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2">Multi-Select</h1>
        <p class="text-muted-foreground">
          Select multiple options from a dropdown with chips, search, and select-all functionality.
        </p>
      </div>
      <sc-multi-select-demo />
    </div>
  `,
})
export default class MultiSelectPage {}
