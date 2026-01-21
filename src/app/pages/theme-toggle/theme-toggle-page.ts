import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScThemeToggleDemo } from '../../examples/theme-toggle/sc-theme-toggle-demo';

@Component({
  selector: 'app-theme-toggle-page',
  imports: [ScThemeToggleDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Theme Toggle</h1>
        <p class="text-muted-foreground">
          A component for switching between light and dark themes with system preference support.
        </p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Toggle button and select dropdown for theme switching
          </p>
        </div>
        <div>
          <app-sc-theme-toggle-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ThemeTogglePage {}
