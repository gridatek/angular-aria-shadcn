import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TransferListDemoComponent } from '../../examples/transfer-list/transfer-list-demo';

@Component({
  selector: 'app-transfer-list-page',
  imports: [TransferListDemoComponent],
  template: `
    <div class="container mx-auto py-10">
      <div class="mb-8">
        <h1 class="text-3xl font-bold">Transfer List</h1>
        <p class="mt-2 text-muted-foreground">
          Move items between two lists with selection and search support.
        </p>
      </div>

      <section class="mb-12">
        <h2 class="mb-4 text-xl font-semibold">Demo</h2>
        <div class="rounded-lg border bg-card p-6">
          <sc-transfer-list-demo />
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
                <td class="py-2 pr-4">sourceItems</td>
                <td class="py-2 pr-4">TransferListItem[]</td>
                <td class="py-2 pr-4">[]</td>
                <td class="py-2">Source list items (two-way)</td>
              </tr>
              <tr class="border-b">
                <td class="py-2 pr-4">targetItems</td>
                <td class="py-2 pr-4">TransferListItem[]</td>
                <td class="py-2 pr-4">[]</td>
                <td class="py-2">Target list items (two-way)</td>
              </tr>
              <tr class="border-b">
                <td class="py-2 pr-4">sourceTitle</td>
                <td class="py-2 pr-4">string</td>
                <td class="py-2 pr-4">'Available'</td>
                <td class="py-2">Source list title</td>
              </tr>
              <tr class="border-b">
                <td class="py-2 pr-4">targetTitle</td>
                <td class="py-2 pr-4">string</td>
                <td class="py-2 pr-4">'Selected'</td>
                <td class="py-2">Target list title</td>
              </tr>
              <tr class="border-b">
                <td class="py-2 pr-4">searchable</td>
                <td class="py-2 pr-4">boolean</td>
                <td class="py-2 pr-4">true</td>
                <td class="py-2">Enable search in lists</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TransferListPageComponent {
  readonly usageCode = `const sourceItems = signal<TransferListItem[]>([
  { id: '1', label: 'Item 1', description: 'Description' },
  { id: '2', label: 'Item 2' },
]);

const targetItems = signal<TransferListItem[]>([]);

<sc-transfer-list
  [(sourceItems)]="sourceItems"
  [(targetItems)]="targetItems"
  sourceTitle="Available"
  targetTitle="Selected"
  [searchable]="true"
  (change)="onChange($event)"
/>`;
}
