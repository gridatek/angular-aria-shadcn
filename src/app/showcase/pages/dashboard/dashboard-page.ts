import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  ScSidebarProvider,
  ScSidebar,
  ScSidebarHeader,
  ScSidebarContent,
  ScSidebarFooter,
  ScSidebarGroup,
  ScSidebarGroupLabel,
  ScSidebarMenu,
  ScSidebarMenuItem,
  ScSidebarMenuButton,
  ScSidebarTrigger,
  ScSidebarInset,
  ScSidebarSeparator,
} from '../../../ui/sidebar';
import { ScStatCard } from '../../../ui/stat-card';
import {
  ScCard,
  ScCardHeader,
  ScCardTitle,
  ScCardDescription,
  ScCardContent,
} from '../../../ui/card';
import {
  ScChartContainer,
  ScBarChart,
  ScLineChart,
  ScDonutChart,
  ChartDataPoint,
} from '../../../ui/chart';
import { ScProgress } from '../../../ui/progress';
import { ScBadge } from '../../../ui/badge';
import { ScAvatar, ScAvatarImage, ScAvatarFallback } from '../../../ui/avatar';
import {
  ScTable,
  ScTableHeader,
  ScTableBody,
  ScTableRow,
  ScTableHead,
  ScTableCell,
} from '../../../ui/table';
import { ScButton } from '../../../ui/button';
import {
  ScDropdownMenu,
  ScDropdownMenuTrigger,
  ScDropdownMenuContent,
  ScDropdownMenuItem,
} from '../../../ui/dropdown-menu';

