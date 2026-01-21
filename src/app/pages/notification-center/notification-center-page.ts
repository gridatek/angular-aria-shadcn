import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NotificationCenterDemoComponent } from '../../examples/notification-center/notification-center-demo';

@Component({
  selector: 'app-notification-center-page',
  imports: [NotificationCenterDemoComponent],
  template: `
    <div class="container mx-auto py-10 px-4">
      <div class="max-w-4xl mx-auto">
        <div class="mb-8">
          <h1 class="text-3xl font-bold mb-2">Notification Center</h1>
          <p class="text-muted-foreground">
            A grouped notification management component with filtering, read states, and actions.
          </p>
        </div>

        <div class="space-y-8">
          <section>
            <h2 class="text-xl font-semibold mb-4">Demo</h2>
            <app-notification-center-demo />
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Features</h2>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Group notifications by category</li>
              <li>Filter by all, unread, or read</li>
              <li>Mark individual or all notifications as read</li>
              <li>Dismiss individual notifications</li>
              <li>Clear all notifications</li>
              <li>Action buttons on notifications</li>
              <li>Notification types: info, success, warning, error, message</li>
              <li>Avatar support for messages</li>
              <li>Relative timestamps (5m ago, 2h ago, etc.)</li>
              <li>Collapsible notification groups</li>
              <li>Empty state display</li>
              <li>Keyboard accessible</li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">Usage</h2>
            <pre
              class="p-4 bg-muted rounded-lg overflow-x-auto text-sm"
            ><code>&lt;sc-notification-center
  [(notifications)]="notifications"
  [groups]="groups"
  (markRead)="onMarkRead($event)"
  (dismiss)="onDismiss($event)"
  (clearAll)="onClearAll()"
/&gt;</code></pre>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">API</h2>
            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-medium mb-3">ScNotificationCenter</h3>
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
                        <td class="py-2 pr-4 font-mono text-xs">notifications</td>
                        <td class="py-2 pr-4">Notification[]</td>
                        <td class="py-2 pr-4">[]</td>
                        <td class="py-2">Array of notifications (two-way binding)</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">groups</td>
                        <td class="py-2 pr-4">NotificationGroup[]</td>
                        <td class="py-2 pr-4">[]</td>
                        <td class="py-2">Groups for categorizing notifications</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">title</td>
                        <td class="py-2 pr-4">string</td>
                        <td class="py-2 pr-4">'Notifications'</td>
                        <td class="py-2">Header title</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">showFilters</td>
                        <td class="py-2 pr-4">boolean</td>
                        <td class="py-2 pr-4">true</td>
                        <td class="py-2">Show filter tabs</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">showClearAll</td>
                        <td class="py-2 pr-4">boolean</td>
                        <td class="py-2 pr-4">true</td>
                        <td class="py-2">Show clear all button</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">showDismiss</td>
                        <td class="py-2 pr-4">boolean</td>
                        <td class="py-2 pr-4">true</td>
                        <td class="py-2">Show dismiss on items</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">emptyTitle</td>
                        <td class="py-2 pr-4">string</td>
                        <td class="py-2 pr-4">'No notifications'</td>
                        <td class="py-2">Empty state title</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">emptyDescription</td>
                        <td class="py-2 pr-4">string</td>
                        <td class="py-2 pr-4">"You're all caught up!"</td>
                        <td class="py-2">Empty state description</td>
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
                        <td class="py-2 pr-4 font-mono text-xs">markRead</td>
                        <td class="py-2 pr-4">&#123; notification, read &#125;</td>
                        <td class="py-2">Notification read state changed</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">markAllRead</td>
                        <td class="py-2 pr-4">void</td>
                        <td class="py-2">All marked as read</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">dismiss</td>
                        <td class="py-2 pr-4">Notification</td>
                        <td class="py-2">Notification dismissed</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">clearAll</td>
                        <td class="py-2 pr-4">void</td>
                        <td class="py-2">All notifications cleared</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">actionClick</td>
                        <td class="py-2 pr-4">&#123; notification, action &#125;</td>
                        <td class="py-2">Action button clicked</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">itemClick</td>
                        <td class="py-2 pr-4">Notification</td>
                        <td class="py-2">Notification clicked</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-2 pr-4 font-mono text-xs">filterChange</td>
                        <td class="py-2 pr-4">NotificationFilter</td>
                        <td class="py-2">Filter changed</td>
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
            ><code>interface Notification &#123;
  id: string;
  title: string;
  description?: string;
  type: 'info' | 'success' | 'warning' | 'error' | 'message';
  timestamp: Date;
  read: boolean;
  groupId?: string;
  avatar?: string;
  icon?: string;
  action?: NotificationAction;
  metadata?: Record&lt;string, unknown&gt;;
&#125;

interface NotificationAction &#123;
  label: string;
  url?: string;
  handler?: () => void;
&#125;

interface NotificationGroup &#123;
  id: string;
  title: string;
  icon?: string;
  collapsed?: boolean;
&#125;

type NotificationFilter = 'all' | 'unread' | 'read';</code></pre>
          </section>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NotificationCenterPageComponent {}
