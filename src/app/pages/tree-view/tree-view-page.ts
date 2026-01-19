import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScTreeViewDemo } from '../../examples/tree-view/sc-tree-view-demo';

@Component({
  selector: 'app-tree-view-page',
  imports: [ScTreeViewDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Tree View</h1>
        <p class="text-muted-foreground">
          A hierarchical collapsible tree for displaying nested data.
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
          <app-sc-tree-view-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TreeViewPage {}