@Component({
  selector: 'app-dashboard-page',
  imports: [
    RouterLink,
    RouterLinkActive,
    ScSidebarProvider,
    ScSidebar,
    ScSidebarHeader,
    ScSidebarContent,
    ScSidebarFooter,
    ScSidebarGroup,
    ScSidebarGroupLabel,
    ScSidebarMenu,
    ScSidebarMenuItem,
    ScSidebarMenuButton,
    ScSidebarTrigger,
    ScSidebarInset,
    ScSidebarSeparator,
    ScStatCard,
    ScCard,
    ScCardHeader,
    ScCardTitle,
    ScCardDescription,
    ScCardContent,
    ScChartContainer,
    ScBarChart,
    ScLineChart,
    ScDonutChart,
    ScProgress,
    ScBadge,
    ScAvatar,
    ScAvatarImage,
    ScAvatarFallback,
    ScTable,
    ScTableHeader,
    ScTableBody,
    ScTableRow,
    ScTableHead,
    ScTableCell,
    ScButton,
    ScDropdownMenu,
    ScDropdownMenuTrigger,
    ScDropdownMenuContent,
    ScDropdownMenuItem,
  ],
  template: `
    <div sc-sidebar-provider class="min-h-screen">
      <aside sc-sidebar collapsible="icon">
        <div sc-sidebar-header>
          <a routerLink="/" class="flex items-center gap-2 px-2">
            <div
              class="size-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-primary-foreground"
                aria-hidden="true"
              >
                <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
              </svg>
            </div>
            <div class="flex flex-col truncate">
              <span class="text-sm font-semibold">SC Components</span>
              <span class="text-xs text-muted-foreground">Dashboard</span>
            </div>
          </a>
        </div>

        <div sc-sidebar-content>
          <div sc-sidebar-group>
            <div sc-sidebar-group-label>Overview</div>
            <ul sc-sidebar-menu>
              @for (item of mainNav; track item.title) {
                <li sc-sidebar-menu-item>
                  <a
                    sc-sidebar-menu-button
                    [routerLink]="item.link"
                    routerLinkActive="active"
                    #rla="routerLinkActive"
                    [isActive]="rla.isActive"
                  >
                    <span [innerHTML]="item.icon"></span>
                    <span>{{ item.title }}</span>
                  </a>
                </li>
              }
            </ul>
          </div>

          <div sc-sidebar-separator></div>

          <div sc-sidebar-group>
            <div sc-sidebar-group-label>Management</div>
            <ul sc-sidebar-menu>
              @for (item of managementNav; track item.title) {
                <li sc-sidebar-menu-item>
                  <a
                    sc-sidebar-menu-button
                    [routerLink]="item.link"
                    routerLinkActive="active"
                    #rla2="routerLinkActive"
                    [isActive]="rla2.isActive"
                  >
                    <span [innerHTML]="item.icon"></span>
                    <span>{{ item.title }}</span>
                  </a>
                </li>
              }
            </ul>
          </div>
        </div>

        <div sc-sidebar-footer>
          <ul sc-sidebar-menu>
            <li sc-sidebar-menu-item>
              <button sc-sidebar-menu-button>
                <span sc-avatar class="size-6">
                  <img sc-avatar-image src="https://i.pravatar.cc/150?u=admin" alt="Admin" />
                  <span sc-avatar-fallback>AD</span>
                </span>
                <span>Admin User</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>

      <div sc-sidebar-inset>
        <header class="flex h-14 items-center gap-4 border-b px-4 lg:px-6">
          <button sc-sidebar-trigger></button>
          <div class="flex-1">
            <h1 class="text-lg font-semibold">Dashboard</h1>
          </div>
          <div class="flex items-center gap-2">
            <button sc-button variant="outline" size="sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-2"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              Export
            </button>
          </div>
        </header>

        <main class="flex-1 p-4 lg:p-6 space-y-6">
          <!-- Stats Cards -->
          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <sc-stat-card
              label="Total Revenue"
              [value]="'$45,231.89'"
              [change]="20.1"
              changeLabel="from last month"
              trend="up"
              [icon]="dollarIcon"
            />
            <sc-stat-card
              label="Subscriptions"
              value="+2350"
              [change]="180.1"
              changeLabel="from last month"
              trend="up"
              [icon]="usersIcon"
            />
            <sc-stat-card
              label="Sales"
              value="+12,234"
              [change]="19"
              changeLabel="from last month"
              trend="up"
              [icon]="creditCardIcon"
            />
            <sc-stat-card
              label="Active Now"
              value="+573"
              [change]="-2"
              changeLabel="since last hour"
              trend="down"
              [icon]="activityIcon"
            />
          </div>

          <!-- Charts Row -->
          <div class="grid gap-4 lg:grid-cols-7">
            <!-- Revenue Chart -->
            <div sc-card class="lg:col-span-4">
              <div sc-card-header>
                <h3 sc-card-title>Revenue Overview</h3>
                <p sc-card-description>Monthly revenue for the current year</p>
              </div>
              <div sc-card-content>
                <div sc-chart-container>
                  <div sc-bar-chart [data]="revenueData" [height]="300"></div>
                </div>
              </div>
            </div>

            <!-- Traffic Sources Chart -->
            <div sc-card class="lg:col-span-3">
              <div sc-card-header>
                <h3 sc-card-title>Traffic Sources</h3>
                <p sc-card-description>Where your visitors come from</p>
              </div>
              <div sc-card-content class="flex items-center justify-center">
                <div sc-chart-container>
                  <div sc-donut-chart [data]="trafficData" [size]="200" [innerRadius]="60"></div>
                </div>
              </div>
              <div class="px-6 pb-6">
                <div class="grid grid-cols-2 gap-4">
                  @for (item of trafficData; track item.label; let i = $index) {
                    <div class="flex items-center gap-2">
                      <div
                        class="size-3 rounded-full"
                        [style.background-color]="chartColors[i]"
                      ></div>
                      <span class="text-sm text-muted-foreground">{{ item.label }}</span>
                      <span class="text-sm font-medium ml-auto">{{ item.value }}%</span>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>

          <!-- User Growth Chart -->
          <div sc-card>
            <div sc-card-header>
              <h3 sc-card-title>User Growth</h3>
              <p sc-card-description>New user signups over the past 12 weeks</p>
            </div>
            <div sc-card-content>
              <div sc-chart-container>
                <div
                  sc-line-chart
                  [data]="userGrowthData"
                  [height]="250"
                  [showArea]="true"
                  [showPoints]="true"
                ></div>
              </div>
            </div>
          </div>

          <!-- Recent Activity and Tasks -->
          <div class="grid gap-4 lg:grid-cols-2">
            <!-- Recent Transactions -->
            <div sc-card>
              <div sc-card-header>
                <h3 sc-card-title>Recent Transactions</h3>
                <p sc-card-description>Latest sales and payments</p>
              </div>
              <div sc-card-content>
                <table sc-table>
                  <thead sc-table-header>
                    <tr sc-table-row>
                      <th sc-table-head>Customer</th>
                      <th sc-table-head>Status</th>
                      <th sc-table-head class="text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody sc-table-body>
                    @for (transaction of recentTransactions; track transaction.id) {
                      <tr sc-table-row>
                        <td sc-table-cell>
                          <div class="flex items-center gap-3">
                            <span sc-avatar class="size-8">
                              <img
                                sc-avatar-image
                                [src]="transaction.avatar"
                                [alt]="transaction.name"
                              />
                              <span sc-avatar-fallback>{{ transaction.initials }}</span>
                            </span>
                            <div>
                              <div class="font-medium">{{ transaction.name }}</div>
                              <div class="text-xs text-muted-foreground">
                                {{ transaction.email }}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td sc-table-cell>
                          <span
                            sc-badge
                            [variant]="
                              transaction.status === 'completed'
                                ? 'default'
                                : transaction.status === 'pending'
                                  ? 'secondary'
                                  : 'destructive'
                            "
                          >
                            {{ transaction.status }}
                          </span>
                        </td>
                        <td sc-table-cell class="text-right font-medium">
                          {{ transaction.amount }}
                        </td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Tasks Progress -->
            <div sc-card>
              <div sc-card-header>
                <h3 sc-card-title>Project Progress</h3>
                <p sc-card-description>Current project completion status</p>
              </div>
              <div sc-card-content class="space-y-6">
                @for (project of projects; track project.name) {
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="text-sm font-medium">{{ project.name }}</span>
                      <span class="text-sm text-muted-foreground">{{ project.progress }}%</span>
                    </div>
                    <sc-progress [value]="project.progress" class="h-2" />
                  </div>
                }
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  `,
  host: {
    class: 'block',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardPage {
  readonly chartColors = ['#8b5cf6', '#06b6d4', '#f97316', '#22c55e'];

  readonly dollarIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`;
  readonly usersIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
  readonly creditCardIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`;
  readonly activityIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`;

  readonly mainNav = [
    {
      title: 'Dashboard',
      link: '/dashboard',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
    },
    {
      title: 'Analytics',
      link: '/components/chart',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>`,
    },
    {
      title: 'Reports',
      link: '/components/table',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>`,
    },
  ];

  readonly managementNav = [
    {
      title: 'Users',
      link: '/users',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    },
    {
      title: 'Settings',
      link: '/settings',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
    },
    {
      title: 'Components',
      link: '/components',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>`,
    },
  ];

  readonly revenueData: ChartDataPoint[] = [
    { label: 'Jan', value: 4500 },
    { label: 'Feb', value: 5200 },
    { label: 'Mar', value: 4800 },
    { label: 'Apr', value: 6100 },
    { label: 'May', value: 5800 },
    { label: 'Jun', value: 7200 },
    { label: 'Jul', value: 6900 },
    { label: 'Aug', value: 7500 },
    { label: 'Sep', value: 8200 },
    { label: 'Oct', value: 7800 },
    { label: 'Nov', value: 8500 },
    { label: 'Dec', value: 9200 },
  ];

  readonly trafficData: ChartDataPoint[] = [
    { label: 'Direct', value: 45 },
    { label: 'Social', value: 25 },
    { label: 'Referral', value: 20 },
    { label: 'Organic', value: 10 },
  ];

  readonly userGrowthData: ChartDataPoint[] = [
    { label: 'W1', value: 1200 },
    { label: 'W2', value: 1350 },
    { label: 'W3', value: 1480 },
    { label: 'W4', value: 1620 },
    { label: 'W5', value: 1850 },
    { label: 'W6', value: 2100 },
    { label: 'W7', value: 2380 },
    { label: 'W8', value: 2650 },
    { label: 'W9', value: 2920 },
    { label: 'W10', value: 3200 },
    { label: 'W11', value: 3580 },
    { label: 'W12', value: 4100 },
  ];

  readonly recentTransactions = [
    {
      id: 1,
      name: 'Olivia Martin',
      email: 'olivia.martin@email.com',
      avatar: 'https://i.pravatar.cc/150?u=olivia',
      initials: 'OM',
      status: 'completed',
      amount: '+$1,999.00',
    },
    {
      id: 2,
      name: 'Jackson Lee',
      email: 'jackson.lee@email.com',
      avatar: 'https://i.pravatar.cc/150?u=jackson',
      initials: 'JL',
      status: 'pending',
      amount: '+$39.00',
    },
    {
      id: 3,
      name: 'Isabella Nguyen',
      email: 'isabella.nguyen@email.com',
      avatar: 'https://i.pravatar.cc/150?u=isabella',
      initials: 'IN',
      status: 'completed',
      amount: '+$299.00',
    },
    {
      id: 4,
      name: 'William Kim',
      email: 'will@email.com',
      avatar: 'https://i.pravatar.cc/150?u=william',
      initials: 'WK',
      status: 'failed',
      amount: '+$99.00',
    },
    {
      id: 5,
      name: 'Sofia Davis',
      email: 'sofia.davis@email.com',
      avatar: 'https://i.pravatar.cc/150?u=sofia',
      initials: 'SD',
      status: 'completed',
      amount: '+$39.00',
    },
  ];

  readonly projects = [
    { name: 'Website Redesign', progress: 75 },
    { name: 'Mobile App', progress: 45 },
    { name: 'API Integration', progress: 90 },
    { name: 'Database Migration', progress: 60 },
  ];
}
