import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnimatedCounterDemoComponent } from '../../examples/animated-counter/animated-counter-demo';

@Component({
  selector: 'app-animated-counter-page',
  imports: [AnimatedCounterDemoComponent],
  template: `
    <div class="container mx-auto py-10">
      <div class="mb-8">
        <h1 class="text-3xl font-bold">Animated Counter</h1>
        <p class="mt-2 text-muted-foreground">
          Numbers that animate smoothly between values with customizable easing.
        </p>
      </div>

      <section class="mb-12">
        <h2 class="mb-4 text-xl font-semibold">Demo</h2>
        <div class="rounded-lg border bg-card p-6">
          <sc-animated-counter-demo />
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
                <td class="py-2 pr-4">value</td>
                <td class="py-2 pr-4">number</td>
                <td class="py-2 pr-4">(required)</td>
                <td class="py-2">Target number to display</td>
              </tr>
              <tr class="border-b">
                <td class="py-2 pr-4">duration</td>
                <td class="py-2 pr-4">number</td>
                <td class="py-2 pr-4">1000</td>
                <td class="py-2">Animation duration in ms</td>
              </tr>
              <tr class="border-b">
                <td class="py-2 pr-4">easing</td>
                <td class="py-2 pr-4">'linear' | 'easeIn' | 'easeOut' | 'easeInOut'</td>
                <td class="py-2 pr-4">'easeOut'</td>
                <td class="py-2">Animation easing function</td>
              </tr>
              <tr class="border-b">
                <td class="py-2 pr-4">decimalPlaces</td>
                <td class="py-2 pr-4">number</td>
                <td class="py-2 pr-4">0</td>
                <td class="py-2">Number of decimal places</td>
              </tr>
              <tr class="border-b">
                <td class="py-2 pr-4">separator</td>
                <td class="py-2 pr-4">string</td>
                <td class="py-2 pr-4">','</td>
                <td class="py-2">Thousands separator</td>
              </tr>
              <tr class="border-b">
                <td class="py-2 pr-4">prefix</td>
                <td class="py-2 pr-4">string</td>
                <td class="py-2 pr-4">''</td>
                <td class="py-2">Prefix (e.g., '$')</td>
              </tr>
              <tr class="border-b">
                <td class="py-2 pr-4">suffix</td>
                <td class="py-2 pr-4">string</td>
                <td class="py-2 pr-4">''</td>
                <td class="py-2">Suffix (e.g., '%')</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AnimatedCounterPageComponent {
  readonly usageCode = `<sc-animated-counter
  [value]="1234"
  [duration]="1000"
  easing="easeOut"
  [decimalPlaces]="0"
  separator=","
  prefix="$"
  suffix=""
  class="text-4xl font-bold"
/>`;
}
