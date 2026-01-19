import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScContextMenuDemo } from '../../examples/context-menu/sc-context-menu-demo';

@Component({
  selector: 'app-context-menu-page',
  imports: [ScContextMenuDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Context Menu</h1>
        <p class="text-muted-foreground">
          Displays a menu at the pointer position when triggered by a right-click.
        </p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Right-click triggered menu with submenu support
          </p>
        </div>
        <div>
          <app-sc-context-menu-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContextMenuPage {}
