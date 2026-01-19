import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScTableDemo } from '../../examples/table/sc-table-demo';

@Component({
  selector: 'app-table-page',
  imports: [ScTableDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Table</h1>
        <p class="text-muted-foreground">A responsive table component.</p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Wrapper components with clean markup and encapsulated styles
          </p>
        </div>
        <div>
          <app-sc-table-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TablePage {}
