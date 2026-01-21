import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfettiDemoComponent } from '../../examples/confetti/confetti-demo';

@Component({
  selector: 'app-confetti-page',
  imports: [ConfettiDemoComponent],
  template: `
    <div class="container mx-auto py-10">
      <div class="mb-8">
        <h1 class="text-3xl font-bold">Confetti</h1>
        <p class="mt-2 text-muted-foreground">
          Celebration animation effect with customizable particles.
        </p>
      </div>

      <section class="mb-12">
        <h2 class="mb-4 text-xl font-semibold">Demo</h2>
        <div class="rounded-lg border bg-card p-6">
          <sc-confetti-demo />
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
                <td class="py-2 pr-4">options</td>
                <td class="py-2 pr-4">ConfettiOptions</td>
                <td class="py-2 pr-4">{{ '{}' }}</td>
                <td class="py-2">Default options for confetti</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ConfettiPageComponent {
  readonly usageCode = `<sc-confetti #confetti />

<button (click)="confetti.fire()">Fire Confetti!</button>

// With custom options
confetti.fire({
  particleCount: 100,
  spread: 70,
  colors: ['#ff0000', '#00ff00', '#0000ff'],
  origin: { x: 0.5, y: 0.5 }
});

// Fire from element
confetti.fireFromElement(buttonElement);`;
}
