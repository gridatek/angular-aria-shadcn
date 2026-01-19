import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCardDemo } from '../../examples/card/sc-card-demo';

@Component({
  selector: 'app-card-page',
  imports: [ScCardDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Card</h1>
        <p class="text-muted-foreground">Displays a card with header, content, and footer.</p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Wrapper components with clean markup and encapsulated styles
          </p>
        </div>
        <div>
          <app-sc-card-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CardPage {}
