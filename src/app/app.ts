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
            <a
              routerLink="/collapsible"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Collapsible
            </a>
            <a
              routerLink="/alert-dialog"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Alert Dialog
            </a>
            <a
              routerLink="/toast"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Toast
            </a>
            <a
              routerLink="/hover-card"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Hover Card
            </a>
            <a
              routerLink="/navigation-menu"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Nav Menu
            </a>
            <a
              routerLink="/context-menu"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Context Menu
            </a>
            <a
              routerLink="/tabs"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Tabs
            </a>
            <a
              routerLink="/accordion"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Accordion
            </a>
            <a
              routerLink="/command"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Command
            </a>
            <a
              routerLink="/drawer"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Drawer
            </a>
            <a
              routerLink="/progress"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Progress
            </a>
            <a
              routerLink="/scroll-area"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Scroll Area
            </a>
            <a
              routerLink="/breadcrumb"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Breadcrumb
            </a>
            <a
              routerLink="/separator"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Separator
            </a>
            <a
              routerLink="/skeleton"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Skeleton
            </a>
            <a
              routerLink="/avatar"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Avatar
            </a>
            <a
              routerLink="/badge"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Badge
            </a>
            <a
              routerLink="/switch"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Switch
            </a>
            <a
              routerLink="/slider"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Slider
            </a>
            <a
              routerLink="/toggle"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Toggle
            </a>
            <a
              routerLink="/toggle-group"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Toggle Group
            </a>
            <a
              routerLink="/input-otp"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Input OTP
            </a>
            <a
              routerLink="/checkbox"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Checkbox
            </a>
            <a
              routerLink="/radio-group"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Radio Group
            </a>
            <a
              routerLink="/label"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Label
            </a>
            <a
              routerLink="/input"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Input
            </a>
            <a
              routerLink="/textarea"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Textarea
            </a>
            <a
              routerLink="/card"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Card
            </a>
            <a
              routerLink="/alert"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Alert
            </a>
            <a
              routerLink="/table"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Table
            </a>
            <a
              routerLink="/pagination"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pagination
            </a>
            <a
              routerLink="/aspect-ratio"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Aspect Ratio
            </a>
            <a
              routerLink="/resizable"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              Resizable
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
