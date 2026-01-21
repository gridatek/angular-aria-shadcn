import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SpeedDialDemoComponent } from '../../examples/speed-dial/speed-dial-demo';

@Component({
  selector: 'app-speed-dial-page',
  imports: [SpeedDialDemoComponent],
  template: `
    <div class="container mx-auto py-10 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="mb-8">
          <h1 class="text-3xl font-bold mb-2">Speed Dial</h1>
          <p class="text-muted-foreground">
            A floating action button that expands to reveal a set of related actions.
          </p>
        </div>

        <div class="space-y-8">
          <section>
            <h2 class="text-xl font-semibold mb-4">Demo</h2>
            <app-speed-dial-demo />
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Features</h2>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Floating action button (FAB) with expandable menu</li>
              <li>Four direction options: up, down, left, right</li>
              <li>Customizable icons for main button and close state</li>
              <li>Three size variants: small, medium, large</li>
              <li>Optional action labels with tooltips</li>
              <li>Support for disabled actions</li>
              <li>Close on outside click and escape key</li>
              <li>Smooth animations with staggered reveal</li>
              <li>Full keyboard and screen reader support</li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Usage</h2>
            <pre class="p-4 bg-muted rounded-lg overflow-x-auto text-sm"><code>&lt;sc-speed-dial
  [actions]="actions"
  direction="up"
  (actionClick)="onActionClick($event)"
/&gt;

// Define actions
actions: SpeedDialAction[] = [
  &#123;
    id: 'edit',
    icon: '&lt;svg&gt;...&lt;/svg&gt;',
    label: 'Edit',
  &#125;,
  &#123;
    id: 'delete',
    icon: '&lt;svg&gt;...&lt;/svg&gt;',
    label: 'Delete',
  &#125;,
];</code></pre>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">API</h2>
            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-medium mb-3">ScSpeedDial</h3>
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
                        <td class="py-2 pr-4 font-mono text-xs">actions</td>
                        <td class="py-2 pr-4">SpeedDialAction[]</td>
                        <td class="py-2 pr-4">[]</td>
                        <td class="py-2">Array of action items</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">direction</td>
                        <td class="py-2 pr-4">'up' | 'down' | 'left' | 'right'</td>
                        <td class="py-2 pr-4">'up'</td>
                        <td class="py-2">Direction to expand actions</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">icon</td>
                        <td class="py-2 pr-4">string</td>
                        <td class="py-2 pr-4">Plus icon</td>
                        <td class="py-2">SVG icon for closed state</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">closeIcon</td>
                        <td class="py-2 pr-4">string</td>
                        <td class="py-2 pr-4">X icon</td>
                        <td class="py-2">SVG icon for open state</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">showLabels</td>
                        <td class="py-2 pr-4">boolean</td>
                        <td class="py-2 pr-4">true</td>
                        <td class="py-2">Show action labels</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">closeOnActionClick</td>
                        <td class="py-2 pr-4">boolean</td>
                        <td class="py-2 pr-4">true</td>
                        <td class="py-2">Close menu after action click</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">closeOnOutsideClick</td>
                        <td class="py-2 pr-4">boolean</td>
                        <td class="py-2 pr-4">true</td>
                        <td class="py-2">Close menu on outside click</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">size</td>
                        <td class="py-2 pr-4">'sm' | 'md' | 'lg'</td>
                        <td class="py-2 pr-4">'md'</td>
                        <td class="py-2">Size of main FAB button</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">actionSize</td>
                        <td class="py-2 pr-4">'sm' | 'md' | 'lg'</td>
                        <td class="py-2 pr-4">'md'</td>
                        <td class="py-2">Size of action buttons</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 class="text-lg font-medium mb-3">Outputs</h3>
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
                        <td class="py-2 pr-4 font-mono text-xs">actionClick</td>
                        <td class="py-2 pr-4">SpeedDialActionClickEvent</td>
                        <td class="py-2">Emitted when an action is clicked</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">openChange</td>
                        <td class="py-2 pr-4">boolean</td>
                        <td class="py-2">Emitted when open state changes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Type Definitions</h2>
            <pre
              class="p-4 bg-muted rounded-lg overflow-x-auto text-sm"
            ><code>interface SpeedDialAction &#123;
  id: string;
  icon: string;
  label: string;
  disabled?: boolean;
  ariaLabel?: string;
&#125;

interface SpeedDialActionClickEvent &#123;
  action: SpeedDialAction;
  index: number;
&#125;

type SpeedDialDirection = 'up' | 'down' | 'left' | 'right';</code></pre>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Accessibility</h2>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                Main button has <code>aria-expanded</code> and <code>aria-haspopup</code> attributes
              </li>
              <li>Actions menu has <code>role="menu"</code></li>
              <li>Each action has <code>aria-label</code> for screen readers</li>
              <li>Escape key closes the menu</li>
              <li>Focus management for keyboard navigation</li>
              <li>Labels provide visual context and tooltips</li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Positioning</h2>
            <p class="text-muted-foreground mb-4">
              The Speed Dial component uses inline positioning by default. For fixed/floating
              positioning, wrap it in a positioned container:
            </p>
            <pre
              class="p-4 bg-muted rounded-lg overflow-x-auto text-sm"
            ><code>&lt;!-- Fixed bottom-right position --&gt;
&lt;div class="fixed bottom-6 right-6"&gt;
  &lt;sc-speed-dial [actions]="actions" /&gt;
&lt;/div&gt;

&lt;!-- Absolute within container --&gt;
&lt;div class="relative h-96"&gt;
  &lt;div class="absolute bottom-4 right-4"&gt;
    &lt;sc-speed-dial [actions]="actions" /&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
          </section>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SpeedDialPageComponent {}
