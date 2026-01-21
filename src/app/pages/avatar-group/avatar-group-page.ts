import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AvatarGroupDemoComponent } from '../../examples/avatar-group/avatar-group-demo';

@Component({
  selector: 'app-avatar-group-page',
  imports: [AvatarGroupDemoComponent],
  template: `
    <div class="container mx-auto py-10 px-4">
      <div class="max-w-4xl mx-auto">
        <div class="mb-8">
          <h1 class="text-3xl font-bold mb-2">Avatar Group</h1>
          <p class="text-muted-foreground">
            Display a group of avatars with stacked/overlapping layout and overflow indicator.
          </p>
        </div>

        <div class="space-y-8">
          <section>
            <h2 class="text-xl font-semibold mb-4">Demo</h2>
            <app-avatar-group-demo />
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Features</h2>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Stacked/overlapping avatar display</li>
              <li>Configurable maximum visible count</li>
              <li>Overflow indicator with count</li>
              <li>Multiple size variants (sm, md, lg, xl)</li>
              <li>Adjustable spacing (tight, normal, loose)</li>
              <li>Fallback initials when no image</li>
              <li>Click events for avatars and overflow</li>
              <li>Hover effects with z-index handling</li>
              <li>Keyboard accessible</li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Usage</h2>
            <pre class="p-4 bg-muted rounded-lg overflow-x-auto text-sm"><code>&lt;sc-avatar-group
  [avatars]="users"
  [max]="4"
  size="md"
  spacing="normal"
  (avatarClick)="onAvatarClick($event)"
  (overflowClick)="onOverflowClick($event)"
/&gt;

// Define avatars
users: AvatarGroupItem[] = [
  &#123; id: '1', src: 'url', name: 'Alice' &#125;,
  &#123; id: '2', name: 'Bob', fallback: 'B' &#125;,
  // ...
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
                    <td class="py-2 pr-4 font-mono text-xs">avatars</td>
                    <td class="py-2 pr-4">AvatarGroupItem[]</td>
                    <td class="py-2 pr-4">[]</td>
                    <td class="py-2">Array of avatar items</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">max</td>
                    <td class="py-2 pr-4">number</td>
                    <td class="py-2 pr-4">4</td>
                    <td class="py-2">Maximum visible avatars</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">size</td>
                    <td class="py-2 pr-4">'sm' | 'md' | 'lg' | 'xl'</td>
                    <td class="py-2 pr-4">'md'</td>
                    <td class="py-2">Avatar size</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-4 font-mono text-xs">spacing</td>
                    <td class="py-2 pr-4">'tight' | 'normal' | 'loose'</td>
                    <td class="py-2 pr-4">'normal'</td>
                    <td class="py-2">Overlap amount</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Type Definitions</h2>
            <pre
              class="p-4 bg-muted rounded-lg overflow-x-auto text-sm"
            ><code>interface AvatarGroupItem &#123;
  id: string;
  src?: string;
  alt?: string;
  fallback?: string;
  name?: string;
&#125;

type AvatarGroupSize = 'sm' | 'md' | 'lg' | 'xl';</code></pre>
          </section>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AvatarGroupPageComponent {}
