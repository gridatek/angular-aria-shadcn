import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScNavigationMenuDemo } from '../../examples/navigation-menu/sc-navigation-menu-demo';

@Component({
  selector: 'app-navigation-menu-page',
  imports: [ScNavigationMenuDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Navigation Menu</h1>
        <p class="text-muted-foreground">
          A collection of links for navigating websites with hover-activated dropdowns.
        </p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Horizontal navigation with mega-menu style dropdowns
          </p>
        </div>
        <div>
          <app-sc-navigation-menu-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NavigationMenuPage {}
