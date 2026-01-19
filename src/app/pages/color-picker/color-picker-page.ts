import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScColorPickerDemo } from '../../examples/color-picker/sc-color-picker-demo';

@Component({
  selector: 'app-color-picker-page',
  imports: [ScColorPickerDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Color Picker</h1>
        <p class="text-muted-foreground">A component for selecting colors with various formats.</p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Wrapper components with clean markup and encapsulated styles
          </p>
        </div>
        <div>
          <app-sc-color-picker-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ColorPickerPage {}
