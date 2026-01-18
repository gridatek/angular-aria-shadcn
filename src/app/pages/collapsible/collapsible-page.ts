import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCollapsibleDemo } from '../../examples/collapsible/sc-collapsible-demo';

@Component({
  selector: 'app-collapsible-page',
  imports: [ScCollapsibleDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Collapsible</h1>
        <p class="text-muted-foreground">
          An interactive component which expands/collapses a panel.
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
          <app-sc-collapsible-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CollapsiblePage {}
