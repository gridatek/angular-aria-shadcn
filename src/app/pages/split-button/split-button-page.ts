import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SplitButtonDemoComponent } from '../../examples/split-button/split-button-demo';

@Component({
  selector: 'app-split-button-page',
  imports: [SplitButtonDemoComponent],
  template: `
    <div class="container mx-auto py-10 px-4">
      <div class="max-w-4xl mx-auto">
        <div class="mb-8">
          <h1 class="text-3xl font-bold mb-2">Split Button</h1>
          <p class="text-muted-foreground">
            A button with a main action and a dropdown for additional related actions.
          </p>
        </div>

        <div class="space-y-8">
          <section>
            <h2 class="text-xl font-semibold mb-4">Demo</h2>
            <app-split-button-demo />
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Features</h2>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Main button with primary action</li>
              <li>Dropdown toggle for additional actions</li>
              <li>Multiple variants (default, secondary, outline, destructive)</li>
              <li>Multiple sizes (sm, md, lg)</li>
              <li>Support for icons in button and actions</li>
              <li>Destructive action styling</li>
              <li>Disabled state support</li>
              <li>Keyboard accessible (Escape to close)</li>
              <li>Click outside to close</li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Usage</h2>
            <pre class="p-4 bg-muted rounded-lg overflow-x-auto text-sm"><code>&lt;sc-split-button
  label="Save"
  [actions]="actions"
  variant="default"
  size="md"
  (mainClick)="onSave()"
  (actionClick)="onAction($event)"
/&gt;

// Define actions
actions: SplitButtonAction[] = [
  &#123; id: 'draft', label: 'Save as Draft' &#125;,
  &#123; id: 'template', label: 'Save as Template' &#125;,
  &#123; id: 'delete', label: 'Delete', destructive: true &#125;,
];</code></pre>
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
                    <td class="py-2 pr-4 font-mono text-xs">label</td>
                    <td class="py-2 pr-4">string</td>
                    <td class="py-2 pr-4">(required)</td>
                    <td class="py-2">Main button label</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">actions</td>
                    <td class="py-2 pr-4">SplitButtonAction[]</td>
                    <td class="py-2 pr-4">[]</td>
                    <td class="py-2">Dropdown actions</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">icon</td>
                    <td class="py-2 pr-4">string</td>
                    <td class="py-2 pr-4">-</td>
                    <td class="py-2">SVG icon for main button</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">variant</td>
                    <td class="py-2 pr-4">'default' | 'secondary' | 'outline' | 'destructive'</td>
                    <td class="py-2 pr-4">'default'</td>
                    <td class="py-2">Visual style</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">size</td>
                    <td class="py-2 pr-4">'sm' | 'md' | 'lg'</td>
                    <td class="py-2 pr-4">'md'</td>
                    <td class="py-2">Button size</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">disabled</td>
                    <td class="py-2 pr-4">boolean</td>
                    <td class="py-2 pr-4">false</td>
                    <td class="py-2">Disable the button</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Type Definitions</h2>
            <pre
              class="p-4 bg-muted rounded-lg overflow-x-auto text-sm"
            ><code>interface SplitButtonAction &#123;
  id: string;
  label: string;
  icon?: string;
  disabled?: boolean;
  destructive?: boolean;
&#125;

type SplitButtonVariant = 'default' | 'secondary' | 'outline' | 'destructive';
type SplitButtonSize = 'sm' | 'md' | 'lg';</code></pre>
          </section>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SplitButtonPageComponent {}
