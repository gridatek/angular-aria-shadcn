import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="min-h-screen bg-background">
      <!-- Header -->
      <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div class="container flex h-14 items-center px-4">
          <a routerLink="/" class="font-semibold">SC Components</a>
          <nav class="ml-6 flex items-center gap-4 text-sm">
            <a
              routerLink="/select"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Select
            </a>
            <a
              routerLink="/menu"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Menu
            </a>
            <a
              routerLink="/dialog"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Dialog
            </a>
            <a
              routerLink="/sheet"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Sheet
            </a>
            <a
              routerLink="/popover"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Popover
            </a>
            <a
              routerLink="/tooltip"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Tooltip
            </a>
          </nav>
        </div>
      </header>

      <!-- Main content -->
      <main class="container px-4 py-8">
        <router-outlet />
      </main>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
