import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { cn } from './utils';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  template: `<router-outlet />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('block', this.classInput()));
}
