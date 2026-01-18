import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScDialogDemo } from '../../examples/dialog/sc-dialog-demo';

@Component({
  selector: 'app-dialog-page',
  imports: [ScDialogDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Dialog</h1>
        <p class="text-muted-foreground">
          A window overlaid on either the primary window or another dialog window, rendering the
          content underneath inert.
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
          <app-sc-dialog-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DialogPage {}
