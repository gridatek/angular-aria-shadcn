import { ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import { Combobox, ComboboxInput, ComboboxPopupContainer } from '@angular/aria/combobox';
import { Listbox, Option } from '@angular/aria/listbox';

/**
 * Demo 1: Original Angular ARIA select example - No styling modifications
 * This demonstrates the raw Angular ARIA combobox/listbox pattern.
 */
@Component({
  selector: 'app-aria-select',
  imports: [Combobox, ComboboxInput, ComboboxPopupContainer, Listbox, Option],
  template: `
    <div ngCombobox #combobox="ngCombobox" readonly>
      <button
        type="button"
        style="
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border: 1px solid #ccc;
          border-radius: 4px;
          background: white;
          cursor: pointer;
        "
        [attr.aria-expanded]="combobox.expanded()"
      >
        <input
          ngComboboxInput
          #origin
          readonly
          tabindex="-1"
          style="
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            border: 0;
          "
        />
        <span>{{ selectedLabel() || 'Select a label...' }}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <ng-template ngComboboxPopupContainer>
        <ul
          ngListbox
          [(values)]="selectedValues"
          style="
            list-style: none;
            margin: 4px 0 0;
            padding: 4px;
            border: 1px solid #ccc;
            border-radius: 4px;
            background: white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.15);
            min-width: 150px;
          "
        >
          @for (label of labels; track label) {
            <li
              ngOption
              [value]="label"
              [label]="label"
              style="
                padding: 8px 12px;
                cursor: pointer;
                border-radius: 2px;
              "
              [style.background]="selectedValues()[0] === label ? '#e6f7ff' : 'transparent'"
            >
              {{ label }}
            </li>
          }
        </ul>
      </ng-template>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AriaSelect {
  readonly labels = ['Important', 'Starred', 'Work', 'Personal', 'To Do', 'Later', 'Read', 'Travel'];
  readonly selectedValues = signal<string[]>([]);

  readonly selectedLabel = () => this.selectedValues()[0];
}
