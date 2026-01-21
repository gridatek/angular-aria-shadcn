import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeEditorDemoComponent } from '../../examples/code-editor/code-editor-demo';

@Component({
  selector: 'app-code-editor-page',
  imports: [CodeEditorDemoComponent],
  template: `
    <div class="container mx-auto py-10 px-4">
      <div class="max-w-4xl mx-auto">
        <div class="mb-8">
          <h1 class="text-3xl font-bold mb-2">Code Editor</h1>
          <p class="text-muted-foreground">
            Syntax-highlighted code editor with line numbers, auto-indent, and multiple language
            support.
          </p>
        </div>

        <div class="space-y-8">
          <section>
            <h2 class="text-xl font-semibold mb-4">Demo</h2>
            <app-code-editor-demo />
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Features</h2>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Syntax highlighting for multiple languages</li>
              <li>Line numbers with active line indicator</li>
              <li>Auto-indentation on Enter</li>
              <li>Tab key support (indent/outdent)</li>
              <li>Copy code button</li>
              <li>Cursor position display (line/column)</li>
              <li>Character and line count</li>
              <li>Light and dark themes</li>
              <li>Word wrap option</li>
              <li>Readonly mode</li>
              <li>Auto language detection</li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Supported Languages</h2>
            <div class="flex flex-wrap gap-2">
              @for (lang of languages; track lang) {
                <span class="px-2 py-1 text-sm bg-muted rounded">{{ lang }}</span>
              }
            </div>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Usage</h2>
            <pre class="p-4 bg-muted rounded-lg overflow-x-auto text-sm"><code>&lt;sc-code-editor
  [(value)]="code"
  [language]="'typescript'"
  [filename]="'example.ts'"
  [showLineNumbers]="true"
  [showHeader]="true"
  [showFooter]="true"
  (valueChange)="onCodeChange($event)"
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
                    <td class="py-2">Code content (two-way binding)</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">language</td>
                    <td class="py-2 pr-4">Language</td>
                    <td class="py-2 pr-4">'plaintext'</td>
                    <td class="py-2">Syntax highlighting language</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">filename</td>
                    <td class="py-2 pr-4">string</td>
                    <td class="py-2 pr-4">''</td>
                    <td class="py-2">Display filename in header</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">theme</td>
                    <td class="py-2 pr-4">CodeEditorTheme</td>
                    <td class="py-2 pr-4">dark</td>
                    <td class="py-2">Color theme object</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">showLineNumbers</td>
                    <td class="py-2 pr-4">boolean</td>
                    <td class="py-2 pr-4">true</td>
                    <td class="py-2">Show line numbers</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">showHeader</td>
                    <td class="py-2 pr-4">boolean</td>
                    <td class="py-2 pr-4">true</td>
                    <td class="py-2">Show header bar</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">showFooter</td>
                    <td class="py-2 pr-4">boolean</td>
                    <td class="py-2 pr-4">true</td>
                    <td class="py-2">Show footer with stats</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">readonly</td>
                    <td class="py-2 pr-4">boolean</td>
                    <td class="py-2 pr-4">false</td>
                    <td class="py-2">Make editor readonly</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">wordWrap</td>
                    <td class="py-2 pr-4">boolean</td>
                    <td class="py-2 pr-4">false</td>
                    <td class="py-2">Enable word wrapping</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">tabSize</td>
                    <td class="py-2 pr-4">number</td>
                    <td class="py-2 pr-4">2</td>
                    <td class="py-2">Spaces per tab</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">maxHeight</td>
                    <td class="py-2 pr-4">string</td>
                    <td class="py-2 pr-4">'500px'</td>
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
                <kbd class="px-2 py-1 bg-muted rounded text-sm">Tab</kbd>
                <span class="text-sm text-muted-foreground">Indent</span>
              </div>
              <div class="flex items-center gap-2">
                <kbd class="px-2 py-1 bg-muted rounded text-sm">Shift+Tab</kbd>
                <span class="text-sm text-muted-foreground">Outdent</span>
              </div>
              <div class="flex items-center gap-2">
                <kbd class="px-2 py-1 bg-muted rounded text-sm">Enter</kbd>
                <span class="text-sm text-muted-foreground">Auto-indent</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CodeEditorPageComponent {
  readonly languages = [
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'JSON',
    'Python',
    'SQL',
    'Markdown',
    'Plain Text',
  ];
}
