import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSortableListDemo } from '../../examples/sortable-list/sc-sortable-list-demo';

@Component({
  selector: 'app-sortable-list-page',
  imports: [ScSortableListDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Sortable List</h1>
        <p class="text-muted-foreground">A drag and drop list component for reordering items.</p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Flexible sortable list with drag handles, keyboard support, and visual feedback.
          </p>
        </div>
        <div>
          <app-sc-sortable-list-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SortableListPage {}
