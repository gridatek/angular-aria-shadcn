import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScLanguageSwitcherDemo } from '../../examples/language-switcher/sc-language-switcher-demo';

@Component({
  selector: 'app-language-switcher-page',
  imports: [ScLanguageSwitcherDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Language Switcher</h1>
        <p class="text-muted-foreground">
          A component for switching between languages with support for Angular localize. Changing
          the language will refresh the page to load the appropriate locale bundle.
        </p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Toggle button, select dropdown, and button variants for language switching
          </p>
        </div>
        <div>
          <app-sc-language-switcher-demo />
        </div>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">Configuration</h2>
          <p class="text-sm text-muted-foreground">
            Configure languages and URL strategy using the SC_LANGUAGE_CONFIG injection token
          </p>
        </div>
        <div class="rounded-lg border p-4">
          <pre class="text-sm"><code>{{ configExample }}</code></pre>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LanguageSwitcherPage {
  readonly configExample = `// In app.config.ts
import { SC_LANGUAGE_CONFIG } from './ui/language-switcher';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: SC_LANGUAGE_CONFIG,
      useValue: {
        languages: [
          { code: 'en', label: 'English', nativeLabel: 'English' },
          { code: 'fr', label: 'French', nativeLabel: 'Français' },
        ],
        defaultLanguage: 'en',
        basePath: '/',
        storageKey: 'app-language',
      },
    },
  ],
};`;
}
