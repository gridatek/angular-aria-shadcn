import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScDropdownMenuDemo } from '../../examples/dropdown-menu/sc-dropdown-menu-demo';

@Component({
  selector: 'app-dropdown-menu-page',
  imports: [ScDropdownMenuDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Dropdown Menu</h1>
        <p class="text-muted-foreground">
          Displays a menu to the user — such as a set of actions or functions — triggered by a
          button.
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
          <app-sc-dropdown-menu-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DropdownMenuPage {}
