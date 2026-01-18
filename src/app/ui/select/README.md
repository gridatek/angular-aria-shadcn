# Select Components

A set of components for building accessible select dropdowns following the Single Responsibility Principle.

## Components

| Component         | Selector                 | Responsibility                                                  |
| ----------------- | ------------------------ | --------------------------------------------------------------- |
| `ScSelect`        | `div[sc-select]`         | Root container, provides combobox behavior via `@angular/aria`  |
| `ScSelectTrigger` | `div[sc-select-trigger]` | Trigger button styling, exposes overlay origin                  |
| `ScSelectInput`   | `input[sc-select-input]` | Hidden input, wraps `ComboboxInput` from `@angular/aria`        |
| `ScSelectValue`   | `span[sc-select-value]`  | Display selected value with styling                             |
| `ScSelectIcon`    | `svg[sc-select-icon]`    | Chevron icon styling (use with `@semantic-icons/lucide-icons`)  |
| `ScSelectPopup`   | `div[sc-select-popup]`   | Overlay positioning & combobox popup container (infrastructure) |
| `ScSelectContent` | `div[sc-select-content]` | Content styling (presentation)                                  |

## Usage

```html
<div sc-select readonly>
  <div sc-select-trigger>
    <span sc-select-value>{{ selectedValue() }}</span>
    <input sc-select-input aria-label="Select" placeholder="Select an option" />
    <svg sc-select-icon si-chevron-down-icon aria-hidden="true"></svg>
  </div>
  <div sc-select-popup>
    <div sc-select-content>
      <div ngListbox>
        <div ngOption value="option1" label="Option 1">Option 1</div>
        <div ngOption value="option2" label="Option 2">Option 2</div>
        <div ngOption value="option3" label="Option 3">Option 3</div>
      </div>
    </div>
  </div>
</div>
```

## Architecture

```
ScSelect (root)
├── ScSelectTrigger (trigger + overlay origin)
│   ├── ScSelectValue (display value)
│   ├── ScSelectInput (hidden combobox input)
│   └── ScSelectIcon (chevron icon)
└── ScSelectPopup (overlay infrastructure)
    └── ScSelectContent (styled container)
        └── ngListbox + ngOption (content)
```

## Dependencies

- `@angular/aria/combobox` - Combobox behavior
- `@angular/aria/listbox` - Listbox and option behavior
- `@angular/cdk/overlay` - Overlay positioning
- `@semantic-icons/lucide-icons` - Icon library
