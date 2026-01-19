import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScTabsDemo } from '../../examples/tabs/sc-tabs-demo';

@Component({
  selector: 'app-tabs-page',
  imports: [ScTabsDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Tabs</h1>
        <p class="text-muted-foreground">
          A set of layered sections of content, known as tab panels, displayed one at a time.
        </p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Accessible tabs with keyboard navigation and ARIA attributes
          </p>
        </div>
        <div>
          <app-sc-tabs-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TabsPage {}
