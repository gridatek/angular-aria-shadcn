import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KanbanBoardDemoComponent } from '../../examples/kanban-board/kanban-board-demo';

@Component({
  selector: 'app-kanban-board-page',
  imports: [KanbanBoardDemoComponent],
  template: `
    <div class="container mx-auto py-10 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="mb-8">
          <h1 class="text-3xl font-bold mb-2">Kanban Board</h1>
          <p class="text-muted-foreground">
            Drag-and-drop task board for project management and workflow visualization.
          </p>
        </div>

        <div class="space-y-8">
          <section>
            <h2 class="text-xl font-semibold mb-4">Demo</h2>
            <app-kanban-board-demo />
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Features</h2>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Drag and drop cards between columns</li>
              <li>Reorder cards within columns</li>
              <li>Add and delete cards</li>
              <li>Add new columns</li>
              <li>Collapse/expand columns</li>
              <li>Card labels with custom colors</li>
              <li>Card priority indicators</li>
              <li>Due date display with overdue highlighting</li>
              <li>Assignee avatars/initials</li>
              <li>Column card limits with warnings</li>
              <li>Keyboard accessible</li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Usage</h2>
            <pre class="p-4 bg-muted rounded-lg overflow-x-auto text-sm"><code>&lt;sc-kanban-board
  [(columns)]="columns"
  [(cards)]="cards"
  (cardMoved)="onCardMoved($event)"
  (cardAdded)="onCardAdded($event)"
  (cardDeleted)="onCardDeleted($event)"
/&gt;</code></pre>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">API</h2>
            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-medium mb-3">ScKanbanBoard</h3>
                <div class="overflow-x-auto">
                  <table class="w-full text-sm">
                    <thead>
                      <tr class="border-b">
                        <th class="text-left py-2 pr-4">Input</th>
                        <th class="text-left py-2 pr-4">Type</th>
                        <th class="text-left py-2 pr-4">Default</th>
                        <th class="text-left py-2">Description</th>
                      </tr>
                    </thead>
                    <tbody class="text-muted-foreground">
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">columns</td>
                        <td class="py-2 pr-4">KanbanColumn[]</td>
                        <td class="py-2 pr-4">[]</td>
                        <td class="py-2">Array of columns (two-way binding)</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">cards</td>
                        <td class="py-2 pr-4">KanbanCard[]</td>
                        <td class="py-2 pr-4">[]</td>
                        <td class="py-2">Array of cards (two-way binding)</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">disabled</td>
                        <td class="py-2 pr-4">boolean</td>
                        <td class="py-2 pr-4">false</td>
                        <td class="py-2">Disable drag and drop</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">showAddCard</td>
                        <td class="py-2 pr-4">boolean</td>
                        <td class="py-2 pr-4">true</td>
                        <td class="py-2">Show add card buttons</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">showDeleteCard</td>
                        <td class="py-2 pr-4">boolean</td>
                        <td class="py-2 pr-4">true</td>
                        <td class="py-2">Show delete card buttons</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">showAddColumn</td>
                        <td class="py-2 pr-4">boolean</td>
                        <td class="py-2 pr-4">true</td>
                        <td class="py-2">Show add column button</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 class="text-lg font-medium mb-3">Outputs</h3>
                <div class="overflow-x-auto">
                  <table class="w-full text-sm">
                    <thead>
                      <tr class="border-b">
                        <th class="text-left py-2 pr-4">Output</th>
                        <th class="text-left py-2 pr-4">Type</th>
                        <th class="text-left py-2">Description</th>
                      </tr>
                    </thead>
                    <tbody class="text-muted-foreground">
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">cardMoved</td>
                        <td class="py-2 pr-4">KanbanDragEvent</td>
                        <td class="py-2">Emitted when a card is moved</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">cardAdded</td>
                        <td class="py-2 pr-4">KanbanCardAddEvent</td>
                        <td class="py-2">Emitted when a card is added</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">cardDeleted</td>
                        <td class="py-2 pr-4">KanbanCardDeleteEvent</td>
                        <td class="py-2">Emitted when a card is deleted</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">cardClick</td>
                        <td class="py-2 pr-4">KanbanCard</td>
                        <td class="py-2">Emitted when a card is clicked</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">columnAdded</td>
                        <td class="py-2 pr-4">string</td>
                        <td class="py-2">Emitted when a column is added</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Data Types</h2>
            <pre
              class="p-4 bg-muted rounded-lg overflow-x-auto text-sm"
            ><code>interface KanbanColumn &#123;
  id: string;
  title: string;
  order: number;
  color?: string;      // Column header accent color
  limit?: number;      // WIP limit
  collapsed?: boolean; // Collapsed state
&#125;

interface KanbanCard &#123;
  id: string;
  title: string;
  description?: string;
  columnId: string;
  order: number;
  labels?: KanbanLabel[];
  assignee?: KanbanAssignee;
  dueDate?: Date;
  priority?: 'low' | 'medium' | 'high' | 'urgent';
  metadata?: Record&lt;string, unknown&gt;;
&#125;

interface KanbanLabel &#123;
  id: string;
  text: string;
  color: string;
&#125;

interface KanbanAssignee &#123;
  id: string;
  name: string;
  avatar?: string;
  initials?: string;
&#125;</code></pre>
          </section>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class KanbanBoardPageComponent {}
