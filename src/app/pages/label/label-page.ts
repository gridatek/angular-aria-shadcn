import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScLabelDemo } from '../../examples/label/sc-label-demo';

@Component({
  selector: 'app-label-page',
  imports: [ScLabelDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Label</h1>
        <p class="text-muted-foreground">Renders an accessible label associated with controls.</p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Wrapper components with clean markup and encapsulated styles
          </p>
        </div>
        <div>
          <app-sc-label-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LabelPage {}
