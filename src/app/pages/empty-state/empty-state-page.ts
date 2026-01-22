import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EmptyStateDemoComponent } from '../../examples/empty-state/empty-state-demo';

@Component({
  selector: 'app-empty-state-page',
  imports: [EmptyStateDemoComponent],
  template: `
    <div class="container mx-auto py-10">
      <div class="mb-8">
        <h1 class="text-3xl font-bold">Empty State</h1>
        <p class="mt-2 text-muted-foreground">
          Placeholder component for empty content with optional actions.
        </p>
      </div>

      <section class="mb-12">
        <h2 class="mb-4 text-xl font-semibold">Demo</h2>
        <div class="rounded-lg border bg-card p-6">
          <sc-empty-state-demo />
        </div>
      </section>

      <section class="mb-12">
        <h2 class="mb-4 text-xl font-semibold">Usage</h2>
        <div class="rounded-lg border bg-muted/50 p-4">
          <pre class="overflow-x-auto text-sm" [textContent]="usageCode"></pre>
        </div>
      </section>

      <section>
        <h2 class="mb-4 text-xl font-semibold">API</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm">
            <thead>
              <tr class="border-b">
                <th class="pb-2 pr-4 font-medium">Input</th>
                <th class="pb-2 pr-4 font-medium">Type</th>
                <th class="pb-2 pr-4 font-medium">Default</th>
                <th class="pb-2 font-medium">Description</th>
              </tr>
            </thead>
            <tbody class="font-mono text-xs">
              <tr class="border-b">
                <td class="py-2 pr-4">title</td>
                <td class="py-2 pr-4">string</td>
                <td class="py-2 pr-4">undefined</td>
                <td class="py-2">Main heading</td>
              </tr>
              <tr class="border-b">
                <td class="py-2 pr-4">description</td>
                <td class="py-2 pr-4">string</td>
                <td class="py-2 pr-4">undefined</td>
                <td class="py-2">Description text</td>
              </tr>
              <tr class="border-b">
                <td class="py-2 pr-4">icon</td>
                <td class="py-2 pr-4">string</td>
                <td class="py-2 pr-4">undefined</td>
                <td class="py-2">HTML icon</td>
              </tr>
              <tr class="border-b">
                <td class="py-2 pr-4">actions</td>
                <td class="py-2 pr-4">EmptyStateAction[]</td>
                <td class="py-2 pr-4">[]</td>
                <td class="py-2">Action buttons</td>
              </tr>
              <tr class="border-b">
                <td class="py-2 pr-4">size</td>
                <td class="py-2 pr-4">'sm' | 'md' | 'lg'</td>
                <td class="py-2 pr-4">'md'</td>
                <td class="py-2">Component size</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EmptyStatePageComponent {
  readonly usageCode = `const actions: EmptyStateAction[] = [
  { label: 'Create Project', variant: 'default' },
  { label: 'Import', variant: 'outline' },
];

<sc-empty-state
  title="No projects yet"
  description="Get started by creating your first project."
  [icon]="folderIcon"
  [actions]="actions"
  (actionClick)="onAction($event)"
/>`;
}
