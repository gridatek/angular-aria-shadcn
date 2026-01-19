import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScDrawerDemo } from '../../examples/drawer/sc-drawer-demo';

@Component({
  selector: 'app-drawer-page',
  imports: [ScDrawerDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Drawer</h1>
        <p class="text-muted-foreground">
          A mobile-friendly slide-in panel that can be opened from any edge of the screen. Ideal for
          navigation menus, forms, and quick actions on touch devices.
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
          <app-sc-drawer-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DrawerPage {}
