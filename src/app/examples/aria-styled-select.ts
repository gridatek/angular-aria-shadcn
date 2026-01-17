import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Combobox, ComboboxInput, ComboboxPopupContainer } from '@angular/aria/combobox';
import { Listbox, Option } from '@angular/aria/listbox';

/**
 * Demo 2: Angular ARIA select with shadcn Tailwind classes applied directly
 * Same ARIA structure as Demo 1, but with shadcn-style Tailwind classes.
 */
@Component({
  selector: 'app-aria-styled-select',
  imports: [Combobox, ComboboxInput, ComboboxPopupContainer, Listbox, Option],
  template: `
    <div ngCombobox #combobox="ngCombobox" readonly>
      <button
        type="button"
        class="border-input bg-background ring-offset-background flex h-9 w-full items-center justify-between gap-2 whitespace-nowrap rounded-md border px-3 py-2 text-sm shadow-xs placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
        [attr.aria-expanded]="combobox.expanded()"
      >
        <input
          ngComboboxInput
          #origin
          readonly
          tabindex="-1"
          class="sr-only pointer-events-none absolute"
        />
        @if (selectedLabel(); as label) {
          <span class="truncate">{{ label }}</span>
        } @else {
          <span class="text-muted-foreground">Select a label...</span>
        }
        <svg
          class="text-muted-foreground size-4 shrink-0 opacity-50"
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
      </button>

      <ng-template ngComboboxPopupContainer>
        <div
          ngListbox
          [(values)]="selectedValues"
          class="bg-popover text-popover-foreground relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        >
          @for (label of labels; track label) {
            <div
              ngOption
              [value]="label"
              [label]="label"
              class="relative flex w-full cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
            >
              <span class="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
                @if (selectedValues()[0] === label) {
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
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                }
              </span>
              {{ label }}
            </div>
          }
        </div>
      </ng-template>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AriaStyledSelect {
  readonly labels = [
    'Important',
    'Starred',
    'Work',
    'Personal',
    'To Do',
    'Later',
    'Read',
    'Travel',
  ];
  readonly selectedValues = signal<string[]>([]);

  readonly selectedLabel = () => this.selectedValues()[0];
}
