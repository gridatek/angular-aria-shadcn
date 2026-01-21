import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RichTextEditorDemoComponent } from '../../examples/rich-text-editor/rich-text-editor-demo';

@Component({
  selector: 'app-rich-text-editor-page',
  imports: [RichTextEditorDemoComponent],
  template: `
    <div class="container mx-auto py-10 px-4">
      <div class="max-w-4xl mx-auto">
        <div class="mb-8">
          <h1 class="text-3xl font-bold mb-2">Rich Text Editor</h1>
          <p class="text-muted-foreground">
            WYSIWYG editor with formatting toolbar, keyboard shortcuts, and HTML output.
          </p>
        </div>

        <div class="space-y-8">
          <section>
            <h2 class="text-xl font-semibold mb-4">Demo</h2>
            <app-rich-text-editor-demo />
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Features</h2>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Bold, italic, underline, strikethrough formatting</li>
              <li>Heading levels (H1-H4)</li>
              <li>Text alignment (left, center, right, justify)</li>
              <li>Ordered and unordered lists</li>
              <li>Hyperlinks with custom text</li>
              <li>Blockquotes and inline code</li>
              <li>Horizontal rule</li>
              <li>Undo/redo support</li>
              <li>Clear formatting</li>
              <li>Word and character count</li>
              <li>Keyboard shortcuts</li>
              <li>Customizable toolbar</li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Usage</h2>
            <pre
              class="p-4 bg-muted rounded-lg overflow-x-auto text-sm"
            ><code>&lt;sc-rich-text-editor
  [(value)]="htmlContent"
  [placeholder]="'Start typing...'"
  [showToolbar]="true"
  [showCount]="true"
  (valueChange)="onContentChange($event)"
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
                    <td class="py-2 pr-4 font-mono text-xs">value</td>
                    <td class="py-2 pr-4">string</td>
                    <td class="py-2 pr-4">''</td>
                    <td class="py-2">HTML content (two-way binding)</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">placeholder</td>
                    <td class="py-2 pr-4">string</td>
                    <td class="py-2 pr-4">'Start typing...'</td>
                    <td class="py-2">Placeholder text</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">showToolbar</td>
                    <td class="py-2 pr-4">boolean</td>
                    <td class="py-2 pr-4">true</td>
                    <td class="py-2">Show formatting toolbar</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">showCount</td>
                    <td class="py-2 pr-4">boolean</td>
                    <td class="py-2 pr-4">true</td>
                    <td class="py-2">Show word/char count</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">toolbar</td>
                    <td class="py-2 pr-4">ToolbarConfig</td>
                    <td class="py-2 pr-4">all enabled</td>
                    <td class="py-2">Configure toolbar buttons</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">readonly</td>
                    <td class="py-2 pr-4">boolean</td>
                    <td class="py-2 pr-4">false</td>
                    <td class="py-2">Readonly mode</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">disabled</td>
                    <td class="py-2 pr-4">boolean</td>
                    <td class="py-2 pr-4">false</td>
                    <td class="py-2">Disable the editor</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">minHeight</td>
                    <td class="py-2 pr-4">string</td>
                    <td class="py-2 pr-4">'150px'</td>
                    <td class="py-2">Minimum editor height</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">maxHeight</td>
                    <td class="py-2 pr-4">string</td>
                    <td class="py-2 pr-4">'400px'</td>
                    <td class="py-2">Maximum editor height</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Keyboard Shortcuts</h2>
            <div class="grid grid-cols-2 gap-4 max-w-md">
              <div class="flex items-center gap-2">
                <kbd class="px-2 py-1 bg-muted rounded text-sm">Ctrl+B</kbd>
                <span class="text-sm text-muted-foreground">Bold</span>
              </div>
              <div class="flex items-center gap-2">
                <kbd class="px-2 py-1 bg-muted rounded text-sm">Ctrl+I</kbd>
                <span class="text-sm text-muted-foreground">Italic</span>
              </div>
              <div class="flex items-center gap-2">
                <kbd class="px-2 py-1 bg-muted rounded text-sm">Ctrl+U</kbd>
                <span class="text-sm text-muted-foreground">Underline</span>
              </div>
              <div class="flex items-center gap-2">
                <kbd class="px-2 py-1 bg-muted rounded text-sm">Ctrl+K</kbd>
                <span class="text-sm text-muted-foreground">Insert link</span>
              </div>
              <div class="flex items-center gap-2">
                <kbd class="px-2 py-1 bg-muted rounded text-sm">Ctrl+Z</kbd>
                <span class="text-sm text-muted-foreground">Undo</span>
              </div>
              <div class="flex items-center gap-2">
                <kbd class="px-2 py-1 bg-muted rounded text-sm">Ctrl+Y</kbd>
                <span class="text-sm text-muted-foreground">Redo</span>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Toolbar Configuration</h2>
            <pre
              class="p-4 bg-muted rounded-lg overflow-x-auto text-sm"
            ><code>// Minimal toolbar example
const minimalToolbar: ToolbarConfig = &#123;
  bold: true,
  italic: true,
  underline: true,
  link: true,
  undo: true,
  redo: true,
  // All other options default to false
&#125;;</code></pre>
          </section>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RichTextEditorPageComponent {}
