import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSheetDemo } from '../../examples/sheet/sc-sheet-demo';

@Component({
  selector: 'app-sheet-page',
  imports: [ScSheetDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Sheet</h1>
        <p class="text-muted-foreground">
          Extends the Dialog component to display content that complements the main content of the
          screen. Slides in from the edge of the screen.
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
          <app-sc-sheet-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SheetPage {}
