import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScTextareaDemo } from '../../examples/textarea/sc-textarea-demo';

@Component({
  selector: 'app-textarea-page',
  imports: [ScTextareaDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Textarea</h1>
        <p class="text-muted-foreground">
          Displays a form textarea or a component that looks like a textarea.
        </p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Wrapper components with clean markup and encapsulated styles
          </p>
        </div>
        <div>
          <app-sc-textarea-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TextareaPage {}
