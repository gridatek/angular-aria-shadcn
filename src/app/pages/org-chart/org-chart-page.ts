import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OrgChartDemoComponent } from '../../examples/org-chart/org-chart-demo';

@Component({
  selector: 'app-org-chart-page',
  imports: [OrgChartDemoComponent],
  template: `
    <div class="container mx-auto py-10 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="mb-8">
          <h1 class="text-3xl font-bold mb-2">Org Chart</h1>
          <p class="text-muted-foreground">
            A hierarchical organization chart for visualizing company structures.
          </p>
        </div>

        <div class="space-y-8">
          <section>
            <h2 class="text-xl font-semibold mb-4">Demo</h2>
            <app-org-chart-demo />
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Features</h2>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Hierarchical tree structure visualization</li>
              <li>Vertical and horizontal layouts</li>
              <li>Collapsible nodes with expand/collapse</li>
              <li>Avatar support with fallback initials</li>
              <li>Department and title display</li>
              <li>Compact mode for dense hierarchies</li>
              <li>Click events for node interactions</li>
              <li>Full keyboard and screen reader support</li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Usage</h2>
            <pre class="p-4 bg-muted rounded-lg overflow-x-auto text-sm"><code>&lt;sc-org-chart
  [data]="orgData"
  direction="vertical"
  [collapsible]="true"
  (nodeClick)="onNodeClick($event)"
/&gt;

// Define organization data
orgData: OrgChartNode = &#123;
  id: '1',
  name: 'John Smith',
  title: 'CEO',
  children: [
    &#123;
      id: '2',
      name: 'Jane Doe',
      title: 'CTO',
      children: [...]
    &#125;,
    // more children...
  ]
&#125;;</code></pre>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">API</h2>
            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-medium mb-3">ScOrgChart</h3>
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
                        <td class="py-2 pr-4 font-mono text-xs">data</td>
                        <td class="py-2 pr-4">OrgChartNode | null</td>
                        <td class="py-2 pr-4">null</td>
                        <td class="py-2">Root node of the organization</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">direction</td>
                        <td class="py-2 pr-4">'vertical' | 'horizontal'</td>
                        <td class="py-2 pr-4">'vertical'</td>
                        <td class="py-2">Layout direction</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">collapsible</td>
                        <td class="py-2 pr-4">boolean</td>
                        <td class="py-2 pr-4">true</td>
                        <td class="py-2">Allow nodes to be collapsed</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">compact</td>
                        <td class="py-2 pr-4">boolean</td>
                        <td class="py-2 pr-4">false</td>
                        <td class="py-2">Use smaller node cards</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">ariaLabel</td>
                        <td class="py-2 pr-4">string</td>
                        <td class="py-2 pr-4">'Organization chart'</td>
                        <td class="py-2">Accessible label</td>
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
                        <td class="py-2 pr-4 font-mono text-xs">nodeClick</td>
                        <td class="py-2 pr-4">OrgChartNodeClickEvent</td>
                        <td class="py-2">Emitted when a node is clicked</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">nodeExpand</td>
                        <td class="py-2 pr-4">OrgChartNodeExpandEvent</td>
                        <td class="py-2">Emitted when a node is expanded/collapsed</td>
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
            ><code>interface OrgChartNode &#123;
  id: string;
  name: string;
  title?: string;
  avatar?: string;
  department?: string;
  children?: OrgChartNode[];
  expanded?: boolean;
  data?: Record&lt;string, unknown&gt;;
&#125;

interface OrgChartNodeClickEvent &#123;
  node: OrgChartNode;
  event: MouseEvent;
&#125;

interface OrgChartNodeExpandEvent &#123;
  node: OrgChartNode;
  expanded: boolean;
&#125;

type OrgChartDirection = 'vertical' | 'horizontal';</code></pre>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Accessibility</h2>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Container has <code>role="tree"</code> for screen readers</li>
              <li>Nodes have <code>aria-expanded</code> when collapsible</li>
              <li>Each node has an accessible label with name and title</li>
              <li>Focus indicators for keyboard navigation</li>
              <li>Avatar images have proper alt text</li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Node Properties</h2>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b">
                    <th class="text-left py-2 pr-4">Property</th>
                    <th class="text-left py-2 pr-4">Type</th>
                    <th class="text-left py-2 pr-4">Required</th>
                    <th class="text-left py-2">Description</th>
                  </tr>
                </thead>
                <tbody class="text-muted-foreground">
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">id</td>
                    <td class="py-2 pr-4">string</td>
                    <td class="py-2 pr-4">Yes</td>
                    <td class="py-2">Unique identifier</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">name</td>
                    <td class="py-2 pr-4">string</td>
                    <td class="py-2 pr-4">Yes</td>
                    <td class="py-2">Person's name</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">title</td>
                    <td class="py-2 pr-4">string</td>
                    <td class="py-2 pr-4">No</td>
                    <td class="py-2">Job title</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">avatar</td>
                    <td class="py-2 pr-4">string</td>
                    <td class="py-2 pr-4">No</td>
                    <td class="py-2">Profile image URL</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">department</td>
                    <td class="py-2 pr-4">string</td>
                    <td class="py-2 pr-4">No</td>
                    <td class="py-2">Department name</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">children</td>
                    <td class="py-2 pr-4">OrgChartNode[]</td>
                    <td class="py-2 pr-4">No</td>
                    <td class="py-2">Child nodes (direct reports)</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">expanded</td>
                    <td class="py-2 pr-4">boolean</td>
                    <td class="py-2 pr-4">No</td>
                    <td class="py-2">Initial expanded state</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">data</td>
                    <td class="py-2 pr-4">Record&lt;string, unknown&gt;</td>
                    <td class="py-2 pr-4">No</td>
                    <td class="py-2">Custom data for the node</td>
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
export default class OrgChartPageComponent {}
