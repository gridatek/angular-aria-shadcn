import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScPopoverDemo } from '../../examples/popover/sc-popover-demo';

@Component({
  selector: 'app-popover-page',
  imports: [ScPopoverDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Popover</h1>
        <p class="text-muted-foreground">
          Displays rich content in a portal, triggered by a button.
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
          <app-sc-popover-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PopoverPage {}
