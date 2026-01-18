import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScToastDemo } from '../../examples/toast/sc-toast-demo';

@Component({
  selector: 'app-toast-page',
  imports: [ScToastDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Toast</h1>
        <p class="text-muted-foreground">
          A succinct message that is displayed temporarily to provide feedback.
        </p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Service-based toast notifications with auto-dismiss and action support
          </p>
        </div>
        <div>
          <app-sc-toast-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ToastPage {}
