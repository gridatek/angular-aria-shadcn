import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSeparatorDemo } from '../../examples/separator/sc-separator-demo';

@Component({
  selector: 'app-separator-page',
  imports: [ScSeparatorDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Separator</h1>
        <p class="text-muted-foreground">Visually or semantically separates content.</p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Wrapper components with clean markup and encapsulated styles
          </p>
        </div>
        <div>
          <app-sc-separator-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SeparatorPage {}
