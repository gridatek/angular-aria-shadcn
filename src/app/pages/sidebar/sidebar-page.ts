import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSidebarDemo } from '../../examples/sidebar/sc-sidebar-demo';

@Component({
  selector: 'app-sidebar-page',
  imports: [ScSidebarDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Sidebar</h1>
        <p class="text-muted-foreground">
          A composable, themeable and customizable sidebar component.
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
          <app-sc-sidebar-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SidebarPage {}
