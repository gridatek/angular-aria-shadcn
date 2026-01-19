import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScAvatarDemo } from '../../examples/avatar/sc-avatar-demo';

@Component({
  selector: 'app-avatar-page',
  imports: [ScAvatarDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Avatar</h1>
        <p class="text-muted-foreground">
          An image element with a fallback for representing the user.
        </p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Wrapper components with clean markup and encapsulated styles
          </p>
        </div>
        <div>
          <app-sc-avatar-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AvatarPage {}
