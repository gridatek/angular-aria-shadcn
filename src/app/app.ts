import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AriaSelect } from './examples/aria-select';
import { AriaStyledSelect } from './examples/aria-styled-select';
import { ScSelectDemo } from './examples/sc-select-demo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AriaSelect, AriaStyledSelect, ScSelectDemo],
  template: `
    <main class="min-h-screen bg-background p-8">
      <h1 class="text-3xl font-bold text-foreground mb-8">Select Component Demos</h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Demo 1: Raw ARIA -->
        <div class="space-y-4">
          <div class="space-y-2">
            <h2 class="text-xl font-semibold text-foreground">1. Raw ARIA</h2>
            <p class="text-sm text-muted-foreground">
              Original Angular ARIA components with basic inline styles
            </p>
          </div>
          <div class="w-[200px]">
            <app-aria-select />
          </div>
        </div>

        <!-- Demo 2: ARIA + shadcn -->
        <div class="space-y-4">
          <div class="space-y-2">
            <h2 class="text-xl font-semibold text-foreground">2. ARIA + shadcn</h2>
            <p class="text-sm text-muted-foreground">
              Angular ARIA with shadcn Tailwind classes applied directly
            </p>
          </div>
          <div class="w-[200px]">
            <app-aria-styled-select />
          </div>
        </div>

        <!-- Demo 3: SC Components -->
        <div class="space-y-4">
          <div class="space-y-2">
            <h2 class="text-xl font-semibold text-foreground">3. SC Components</h2>
            <p class="text-sm text-muted-foreground">
              Wrapper components with clean markup and encapsulated styles
            </p>
          </div>
          <div class="w-[200px]">
            <app-sc-select-demo />
          </div>
        </div>
      </div>

      <router-outlet />
    </main>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('angular-aria-shadcn');
}
