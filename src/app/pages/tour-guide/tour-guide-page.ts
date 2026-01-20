import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TourGuideDemoComponent } from '../../examples/tour-guide/tour-guide-demo';

@Component({
  selector: 'app-tour-guide-page',
  imports: [TourGuideDemoComponent],
  template: `
    <div class="container mx-auto py-10 px-4">
      <div class="max-w-4xl mx-auto">
        <div class="mb-8">
          <h1 class="text-3xl font-bold mb-2">Tour Guide</h1>
          <p class="text-muted-foreground">
            Step-by-step UI tour component for onboarding users and highlighting features.
          </p>
        </div>

        <div class="space-y-8">
          <section>
            <h2 class="text-xl font-semibold mb-4">Demo</h2>
            <div class="border rounded-lg p-6 bg-card">
              <app-tour-guide-demo />
            </div>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Features</h2>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Step-by-step guided tours</li>
              <li>SVG mask-based overlay with spotlight cutout</li>
              <li>Auto-positioning tooltips</li>
              <li>Progress indicator and step numbers</li>
              <li>Keyboard navigation (arrow keys, Enter, Escape)</li>
              <li>Customizable highlight padding and overlay opacity</li>
              <li>Scroll target elements into view</li>
              <li>Injectable TourService for programmatic control</li>
              <li>Lifecycle hooks for before/after step actions</li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Usage</h2>
            <pre class="p-4 bg-muted rounded-lg overflow-x-auto text-sm"><code>// In your component
import &#123; TourService, TourOptions &#125; from './ui/tour-guide';

const tourService = inject(TourService);

const options: TourOptions = &#123;
  steps: [
    &#123;
      target: '#element-1',
      title: 'Welcome',
      content: 'This is the first step.',
      placement: 'bottom'
    &#125;,
    &#123;
      target: '#element-2',
      title: 'Settings',
      content: 'Configure your options here.'
    &#125;
  ],
  showProgress: true,
  showStepNumbers: true
&#125;;

tourService.start(options);</code></pre>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Keyboard Shortcuts</h2>
            <div class="grid grid-cols-2 gap-4 max-w-md">
              <div class="flex items-center gap-2">
                <kbd class="px-2 py-1 bg-muted rounded text-sm">→</kbd>
                <span class="text-sm text-muted-foreground">Next step</span>
              </div>
              <div class="flex items-center gap-2">
                <kbd class="px-2 py-1 bg-muted rounded text-sm">←</kbd>
                <span class="text-sm text-muted-foreground">Previous step</span>
              </div>
              <div class="flex items-center gap-2">
                <kbd class="px-2 py-1 bg-muted rounded text-sm">Enter</kbd>
                <span class="text-sm text-muted-foreground">Next/Finish</span>
              </div>
              <div class="flex items-center gap-2">
                <kbd class="px-2 py-1 bg-muted rounded text-sm">Esc</kbd>
                <span class="text-sm text-muted-foreground">Close tour</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TourGuidePageComponent {}
