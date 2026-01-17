import {
  Combobox,
  ComboboxInput,
  ComboboxPopup,
  ComboboxPopupContainer,
} from '@angular/aria/combobox';
import { Listbox, Option } from '@angular/aria/listbox';
import { OverlayModule } from '@angular/cdk/overlay';
import {
  afterRenderEffect,
  ChangeDetectionStrategy,
  Component,
  computed,
  viewChild,
  viewChildren,
} from '@angular/core';

/**
 * Demo 2: Angular ARIA select with shadcn Tailwind classes applied directly
 * Same structure as Demo 1, but styled with Tailwind/shadcn design tokens.
 */
@Component({
  selector: 'app-aria-styled-select',
  imports: [
    Combobox,
    ComboboxInput,
    ComboboxPopup,
    ComboboxPopupContainer,
    Listbox,
    Option,
    OverlayModule,
  ],
  template: `
    <div ngCombobox readonly class="relative">
      <div
        #origin
        class="border-input bg-background relative flex h-9 w-full items-center rounded-md border px-3 text-sm shadow-xs transition-colors hover:bg-accent/50 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background has-[[aria-disabled=true]]:cursor-not-allowed has-[[aria-disabled=true]]:opacity-50"
      >
        <span class="pointer-events-none absolute left-3 flex items-center gap-2">
          @if (displayIcon(); as icon) {
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
              @switch (icon) {
                @case ('label') {
                  <path
                    d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"
                  />
                  <path d="M7 7h.01" />
                }
                @case ('star') {
                  <polygon
                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                  />
                }
                @case ('work') {
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                }
                @case ('person') {
                  <circle cx="12" cy="8" r="5" />
                  <path d="M20 21a8 8 0 1 0-16 0" />
                }
                @case ('checklist') {
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="m9 12 2 2 4-4" />
                }
                @case ('schedule') {
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                }
                @case ('menu_book') {
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                }
                @case ('flight') {
                  <path
                    d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
                  />
                }
              }
            </svg>
          }
          <span class="truncate">{{ displayValue() }}</span>
        </span>
        <input
          aria-label="Label dropdown"
          placeholder="Select a label"
          ngComboboxInput
          class="h-full w-full cursor-pointer border-none bg-transparent px-8 opacity-0 outline-none"
        />
        <svg
          class="text-muted-foreground pointer-events-none absolute right-3 size-4 shrink-0 opacity-50 transition-transform duration-150 [[aria-expanded=true]~&]:rotate-180"
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
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      <ng-template ngComboboxPopupContainer>
        <ng-template
          [cdkConnectedOverlay]="{ origin, usePopover: 'inline', matchWidth: true }"
          [cdkConnectedOverlayOpen]="true"
        >
          <div
            class="bg-popover text-popover-foreground z-50 mt-1 max-h-44 w-full overflow-hidden rounded-md border p-1 shadow-md"
          >
            <div ngListbox class="flex flex-col gap-0.5 overflow-auto">
              @for (label of labels; track label.value) {
                <div
                  ngOption
                  [value]="label.value"
                  [label]="label.value"
                  class="relative flex min-h-9 cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 pr-8 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[active=true]:ring-2 data-[active=true]:ring-ring data-[active=true]:ring-offset-1 aria-selected:bg-accent/50 aria-selected:text-accent-foreground"
                >
                  <svg
                    class="text-muted-foreground size-4 shrink-0"
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
                    @switch (label.icon) {
                      @case ('label') {
                        <path
                          d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"
                        />
                        <path d="M7 7h.01" />
                      }
                      @case ('star') {
                        <polygon
                          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        />
                      }
                      @case ('work') {
                        <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      }
                      @case ('person') {
                        <circle cx="12" cy="8" r="5" />
                        <path d="M20 21a8 8 0 1 0-16 0" />
                      }
                      @case ('checklist') {
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="m9 12 2 2 4-4" />
                      }
                      @case ('schedule') {
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      }
                      @case ('menu_book') {
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                      }
                      @case ('flight') {
                        <path
                          d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
                        />
                      }
                    }
                  </svg>
                  <span class="flex-1">{{ label.value }}</span>
                  <svg
                    class="absolute right-2 size-4 opacity-0 aria-selected:opacity-100"
                    [class.opacity-100]="listbox()?.values()?.[0] === label.value"
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
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
              }
            </div>
          </div>
        </ng-template>
      </ng-template>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AriaStyledSelect {
  listbox = viewChild<Listbox<string>>(Listbox);
  options = viewChildren<Option<string>>(Option);
  combobox = viewChild<Combobox<string>>(Combobox);

  displayIcon = computed(() => {
    const values = this.listbox()?.values() || [];
    const label = this.labels.find((label) => label.value === values[0]);
    return label ? label.icon : '';
  });

  displayValue = computed(() => {
    const values = this.listbox()?.values() || [];
    return values.length ? values[0] : 'Select a label';
  });

  labels = [
    { value: 'Important', icon: 'label' },
    { value: 'Starred', icon: 'star' },
    { value: 'Work', icon: 'work' },
    { value: 'Personal', icon: 'person' },
    { value: 'To Do', icon: 'checklist' },
    { value: 'Later', icon: 'schedule' },
    { value: 'Read', icon: 'menu_book' },
    { value: 'Travel', icon: 'flight' },
  ];

  constructor() {
    afterRenderEffect(() => {
      const option = this.options().find((opt) => opt.active());
      setTimeout(() => option?.element.scrollIntoView({ block: 'nearest' }), 50);
    });

    afterRenderEffect(() => {
      if (!this.combobox()?.expanded()) {
        setTimeout(() => this.listbox()?.element.scrollTo(0, 0), 150);
      }
    });
  }
}
