import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScAccordionDemo } from '../../examples/accordion/sc-accordion-demo';

@Component({
  selector: 'app-accordion-page',
  imports: [ScAccordionDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Accordion</h1>
        <p class="text-muted-foreground">
          A vertically stacked set of interactive headings that reveal or hide associated content.
        </p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Collapsible sections with single or multiple mode support
          </p>
        </div>
        <div>
          <app-sc-accordion-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AccordionPage {}
