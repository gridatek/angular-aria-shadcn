import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScTimezoneDemo } from '../../examples/timezone/sc-timezone-demo';

@Component({
  selector: 'app-timezone-page',
  imports: [ScTimezoneDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Timezone</h1>
        <p class="text-muted-foreground">
          A component for selecting and displaying timezones. Supports persisting user preferences
          and formatting dates/times in the selected timezone.
        </p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Select dropdown, display button, timezone button, and badge variants for timezone
            selection
          </p>
        </div>
        <div>
          <app-sc-timezone-demo />
        </div>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">Configuration</h2>
          <p class="text-sm text-muted-foreground">
            Configure timezones and storage key using the SC_TIMEZONE_CONFIG injection token
          </p>
        </div>
        <div class="rounded-lg border p-4">
          <pre class="text-sm"><code>{{ configExample }}</code></pre>
        </div>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">Service API</h2>
          <p class="text-sm text-muted-foreground">
            Use the ScTimezoneService to programmatically manage timezone state
          </p>
        </div>
        <div class="rounded-lg border p-4">
          <pre class="text-sm"><code>{{ serviceExample }}</code></pre>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TimezonePage {
  readonly configExample = `// In app.config.ts
import { SC_TIMEZONE_CONFIG } from './ui/timezone';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: SC_TIMEZONE_CONFIG,
      useValue: {
        timezones: [
          { id: 'America/New_York', label: 'New York', offset: '-05:00', abbr: 'EST' },
          { id: 'Europe/London', label: 'London', offset: '+00:00', abbr: 'GMT' },
          { id: 'Asia/Tokyo', label: 'Tokyo', offset: '+09:00', abbr: 'JST' },
        ],
        defaultTimezone: 'America/New_York',
        storageKey: 'app-timezone',
      },
    },
  ],
};`;

  readonly serviceExample = `// In your component
import { ScTimezoneService } from './ui/timezone';

@Component({ ... })
export class MyComponent {
  private readonly timezoneService = inject(ScTimezoneService);

  // Get current timezone
  currentTz = this.timezoneService.currentTimezone();

  // Set timezone
  setTimezone(id: string) {
    this.timezoneService.setTimezone(id);
  }

  // Format date in current timezone
  formatDate(date: Date) {
    return this.timezoneService.formatDateTime(date);
  }
}`;
}
