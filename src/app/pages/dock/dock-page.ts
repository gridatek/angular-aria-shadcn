import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DockDemoComponent } from '../../examples/dock/dock-demo';

@Component({
  selector: 'app-dock-page',
  imports: [DockDemoComponent],
  template: `
    <div class="container mx-auto py-10">
      <div class="mb-8">
        <h1 class="text-3xl font-bold">Dock</h1>
        <p class="mt-2 text-muted-foreground">
          macOS-style icon dock with magnification effect on hover.
        </p>
      </div>

      <section class="mb-12">
        <h2 class="mb-4 text-xl font-semibold">Demo</h2>
        <div class="rounded-lg border bg-card p-6">
          <sc-dock-demo />
        </div>
      </section>

      <section class="mb-12">
        <h2 class="mb-4 text-xl font-semibold">Usage</h2>
        <div class="rounded-lg border bg-muted/50 p-4">
          <pre class="overflow-x-auto text-sm" [textContent]="usageCode"></pre>
        </div>
      </section>

      <section>
        <h2 class="mb-4 text-xl font-semibold">API</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm">
            <thead>
              <tr class="border-b">
                <th class="pb-2 pr-4 font-medium">Input</th>
                <th class="pb-2 pr-4 font-medium">Type</th>
                <th class="pb-2 pr-4 font-medium">Default</th>
                <th class="pb-2 font-medium">Description</th>
              </tr>
            </thead>
            <tbody class="font-mono text-xs">
              <tr class="border-b">
                <td class="py-2 pr-4">items</td>
                <td class="py-2 pr-4">DockItem[]</td>
                <td class="py-2 pr-4">[]</td>
                <td class="py-2">Dock items array</td>
              </tr>
              <tr class="border-b">
                <td class="py-2 pr-4">position</td>
                <td class="py-2 pr-4">'bottom' | 'left' | 'right'</td>
                <td class="py-2 pr-4">'bottom'</td>
                <td class="py-2">Dock position</td>
              </tr>
              <tr class="border-b">
                <td class="py-2 pr-4">size</td>
                <td class="py-2 pr-4">'sm' | 'md' | 'lg'</td>
                <td class="py-2 pr-4">'md'</td>
                <td class="py-2">Icon size</td>
              </tr>
              <tr class="border-b">
                <td class="py-2 pr-4">magnification</td>
                <td class="py-2 pr-4">boolean</td>
                <td class="py-2 pr-4">true</td>
                <td class="py-2">Enable magnification effect</td>
              </tr>
              <tr class="border-b">
                <td class="py-2 pr-4">magnificationScale</td>
                <td class="py-2 pr-4">number</td>
                <td class="py-2 pr-4">1.5</td>
                <td class="py-2">Max magnification scale</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DockPageComponent {
  readonly usageCode = `const items: DockItem[] = [
  { id: 'home', label: 'Home', icon: '<svg>...</svg>' },
  { id: 'mail', label: 'Mail', icon: '<svg>...</svg>', badge: 5 },
  { id: 'settings', label: 'Settings', icon: '<svg>...</svg>' },
];

<sc-dock
  [items]="items"
  position="bottom"
  size="md"
  [magnification]="true"
  [magnificationScale]="1.5"
  (itemClick)="onItemClick($event)"
/>`;
}
