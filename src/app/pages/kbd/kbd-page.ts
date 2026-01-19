import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScKbdDemo } from '../../examples/kbd/sc-kbd-demo';

@Component({
  selector: 'app-kbd-page',
  imports: [ScKbdDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Kbd</h1>
        <p class="text-muted-foreground">A component for displaying keyboard keys and shortcuts.</p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Wrapper components with clean markup and encapsulated styles
          </p>
        </div>
        <div>
          <app-sc-kbd-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class KbdPage {}
