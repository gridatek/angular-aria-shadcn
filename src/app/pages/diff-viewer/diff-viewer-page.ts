import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DiffViewerDemoComponent } from '../../examples/diff-viewer/diff-viewer-demo';

@Component({
  selector: 'app-diff-viewer-page',
  imports: [DiffViewerDemoComponent],
  template: `
    <div class="container mx-auto py-10 px-4">
      <div class="max-w-5xl mx-auto">
        <div class="mb-8">
          <h1 class="text-3xl font-bold mb-2">Diff Viewer</h1>
          <p class="text-muted-foreground">
            Side-by-side or unified view for comparing text and code changes.
          </p>
        </div>

        <div class="space-y-8">
          <section>
            <h2 class="text-xl font-semibold mb-4">Demo</h2>
            <app-diff-viewer-demo />
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Features</h2>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Split (side-by-side) and unified view modes</li>
              <li>Line-by-line comparison with LCS algorithm</li>
              <li>Addition/deletion/unchanged highlighting</li>
              <li>Word-level diff highlighting</li>
              <li>Line numbers for both versions</li>
              <li>Change statistics (additions, deletions)</li>
              <li>Ignore whitespace option</li>
              <li>Ignore case option</li>
              <li>Scrollable with max height</li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Usage</h2>
            <pre class="p-4 bg-muted rounded-lg overflow-x-auto text-sm"><code>&lt;sc-diff-viewer
  [oldText]="originalCode"
  [newText]="modifiedCode"
  [oldTitle]="'file.ts (original)'"
  [newTitle]="'file.ts (modified)'"
  [defaultViewMode]="'split'"
/&gt;</code></pre>
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
                    <td class="py-2 pr-4 font-mono text-xs">oldText</td>
                    <td class="py-2 pr-4">string</td>
                    <td class="py-2 pr-4">''</td>
                    <td class="py-2">Original text content</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">newText</td>
                    <td class="py-2 pr-4">string</td>
                    <td class="py-2 pr-4">''</td>
                    <td class="py-2">Modified text content</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">oldTitle</td>
                    <td class="py-2 pr-4">string</td>
                    <td class="py-2 pr-4">''</td>
                    <td class="py-2">Title for original version</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">newTitle</td>
                    <td class="py-2 pr-4">string</td>
                    <td class="py-2 pr-4">''</td>
                    <td class="py-2">Title for modified version</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">defaultViewMode</td>
                    <td class="py-2 pr-4">'split' | 'unified'</td>
                    <td class="py-2 pr-4">'split'</td>
                    <td class="py-2">Initial view mode</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">showHeader</td>
                    <td class="py-2 pr-4">boolean</td>
                    <td class="py-2 pr-4">true</td>
                    <td class="py-2">Show header with stats</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">showFooter</td>
                    <td class="py-2 pr-4">boolean</td>
                    <td class="py-2 pr-4">true</td>
                    <td class="py-2">Show footer with counts</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">showViewModeToggle</td>
                    <td class="py-2 pr-4">boolean</td>
                    <td class="py-2 pr-4">true</td>
                    <td class="py-2">Show view mode toggle</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">showWordDiff</td>
                    <td class="py-2 pr-4">boolean</td>
                    <td class="py-2 pr-4">true</td>
                    <td class="py-2">Highlight word-level changes</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">ignoreWhitespace</td>
                    <td class="py-2 pr-4">boolean</td>
                    <td class="py-2 pr-4">false</td>
                    <td class="py-2">Ignore whitespace differences</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">ignoreCase</td>
                    <td class="py-2 pr-4">boolean</td>
                    <td class="py-2 pr-4">false</td>
                    <td class="py-2">Ignore case differences</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">maxHeight</td>
                    <td class="py-2 pr-4">string</td>
                    <td class="py-2 pr-4">'600px'</td>
                    <td class="py-2">Maximum viewer height</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">View Modes</h2>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="p-4 border rounded-lg">
                <h3 class="font-medium mb-2">Split View</h3>
                <p class="text-sm text-muted-foreground">
                  Shows old and new versions side-by-side. Best for comparing specific line changes.
                </p>
              </div>
              <div class="p-4 border rounded-lg">
                <h3 class="font-medium mb-2">Unified View</h3>
                <p class="text-sm text-muted-foreground">
                  Shows changes in a single column with + and - markers. Similar to git diff output.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Utility Functions</h2>
            <pre
              class="p-4 bg-muted rounded-lg overflow-x-auto text-sm"
            ><code>import &#123; computeDiff, createUnifiedDiff &#125; from './ui/diff-viewer';

// Compute diff result
const result = computeDiff(oldText, newText, &#123;
  ignoreWhitespace: true,
  ignoreCase: false,
&#125;);
// result.lines, result.additions, result.deletions

// Create unified diff format (like git diff)
const unifiedDiff = createUnifiedDiff(oldText, newText, &#123;
  oldHeader: 'a/file.ts',
  newHeader: 'b/file.ts',
  contextLines: 3,
&#125;);</code></pre>
          </section>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DiffViewerPageComponent {}
