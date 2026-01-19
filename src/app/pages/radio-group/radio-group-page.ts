import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScRadioGroupDemo } from '../../examples/radio-group/sc-radio-group-demo';

@Component({
  selector: 'app-radio-group-page',
  imports: [ScRadioGroupDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Radio Group</h1>
        <p class="text-muted-foreground">
          A set of checkable buttons where only one button can be checked at a time.
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
          <app-sc-radio-group-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RadioGroupPage {}
