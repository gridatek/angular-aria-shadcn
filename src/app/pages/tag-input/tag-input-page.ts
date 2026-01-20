import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScTagInputDemo } from '../../examples/tag-input/sc-tag-input-demo';

@Component({
  selector: 'app-tag-input-page',
  imports: [ScTagInputDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Tag Input</h1>
        <p class="text-muted-foreground">
          A multi-tag input component with chips for adding and removing tags.
        </p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Flexible tag input with keyboard support, validation, and customizable delimiters.
          </p>
        </div>
        <div>
          <app-sc-tag-input-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TagInputPage {}
