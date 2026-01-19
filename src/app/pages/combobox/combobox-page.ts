import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScComboboxDemo } from '../../examples/combobox/sc-combobox-demo';

@Component({
  selector: 'app-combobox-page',
  imports: [ScComboboxDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Combobox</h1>
        <p class="text-muted-foreground">
          Autocomplete input and command palette with a list of suggestions.
        </p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Wrapper components with clean markup and encapsulated styles
          </p>
        </div>
        <div>
          <app-sc-combobox-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ComboboxPage {}
