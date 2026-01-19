import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScInputOtpDemo } from '../../examples/input-otp/sc-input-otp-demo';

@Component({
  selector: 'app-input-otp-page',
  imports: [ScInputOtpDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Input OTP</h1>
        <p class="text-muted-foreground">
          Accessible one-time password component with copy paste functionality.
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
          <app-sc-input-otp-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOtpPage {}
