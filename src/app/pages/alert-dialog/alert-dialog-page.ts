import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScAlertDialogDemo } from '../../examples/alert-dialog/sc-alert-dialog-demo';

@Component({
  selector: 'app-alert-dialog-page',
  imports: [ScAlertDialogDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Alert Dialog</h1>
        <p class="text-muted-foreground">
          A modal dialog that interrupts the user with important content and expects a response.
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
          <app-sc-alert-dialog-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AlertDialogPage {}
