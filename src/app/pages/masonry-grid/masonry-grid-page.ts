import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MasonryGridDemoComponent } from '../../examples/masonry-grid/masonry-grid-demo';

@Component({
  selector: 'app-masonry-grid-page',
  imports: [MasonryGridDemoComponent],
  template: `
    <div class="container mx-auto py-10 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="mb-8">
          <h1 class="text-3xl font-bold mb-2">Masonry Grid</h1>
          <p class="text-muted-foreground">
            A Pinterest-style layout that arranges items in columns with varying heights.
          </p>
        </div>

        <div class="space-y-8">
          <section>
            <h2 class="text-xl font-semibold mb-4">Demo</h2>
            <app-masonry-grid-demo />
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Features</h2>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground">
              <li>CSS columns-based layout for optimal performance</li>
              <li>Configurable number of columns</li>
              <li>Responsive breakpoints</li>
              <li>Customizable gap/gutter spacing</li>
              <li>Automatic item placement</li>
              <li>Support for dynamic content heights</li>
              <li>Optional absolute positioning mode</li>
              <li>Manual relayout trigger</li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Usage</h2>
            <pre
              class="p-4 bg-muted rounded-lg overflow-x-auto text-sm"
            ><code>&lt;sc-masonry-grid [columns]="4" [gap]="16"&gt;
  &#64;for (item of items; track item.id) &#123;
    &lt;sc-masonry-item&gt;
      &lt;div class="card"&gt;
        &lt;!-- Your content --&gt;
      &lt;/div&gt;
    &lt;/sc-masonry-item&gt;
  &#125;
&lt;/sc-masonry-grid&gt;</code></pre>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">API</h2>
            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-medium mb-3">ScMasonryGrid</h3>
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
                        <td class="py-2 pr-4 font-mono text-xs">columns</td>
                        <td class="py-2 pr-4">number</td>
                        <td class="py-2 pr-4">4</td>
                        <td class="py-2">Number of columns</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">gap</td>
                        <td class="py-2 pr-4">number</td>
                        <td class="py-2 pr-4">16</td>
                        <td class="py-2">Gap between items in pixels</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">breakpoints</td>
                        <td class="py-2 pr-4">MasonryBreakpoint[]</td>
                        <td class="py-2 pr-4">DEFAULT_BREAKPOINTS</td>
                        <td class="py-2">Responsive breakpoint configuration</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">layoutMode</td>
                        <td class="py-2 pr-4">'columns' | 'absolute'</td>
                        <td class="py-2 pr-4">'columns'</td>
                        <td class="py-2">Layout algorithm to use</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 class="text-lg font-medium mb-3">ScMasonryItem</h3>
                <p class="text-muted-foreground mb-3">
                  Wrapper component for each item in the grid. Use this to wrap your content.
                </p>
                <div class="overflow-x-auto">
                  <table class="w-full text-sm">
                    <thead>
                      <tr class="border-b">
                        <th class="text-left py-2 pr-4">Output</th>
                        <th class="text-left py-2 pr-4">Type</th>
                        <th class="text-left py-2">Description</th>
                      </tr>
                    </thead>
                    <tbody class="text-muted-foreground">
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">sizeChange</td>
                        <td class="py-2 pr-4">&#123; width, height &#125;</td>
                        <td class="py-2">Emitted when item size changes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Responsive Breakpoints</h2>
            <pre
              class="p-4 bg-muted rounded-lg overflow-x-auto text-sm"
            ><code>// Default breakpoints
const DEFAULT_BREAKPOINTS = [
  &#123; minWidth: 0, columns: 1 &#125;,     // Mobile
  &#123; minWidth: 640, columns: 2 &#125;,   // sm
  &#123; minWidth: 768, columns: 3 &#125;,   // md
  &#123; minWidth: 1024, columns: 4 &#125;,  // lg
  &#123; minWidth: 1280, columns: 5 &#125;,  // xl
];

// Custom breakpoints
&lt;sc-masonry-grid
  [breakpoints]="[
    &#123; minWidth: 0, columns: 1 &#125;,
    &#123; minWidth: 600, columns: 2 &#125;,
    &#123; minWidth: 900, columns: 3 &#125;,
  ]"
&gt;</code></pre>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Layout Modes</h2>
            <div class="space-y-4 text-muted-foreground">
              <div>
                <h4 class="font-medium text-foreground">columns (default)</h4>
                <p class="text-sm">
                  Uses CSS <code>column-count</code> for layout. This is the most performant option
                  and works well for most use cases. Items flow top-to-bottom, left-to-right.
                </p>
              </div>
              <div>
                <h4 class="font-medium text-foreground">absolute</h4>
                <p class="text-sm">
                  Uses JavaScript-calculated absolute positioning. Items are placed in the shortest
                  column first, which can result in better space utilization but requires more
                  computation.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Public Methods</h2>
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
                    <td class="py-2 pr-4 font-mono text-xs">relayout()</td>
                    <td class="py-2">Manually trigger a layout recalculation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MasonryGridPageComponent {}
