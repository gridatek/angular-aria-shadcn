import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCommandDemo } from '../../examples/command/sc-command-demo';

@Component({
  selector: 'app-command-page',
  imports: [ScCommandDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Command</h1>
        <p class="text-muted-foreground">
          A command palette for fast, keyboard-driven navigation and actions.
        </p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Searchable command menu with groups, shortcuts, and filtering
          </p>
        </div>
        <div>
          <app-sc-command-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CommandPage {}
