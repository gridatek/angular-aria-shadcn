import { ChangeDetectionStrategy, Component } from '@angular/core';
import { VirtualListDemoComponent } from '../../examples/virtual-list/virtual-list-demo';

@Component({
  selector: 'app-virtual-list-page',
  imports: [VirtualListDemoComponent],
  template: `
    <div class="container mx-auto py-10 px-4">
      <div class="max-w-4xl mx-auto">
        <div class="mb-8">
          <h1 class="text-3xl font-bold mb-2">Virtual List</h1>
          <p class="text-muted-foreground">
            Efficiently render large lists by only rendering visible items.
          </p>
        </div>

        <div class="space-y-8">
          <section>
            <h2 class="text-xl font-semibold mb-4">Demo</h2>
            <app-virtual-list-demo />
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Features</h2>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Renders only visible items for optimal performance</li>
              <li>Handles thousands of items smoothly</li>
              <li>Configurable item height</li>
              <li>Overscan for smoother scrolling</li>
              <li>Custom item templates via ng-template</li>
              <li>Programmatic scrolling (scrollToIndex, scrollToTop, scrollToBottom)</li>
              <li>Range change events</li>
              <li>Custom trackBy function support</li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Usage</h2>
            <pre
              class="p-4 bg-muted rounded-lg overflow-x-auto text-sm"
            ><code [textContent]="usageCode"></code></pre>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">API</h2>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b">
                    <th class="text-left py-2 pr-4">Input</th>
                    <th class="text-left py-2 pr-4">Type</th>
                    <th class="text-left py-2 pr-4">Default</th>
                    <th class="text-left py-2">Description</th>
                  </tr>
                </thead>
                <tbody class="text-muted-foreground">
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">items</td>
                    <td class="py-2 pr-4">T[]</td>
                    <td class="py-2 pr-4">[]</td>
                    <td class="py-2">Array of items to render</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">itemHeight</td>
                    <td class="py-2 pr-4">number</td>
                    <td class="py-2 pr-4">48</td>
                    <td class="py-2">Height of each item in pixels</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">height</td>
                    <td class="py-2 pr-4">string | number</td>
                    <td class="py-2 pr-4">'400px'</td>
                    <td class="py-2">Container height</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">overscan</td>
                    <td class="py-2 pr-4">number</td>
                    <td class="py-2 pr-4">3</td>
                    <td class="py-2">Extra items to render outside viewport</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">trackByFn</td>
                    <td class="py-2 pr-4">(index, item) => any</td>
                    <td class="py-2 pr-4">index</td>
                    <td class="py-2">Track by function</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Methods</h2>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b">
                    <th class="text-left py-2 pr-4">Method</th>
                    <th class="text-left py-2">Description</th>
                  </tr>
                </thead>
                <tbody class="text-muted-foreground">
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">scrollToIndex(index, behavior?)</td>
                    <td class="py-2">Scroll to a specific item index</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">scrollToTop(behavior?)</td>
                    <td class="py-2">Scroll to the first item</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">scrollToBottom(behavior?)</td>
                    <td class="py-2">Scroll to the last item</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Performance Tips</h2>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Use a consistent item height for best performance</li>
              <li>Provide a trackByFn for complex objects</li>
              <li>Avoid heavy computations in item templates</li>
              <li>Use OnPush change detection in item components</li>
              <li>Keep overscan low (2-5) for memory efficiency</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VirtualListPageComponent {
  readonly usageCode = `<sc-virtual-list
  [items]="items"
  [itemHeight]="48"
  height="400px"
  [overscan]="3"
  (rangeChange)="onRangeChange($event)"
>
  <ng-template let-item let-index="index">
    <div class="flex items-center h-full px-4 border-b">
      {{ index }}: {{ item }}
    </div>
  </ng-template>
</sc-virtual-list>`;
}
