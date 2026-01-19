import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScBreadcrumbDemo } from '../../examples/breadcrumb/sc-breadcrumb-demo';

@Component({
  selector: 'app-breadcrumb-page',
  imports: [ScBreadcrumbDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Breadcrumb</h1>
        <p class="text-muted-foreground">
          Displays the path to the current resource using a hierarchy of links.
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
          <app-sc-breadcrumb-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BreadcrumbPage {}
