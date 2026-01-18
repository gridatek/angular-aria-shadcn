# Select Components

A set of components for building accessible select dropdowns following the Single Responsibility Principle.

## Components

| Component               | Selector                        | Responsibility                                                  |
| ----------------------- | ------------------------------- | --------------------------------------------------------------- |
| `ScSelect`              | `div[sc-select]`                | Root container, wraps `Combobox` from `@angular/aria`           |
| `ScSelectTrigger`       | `div[sc-select-trigger]`        | Trigger button styling, exposes overlay origin                  |
| `ScSelectInput`         | `input[sc-select-input]`        | Hidden input, wraps `ComboboxInput` from `@angular/aria`        |
| `ScSelectValue`         | `span[sc-select-value]`         | Display selected value with styling                             |
| `ScSelectIcon`          | `svg[sc-select-icon]`           | Chevron icon styling (use with `@semantic-icons/lucide-icons`)  |
| `ScSelectPopup`         | `div[sc-select-popup]`          | Overlay positioning & combobox popup container (infrastructure) |
| `ScSelectContent`       | `div[sc-select-content]`        | Content container, wraps `Listbox` from `@angular/aria`         |
| `ScSelectItem`          | `div[sc-select-item]`           | Option item styling, wraps `Option` from `@angular/aria`        |
| `ScSelectItemIndicator` | `svg[sc-select-item-indicator]` | Checkmark icon for selected state                               |

## Usage

### Template

```html
<div sc-select readonly>
  <div sc-select-trigger>
    <span sc-select-value>{{ displayValue() }}</span>
    <input sc-select-input aria-label="Select" placeholder="Select an option" />
    <svg sc-select-icon si-chevron-down-icon aria-hidden="true"></svg>
  </div>
  <div sc-select-popup>
    <div sc-select-content>
      @for (option of options; track option.value) {
      <div sc-select-item [value]="option.value" [label]="option.label">
        {{ option.label }}
        <svg sc-select-item-indicator si-check-icon aria-hidden="true"></svg>
      </div>
      }
    </div>
  </div>
</div>
```

### Component

```typescript
import { ChangeDetectionStrategy, Component, computed, viewChild } from '@angular/core';
import { SiCheckIcon, SiChevronDownIcon } from '@semantic-icons/lucide-icons';
import {
  ScSelect,
  ScSelectContent,
  ScSelectIcon,
  ScSelectInput,
  ScSelectItem,
  ScSelectItemIndicator,
  ScSelectPopup,
  ScSelectTrigger,
  ScSelectValue,
} from '@app/ui/select';

@Component({
  selector: 'app-example',
  imports: [
    ScSelect,
    ScSelectContent,
    ScSelectIcon,
    ScSelectInput,
    ScSelectItem,
    ScSelectItemIndicator,
    ScSelectPopup,
    ScSelectTrigger,
    ScSelectValue,
    SiCheckIcon,
    SiChevronDownIcon,
  ],
  template: `...`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleComponent {
  private readonly select = viewChild.required(ScSelect);

  displayValue = computed(() => {
    const values = this.select().values();
    return values.length ? values[0] : 'Select an option';
  });

  options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
}
```

### Accessing Selected Values

Use `viewChild` to query `ScSelect` and access the `values()` signal:

```typescript
private readonly select = viewChild.required(ScSelect);

selectedValues = computed(() => this.select().values());
```

## Architecture

```
ScSelect (root, wraps Combobox)
├── ScSelectTrigger (trigger + overlay origin)
│   ├── ScSelectValue (display value)
│   ├── ScSelectInput (wraps ComboboxInput)
│   └── ScSelectIcon (chevron icon)
└── ScSelectPopup (overlay infrastructure)
    └── ScSelectContent (wraps Listbox)
        └── ScSelectItem (wraps Option)
            └── ScSelectItemIndicator (checkmark icon)
```

## Dependencies

- `@angular/aria/combobox` - Combobox behavior
- `@angular/aria/listbox` - Listbox and option behavior
- `@angular/cdk/overlay` - Overlay positioning
- `@semantic-icons/lucide-icons` - Icon library
