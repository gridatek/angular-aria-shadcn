import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImageAnnotatorDemoComponent } from '../../examples/image-annotator/image-annotator-demo';

@Component({
  selector: 'app-image-annotator-page',
  imports: [ImageAnnotatorDemoComponent],
  template: `
    <div class="container mx-auto py-10 px-4">
      <div class="max-w-4xl mx-auto">
        <div class="mb-8">
          <h1 class="text-3xl font-bold mb-2">Image Annotator</h1>
          <p class="text-muted-foreground">
            Draw, mark up, and annotate images with various tools.
          </p>
        </div>

        <div class="space-y-8">
          <section>
            <h2 class="text-xl font-semibold mb-4">Demo</h2>
            <app-image-annotator-demo />
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Features</h2>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Multiple drawing tools (pen, line, rectangle, circle, arrow)</li>
              <li>Eraser tool to remove annotations</li>
              <li>Customizable colors and line width</li>
              <li>Undo and clear all functionality</li>
              <li>Download annotated image as PNG</li>
              <li>Configurable canvas dimensions</li>
              <li>Event callbacks for annotations and save</li>
              <li>Programmatic access to annotations</li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Usage</h2>
            <pre
              class="p-4 bg-muted rounded-lg overflow-x-auto text-sm"
            ><code>&lt;sc-image-annotator
  [src]="imageUrl"
  [width]="600"
  [height]="400"
  (annotationsChange)="onAnnotationsChange($event)"
  (save)="onSave($event)"
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
                    <td class="py-2 pr-4 font-mono text-xs">src</td>
                    <td class="py-2 pr-4">string</td>
                    <td class="py-2 pr-4">(required)</td>
                    <td class="py-2">Image URL to annotate</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">width</td>
                    <td class="py-2 pr-4">number</td>
                    <td class="py-2 pr-4">600</td>
                    <td class="py-2">Canvas width in pixels</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">height</td>
                    <td class="py-2 pr-4">number</td>
                    <td class="py-2 pr-4">400</td>
                    <td class="py-2">Canvas height in pixels</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Outputs</h2>
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
                    <td class="py-2 pr-4 font-mono text-xs">annotationsChange</td>
                    <td class="py-2 pr-4">Annotation[]</td>
                    <td class="py-2">Emitted when annotations change</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">save</td>
                    <td class="py-2 pr-4">string</td>
                    <td class="py-2">Emitted with data URL when downloaded</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Available Tools</h2>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b">
                    <th class="text-left py-2 pr-4">Tool</th>
                    <th class="text-left py-2">Description</th>
                  </tr>
                </thead>
                <tbody class="text-muted-foreground">
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">pen</td>
                    <td class="py-2">Freehand drawing</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">line</td>
                    <td class="py-2">Straight line between two points</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">rectangle</td>
                    <td class="py-2">Rectangle shape</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">circle</td>
                    <td class="py-2">Circle from center</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">arrow</td>
                    <td class="py-2">Arrow with head</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">eraser</td>
                    <td class="py-2">Remove annotations</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Type Definitions</h2>
            <pre
              class="p-4 bg-muted rounded-lg overflow-x-auto text-sm"
            ><code>type AnnotationTool = 'pen' | 'line' | 'rectangle' | 'circle' | 'arrow' | 'eraser';

interface Annotation &#123;
  id: string;
  tool: AnnotationTool;
  points: AnnotationPoint[];
  color: string;
  lineWidth: number;
&#125;

interface AnnotationPoint &#123;
  x: number;
  y: number;
&#125;</code></pre>
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
                    <td class="py-2 pr-4 font-mono text-xs">getAnnotations()</td>
                    <td class="py-2">Get all current annotations</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">setAnnotations(annotations)</td>
                    <td class="py-2">Set annotations programmatically</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">undo()</td>
                    <td class="py-2">Remove last annotation</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">clearAll()</td>
                    <td class="py-2">Remove all annotations</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">download()</td>
                    <td class="py-2">Download annotated image as PNG</td>
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
export default class ImageAnnotatorPageComponent {}
