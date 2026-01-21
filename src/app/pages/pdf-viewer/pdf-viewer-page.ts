import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PdfViewerDemoComponent } from '../../examples/pdf-viewer/pdf-viewer-demo';

@Component({
  selector: 'app-pdf-viewer-page',
  imports: [PdfViewerDemoComponent],
  template: `
    <div class="container mx-auto py-10 px-4">
      <div class="max-w-5xl mx-auto">
        <div class="mb-8">
          <h1 class="text-3xl font-bold mb-2">PDF Viewer</h1>
          <p class="text-muted-foreground">
            A document viewer component for displaying PDF files with navigation, zoom, and toolbar
            controls.
          </p>
        </div>

        <div class="space-y-8">
          <section>
            <h2 class="text-xl font-semibold mb-4">Demo</h2>
            <app-pdf-viewer-demo />
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Features</h2>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Display PDF documents from URL</li>
              <li>Page navigation (previous, next, go to page)</li>
              <li>Zoom controls (in, out, presets)</li>
              <li>Rotate document left/right</li>
              <li>Download PDF</li>
              <li>Print support</li>
              <li>Fullscreen mode</li>
              <li>Loading and error states</li>
              <li>Customizable toolbar</li>
              <li>Keyboard accessible</li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Usage</h2>
            <pre class="p-4 bg-muted rounded-lg overflow-x-auto text-sm"><code>&lt;sc-pdf-viewer
  [src]="pdfUrl"
  [title]="'My Document'"
  (loaded)="onLoaded($event)"
  (pageChange)="onPageChange($event)"
/&gt;</code></pre>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">API</h2>
            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-medium mb-3">ScPdfViewer</h3>
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
                        <td class="py-2 pr-4">''</td>
                        <td class="py-2">URL of the PDF document</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">title</td>
                        <td class="py-2 pr-4">string</td>
                        <td class="py-2 pr-4">''</td>
                        <td class="py-2">Document title for accessibility and download</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">showToolbar</td>
                        <td class="py-2 pr-4">boolean</td>
                        <td class="py-2 pr-4">true</td>
                        <td class="py-2">Show or hide the toolbar</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">toolbarConfig</td>
                        <td class="py-2 pr-4">PdfToolbarConfig</td>
                        <td class="py-2 pr-4">DEFAULT_TOOLBAR_CONFIG</td>
                        <td class="py-2">Configure visible toolbar controls</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">initialPage</td>
                        <td class="py-2 pr-4">number</td>
                        <td class="py-2 pr-4">1</td>
                        <td class="py-2">Initial page to display</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">initialZoom</td>
                        <td class="py-2 pr-4">PdfZoomLevel</td>
                        <td class="py-2 pr-4">'auto'</td>
                        <td class="py-2">Initial zoom level</td>
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
                        <td class="py-2 pr-4 font-mono text-xs">loaded</td>
                        <td class="py-2 pr-4">PdfLoadEvent</td>
                        <td class="py-2">Emitted when PDF is loaded</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">pageChange</td>
                        <td class="py-2 pr-4">PdfPageChangeEvent</td>
                        <td class="py-2">Emitted when page changes</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">zoomChange</td>
                        <td class="py-2 pr-4">PdfZoomChangeEvent</td>
                        <td class="py-2">Emitted when zoom changes</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">errorEvent</td>
                        <td class="py-2 pr-4">PdfErrorEvent</td>
                        <td class="py-2">Emitted on error loading PDF</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Toolbar Configuration</h2>
            <pre
              class="p-4 bg-muted rounded-lg overflow-x-auto text-sm"
            ><code>interface PdfToolbarConfig &#123;
  showNavigation?: boolean;  // Page navigation buttons
  showZoom?: boolean;        // Zoom controls
  showDownload?: boolean;    // Download button
  showPrint?: boolean;       // Print button
  showFullscreen?: boolean;  // Fullscreen toggle
  showPageInfo?: boolean;    // Page number display
  showRotate?: boolean;      // Rotate buttons
&#125;

type PdfZoomLevel = 'auto' | 'page-fit' | 'page-width' | number;</code></pre>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Public Methods</h2>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b">
                    <th class="text-left py-2 pr-4">Method</th>
                    <th class="text-left py-2 pr-4">Parameters</th>
                    <th class="text-left py-2">Description</th>
                  </tr>
                </thead>
                <tbody class="text-muted-foreground">
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">setPage()</td>
                    <td class="py-2 pr-4">page: number</td>
                    <td class="py-2">Navigate to a specific page</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">setZoom()</td>
                    <td class="py-2 pr-4">level: PdfZoomLevel</td>
                    <td class="py-2">Set the zoom level</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">setTotalPages()</td>
                    <td class="py-2 pr-4">total: number</td>
                    <td class="py-2">Set total page count</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Notes</h2>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Uses native browser PDF rendering via object/iframe elements</li>
              <li>PDF must be served with appropriate CORS headers for cross-origin URLs</li>
              <li>Some advanced features (accurate page count) require PDF.js integration</li>
              <li>Print and download depend on browser permissions and PDF URL access</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PdfViewerPageComponent {}
