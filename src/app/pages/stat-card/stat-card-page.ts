import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StatCardDemoComponent } from '../../examples/stat-card/stat-card-demo';

@Component({
  selector: 'app-stat-card-page',
  imports: [StatCardDemoComponent],
  template: `
    <div class="container mx-auto py-10">
      <div class="mb-8">
        <h1 class="text-3xl font-bold">Stat Card</h1>
        <p class="mt-2 text-muted-foreground">
          Display statistics and metrics with optional trends and icons.
        </p>
      </div>

      <section class="mb-12">
        <h2 class="mb-4 text-xl font-semibold">Demo</h2>
        <div class="rounded-lg border bg-card p-6">
          <sc-stat-card-demo />
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
                <td class="py-2 pr-4">label</td>
                <td class="py-2 pr-4">string</td>
                <td class="py-2 pr-4">(required)</td>
                <td class="py-2">Stat label</td>
              </tr>
              <tr class="border-b">
                <td class="py-2 pr-4">value</td>
                <td class="py-2 pr-4">string | number</td>
                <td class="py-2 pr-4">(required)</td>
                <td class="py-2">Stat value</td>
              </tr>
              <tr class="border-b">
                <td class="py-2 pr-4">change</td>
                <td class="py-2 pr-4">number</td>
                <td class="py-2 pr-4">undefined</td>
                <td class="py-2">Percentage change</td>
              </tr>
              <tr class="border-b">
                <td class="py-2 pr-4">trend</td>
                <td class="py-2 pr-4">'up' | 'down' | 'neutral'</td>
                <td class="py-2 pr-4">'neutral'</td>
                <td class="py-2">Trend direction</td>
              </tr>
              <tr class="border-b">
                <td class="py-2 pr-4">variant</td>
                <td class="py-2 pr-4">'default' | 'outline' | 'filled'</td>
                <td class="py-2 pr-4">'default'</td>
                <td class="py-2">Card style variant</td>
              </tr>
              <tr class="border-b">
                <td class="py-2 pr-4">size</td>
                <td class="py-2 pr-4">'sm' | 'md' | 'lg'</td>
                <td class="py-2 pr-4">'md'</td>
                <td class="py-2">Card size</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StatCardPageComponent {
  readonly usageCode = `<sc-stat-card
  label="Total Revenue"
  value="$45,231.89"
  [change]="20.1"
  changeLabel="from last month"
  trend="up"
  [icon]="dollarIcon"
  variant="default"
  size="md"
/>`;
}
