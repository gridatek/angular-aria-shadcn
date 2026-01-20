import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SpotlightDemoComponent } from '../../examples/spotlight/spotlight-demo';

@Component({
  selector: 'app-spotlight-page',
  imports: [SpotlightDemoComponent],
  template: `
    <div class="container mx-auto py-10 px-4">
      <div class="max-w-4xl mx-auto">
        <div class="mb-8">
          <h1 class="text-3xl font-bold mb-2">Spotlight</h1>
          <p class="text-muted-foreground">
            Highlight specific UI elements with a spotlight overlay effect.
          </p>
        </div>

        <div class="space-y-8">
          <section>
            <h2 class="text-xl font-semibold mb-4">Demo</h2>
            <div class="border rounded-lg p-6 bg-card">
              <app-spotlight-demo />
            </div>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Features</h2>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Focus user attention on specific elements</li>
              <li>SVG mask-based overlay with spotlight cutout</li>
              <li>Animated pulse effect on highlighted element</li>
              <li>Auto-positioning content panel</li>
              <li>Customizable padding, border radius, and opacity</li>
              <li>Close on overlay click or Escape key</li>
              <li>Scroll target into view automatically</li>
              <li>Content slot for custom tooltips and actions</li>
              <li>ResizeObserver for dynamic element tracking</li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Usage</h2>
            <pre
              class="p-4 bg-muted rounded-lg overflow-x-auto text-sm"
            ><code>&lt;button (click)="spotlight.show('#my-element')"&gt;
  Show Spotlight
&lt;/button&gt;

&lt;sc-spotlight #spotlight [padding]="12"&gt;
  &lt;sc-spotlight-title&gt;Feature Title&lt;/sc-spotlight-title&gt;
  &lt;sc-spotlight-description&gt;
    Description of the highlighted feature.
  &lt;/sc-spotlight-description&gt;
  &lt;sc-spotlight-actions&gt;
    &lt;button (click)="spotlight.close()"&gt;Got it&lt;/button&gt;
  &lt;/sc-spotlight-actions&gt;
&lt;/sc-spotlight&gt;</code></pre>
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
                    <td class="py-2 pr-4 font-mono text-xs">target</td>
                    <td class="py-2 pr-4">string | Element</td>
                    <td class="py-2 pr-4">null</td>
                    <td class="py-2">CSS selector or Element to highlight</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">padding</td>
                    <td class="py-2 pr-4">number</td>
                    <td class="py-2 pr-4">8</td>
                    <td class="py-2">Padding around highlighted element</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">borderRadius</td>
                    <td class="py-2 pr-4">number</td>
                    <td class="py-2 pr-4">8</td>
                    <td class="py-2">Border radius of spotlight</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">overlayOpacity</td>
                    <td class="py-2 pr-4">number</td>
                    <td class="py-2 pr-4">0.75</td>
                    <td class="py-2">Opacity of the overlay</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">showClose</td>
                    <td class="py-2 pr-4">boolean</td>
                    <td class="py-2 pr-4">true</td>
                    <td class="py-2">Show close button</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">contentPlacement</td>
                    <td class="py-2 pr-4">string</td>
                    <td class="py-2 pr-4">'auto'</td>
                    <td class="py-2">Position of content panel</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Methods</h2>
            <div class="space-y-2 text-muted-foreground">
              <div>
                <code class="text-xs bg-muted px-1 rounded">show(target)</code> - Show spotlight on
                element
              </div>
              <div>
                <code class="text-xs bg-muted px-1 rounded">hide()</code> - Hide the spotlight
              </div>
              <div>
                <code class="text-xs bg-muted px-1 rounded">toggle(target)</code> - Toggle spotlight
                visibility
              </div>
              <div>
                <code class="text-xs bg-muted px-1 rounded">close()</code> - Close the spotlight
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SpotlightPageComponent {}
