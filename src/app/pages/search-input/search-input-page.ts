import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchInputDemoComponent } from '../../examples/search-input/search-input-demo';

@Component({
  selector: 'app-search-input-page',
  imports: [SearchInputDemoComponent],
  template: `
    <div class="container mx-auto py-10">
      <div class="mb-8">
        <h1 class="text-3xl font-bold">Search Input</h1>
        <p class="mt-2 text-muted-foreground">
          A search input with autocomplete suggestions and keyboard navigation.
        </p>
      </div>

      <section class="mb-12">
        <h2 class="mb-4 text-xl font-semibold">Demo</h2>
        <div class="rounded-lg border bg-card p-6">
          <sc-search-input-demo />
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
                <td class="py-2 pr-4">suggestions</td>
                <td class="py-2 pr-4">SearchSuggestion[]</td>
                <td class="py-2 pr-4">[]</td>
                <td class="py-2">Autocomplete suggestions</td>
              </tr>
              <tr class="border-b">
                <td class="py-2 pr-4">placeholder</td>
                <td class="py-2 pr-4">string</td>
                <td class="py-2 pr-4">'Search...'</td>
                <td class="py-2">Input placeholder text</td>
              </tr>
              <tr class="border-b">
                <td class="py-2 pr-4">debounceMs</td>
                <td class="py-2 pr-4">number</td>
                <td class="py-2 pr-4">300</td>
                <td class="py-2">Debounce delay in ms</td>
              </tr>
              <tr class="border-b">
                <td class="py-2 pr-4">loading</td>
                <td class="py-2 pr-4">boolean</td>
                <td class="py-2 pr-4">false</td>
                <td class="py-2">Show loading spinner</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchInputPageComponent {
  readonly usageCode = `const suggestions: SearchSuggestion[] = [
  { id: '1', label: 'Apple', description: 'A fruit' },
  { id: '2', label: 'Banana', description: 'A yellow fruit' },
];

<sc-search-input
  [suggestions]="suggestions"
  [loading]="isLoading"
  placeholder="Search..."
  (search)="onSearch($event)"
  (suggestionSelect)="onSelect($event)"
/>`;
}
