import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScResizableDemo } from '../../examples/resizable/sc-resizable-demo';

@Component({
  selector: 'app-resizable-page',
  imports: [ScResizableDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Resizable</h1>
        <p class="text-muted-foreground">
          Accessible resizable panel groups and layouts with keyboard support.
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
          <app-sc-resizable-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ResizablePage {}
