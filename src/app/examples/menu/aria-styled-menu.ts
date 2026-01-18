import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';
import { Menu, MenuContent, MenuItem, MenuTrigger } from '@angular/aria/menu';
import { OverlayModule } from '@angular/cdk/overlay';

/**
 * Demo 2: Angular ARIA menu with shadcn Tailwind classes applied directly
 * Same structure as Demo 1, but styled with Tailwind/shadcn design tokens.
 */
@Component({
  selector: 'app-aria-styled-menu',
  imports: [Menu, MenuContent, MenuItem, MenuTrigger, OverlayModule],
  template: `
    <button
      ngMenuTrigger
      #origin
      #trigger="ngMenuTrigger"
      [menu]="formatMenu()"
      class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <svg
        class="size-4"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
      Open Menu
    </button>
    <ng-template
      [cdkConnectedOverlayOpen]="trigger.expanded()"
      [cdkConnectedOverlay]="{ origin, usePopover: 'inline' }"
      [cdkConnectedOverlayPositions]="[
        { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top', offsetY: 4 },
      ]"
      cdkAttachPopoverAsChild
    >
      <div
        ngMenu
        #formatMenu="ngMenu"
        class="menu-container bg-popover text-popover-foreground z-50 min-w-[12rem] rounded-md border p-1 shadow-md"
      >
        <ng-template ngMenuContent>
          <div
            ngMenuItem
            value="Mark as read"
            class="relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[active=true]:bg-accent data-[active=true]:text-accent-foreground"
          >
            <svg
              class="text-muted-foreground size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              <path d="m16 19 2 2 4-4" />
            </svg>
            <span class="flex-1">Mark as read</span>
          </div>
          <div
            ngMenuItem
            value="Snooze"
            class="relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[active=true]:bg-accent data-[active=true]:text-accent-foreground"
          >
            <svg
              class="text-muted-foreground size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M2 12h4l3-9 4 18 3-9h4" />
            </svg>
            <span class="flex-1">Snooze</span>
          </div>
          <div
            role="separator"
            aria-orientation="horizontal"
            class="-mx-1 my-1 h-px bg-muted"
          ></div>
          <div
            ngMenuItem
            value="Categorize"
            #categorizeItem
            [submenu]="categorizeMenu()"
            class="relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[active=true]:bg-accent data-[active=true]:text-accent-foreground"
          >
            <svg
              class="text-muted-foreground size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path
                d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"
              />
              <path d="M7 7h.01" />
            </svg>
            <span class="flex-1">Categorize</span>
            <svg
              class="text-muted-foreground ml-auto size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
          <ng-template
            [cdkConnectedOverlayOpen]="formatMenu.visible()"
            [cdkConnectedOverlay]="{ origin: categorizeItem, usePopover: 'inline' }"
            [cdkConnectedOverlayPositions]="[
              { originX: 'end', originY: 'top', overlayY: 'top', overlayX: 'start', offsetX: 6 },
            ]"
            cdkAttachPopoverAsChild
          >
            <div
              ngMenu
              #categorizeMenu="ngMenu"
              class="submenu-container bg-popover text-popover-foreground z-50 min-w-[10rem] rounded-md border p-1 shadow-md"
            >
              <ng-template ngMenuContent>
                <div
                  ngMenuItem
                  value="Mark as important"
                  class="relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[active=true]:bg-accent data-[active=true]:text-accent-foreground"
                >
                  <svg
                    class="text-muted-foreground size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m15 5 4 4" />
                    <path
                      d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"
                    />
                    <path d="m8 6 2-2" />
                    <path d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z" />
                    <path d="m18 16 2-2" />
                    <path
                      d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"
                    />
                  </svg>
                  <span class="flex-1">Mark as important</span>
                </div>
                <div
                  ngMenuItem
                  value="Star"
                  class="relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[active=true]:bg-accent data-[active=true]:text-accent-foreground"
                >
                  <svg
                    class="text-muted-foreground size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    />
                  </svg>
                  <span class="flex-1">Star</span>
                </div>
                <div
                  ngMenuItem
                  value="Label"
                  class="relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[active=true]:bg-accent data-[active=true]:text-accent-foreground"
                >
                  <svg
                    class="text-muted-foreground size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"
                    />
                    <path d="M7 7h.01" />
                  </svg>
                  <span class="flex-1">Label</span>
                </div>
              </ng-template>
            </div>
          </ng-template>
          <div
            role="separator"
            aria-orientation="horizontal"
            class="-mx-1 my-1 h-px bg-muted"
          ></div>
          <div
            ngMenuItem
            value="Archive"
            class="relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[active=true]:bg-accent data-[active=true]:text-accent-foreground"
          >
            <svg
              class="text-muted-foreground size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <rect width="20" height="5" x="2" y="3" rx="1" />
              <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
              <path d="M10 12h4" />
            </svg>
            <span class="flex-1">Archive</span>
          </div>
          <div
            ngMenuItem
            value="Report spam"
            class="relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[active=true]:bg-accent data-[active=true]:text-accent-foreground"
          >
            <svg
              class="text-muted-foreground size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
              <line x1="4" x2="4" y1="22" y2="15" />
            </svg>
            <span class="flex-1">Report spam</span>
          </div>
          <div
            ngMenuItem
            value="Delete"
            class="relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-destructive outline-none transition-colors hover:bg-destructive/10 data-[active=true]:bg-destructive/10"
          >
            <svg
              class="size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              <line x1="10" x2="10" y1="11" y2="17" />
              <line x1="14" x2="14" y1="11" y2="17" />
            </svg>
            <span class="flex-1">Delete</span>
          </div>
        </ng-template>
      </div>
    </ng-template>
  `,
  styles: `
    [ngMenu][data-visible='false'] {
      display: none;
    }
    :host:has([ngMenuTrigger][aria-expanded='false']) .menu-container {
      opacity: 0;
      visibility: hidden;
      transition:
        opacity 150ms ease-in,
        visibility 0s 150ms;
    }
    :host:has([ngMenuTrigger][aria-expanded='true']) .menu-container {
      opacity: 1;
      visibility: visible;
      transition:
        opacity 150ms ease-out,
        visibility 0s;
    }
    .menu-container:has([ngMenuItem][aria-expanded='false']) .submenu-container {
      opacity: 0;
      visibility: hidden;
      transition:
        opacity 150ms ease-in,
        visibility 0s 150ms;
    }
    .menu-container:has([ngMenuItem][aria-expanded='true']) .submenu-container {
      opacity: 1;
      visibility: visible;
      transition:
        opacity 150ms ease-out,
        visibility 0s;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AriaStyledMenu {
  formatMenu = viewChild<Menu<string>>('formatMenu');
  categorizeMenu = viewChild<Menu<string>>('categorizeMenu');
}
