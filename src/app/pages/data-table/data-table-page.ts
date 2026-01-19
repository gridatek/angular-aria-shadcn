import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScDataTableDemo } from '../../examples/data-table/sc-data-table-demo';

@Component({
  selector: 'app-data-table-page',
  imports: [ScDataTableDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Data Table</h1>
        <p class="text-muted-foreground">
          Advanced table component with sorting, filtering, column visibility, row selection, and
          pagination.
        </p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Powerful data table with comprehensive features for displaying and managing tabular
            data.
          </p>
        </div>
        <div>
          <app-sc-data-table-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DataTablePage {}
