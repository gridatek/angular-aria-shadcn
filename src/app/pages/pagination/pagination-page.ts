import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScPaginationDemo } from '../../examples/pagination/sc-pagination-demo';

@Component({
  selector: 'app-pagination-page',
  imports: [ScPaginationDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Pagination</h1>
        <p class="text-muted-foreground">
          Pagination with page navigation, next and previous links.
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
          <app-sc-pagination-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PaginationPage {}
