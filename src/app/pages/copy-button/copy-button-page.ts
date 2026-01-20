import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCopyButtonDemo } from '../../examples/copy-button/sc-copy-button-demo';

@Component({
  selector: 'app-copy-button-page',
  imports: [ScCopyButtonDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Copy Button</h1>
        <p class="text-muted-foreground">
          A button component that copies text to clipboard with visual feedback.
        </p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Flexible copy button with icon animation, variants, and convenience wrappers for common
            patterns.
          </p>
        </div>
        <div>
          <app-sc-copy-button-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CopyButtonPage {}
