import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AriaManu } from '../../examples/menu/aria-menu';
import { AriaStyledMenu } from '../../examples/menu/aria-styled-menu';

@Component({
  selector: 'app-menu-page',
  imports: [AriaManu, AriaStyledMenu],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Menu</h1>
        <p class="text-muted-foreground">
          Displays a menu to the user — such as a set of actions or functions — triggered by a
          button.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Demo 1: Raw ARIA -->
        <div class="space-y-4">
          <div class="space-y-2">
            <h2 class="text-xl font-semibold">1. Raw ARIA</h2>
            <p class="text-sm text-muted-foreground">
              Original Angular ARIA components with basic inline styles
            </p>
          </div>
          <div>
            <app-aria-menu />
          </div>
        </div>

        <!-- Demo 2: ARIA + shadcn -->
        <div class="space-y-4">
          <div class="space-y-2">
            <h2 class="text-xl font-semibold">2. ARIA + shadcn</h2>
            <p class="text-sm text-muted-foreground">
              Angular ARIA with shadcn Tailwind classes applied directly
            </p>
          </div>
          <div>
            <app-aria-styled-menu />
          </div>
        </div>

        <!-- Demo 3: SC Components -->
        <div class="space-y-4">
          <div class="space-y-2">
            <h2 class="text-xl font-semibold">3. SC Components</h2>
            <p class="text-sm text-muted-foreground">
              Wrapper components with clean markup and encapsulated styles
            </p>
          </div>
          <div>
            <p class="text-sm text-muted-foreground italic">Coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MenuPage {}
