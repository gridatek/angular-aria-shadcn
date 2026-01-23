import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import {
  ColumnDef,
  ScDataTable,
  ScDataTableBody,
  ScDataTableCell,
  ScDataTableColumnToggle,
  ScDataTableFilter,
  ScDataTableHead,
  ScDataTableHeader,
  ScDataTablePagination,
  ScDataTableRow,
} from '../../../ui/data-table';
import { ScButton } from '../../../ui/button';
import { ScBadge } from '../../../ui/badge';
import { ScAvatar, ScAvatarImage, ScAvatarFallback } from '../../../ui/avatar';
import { ScInput } from '../../../ui/input';
import { ScLabel } from '../../../ui/label';
import { ScSelect, ScSelectTrigger, ScSelectContent, ScSelectItem } from '../../../ui/select';
import {
  ScDialog,
  ScDialogTrigger,
  ScDialogContent,
  ScDialogHeader,
  ScDialogTitle,
  ScDialogDescription,
  ScDialogFooter,
  ScDialogClose,
} from '../../../ui/dialog';
import {
  ScSheet,
  ScSheetTrigger,
  ScSheetContent,
  ScSheetHeader,
  ScSheetTitle,
  ScSheetDescription,
  ScSheetFooter,
  ScSheetClose,
} from '../../../ui/sheet';
import {
  ScAlertDialog,
  ScAlertDialogTrigger,
  ScAlertDialogContent,
  ScAlertDialogHeader,
  ScAlertDialogTitle,
  ScAlertDialogDescription,
  ScAlertDialogFooter,
  ScAlertDialogCancel,
  ScAlertDialogAction,
} from '../../../ui/alert-dialog';
import {
  ScDropdownMenu,
  ScDropdownMenuTrigger,
  ScDropdownMenuContent,
  ScDropdownMenuItem,
  ScDropdownMenuSeparator,
} from '../../../ui/dropdown-menu';
import { ScEmptyState } from '../../../ui/empty-state';
import { ScSeparator } from '../../../ui/separator';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'Viewer';
  status: 'active' | 'inactive' | 'pending';
  avatar: string;
  createdAt: Date;
}

@Component({
  selector: 'app-users-page',
  imports: [
    FormsModule,
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
    ScDataTable,
    ScDataTableBody,
    ScDataTableCell,
    ScDataTableColumnToggle,
    ScDataTableFilter,
    ScDataTableHead,
    ScDataTableHeader,
    ScDataTablePagination,
    ScDataTableRow,
    ScButton,
    ScBadge,
    ScAvatar,
    ScAvatarImage,
    ScAvatarFallback,
    ScInput,
    ScLabel,
    ScSelect,
    ScSelectTrigger,
    ScSelectContent,
    ScSelectItem,
    ScDialog,
    ScDialogTrigger,
    ScDialogContent,
    ScDialogHeader,
    ScDialogTitle,
    ScDialogDescription,
    ScDialogFooter,
    ScDialogClose,
    ScSheet,
    ScSheetTrigger,
    ScSheetContent,
    ScSheetHeader,
    ScSheetTitle,
    ScSheetDescription,
    ScSheetFooter,
    ScSheetClose,
    ScAlertDialog,
    ScAlertDialogTrigger,
    ScAlertDialogContent,
    ScAlertDialogHeader,
    ScAlertDialogTitle,
    ScAlertDialogDescription,
    ScAlertDialogFooter,
    ScAlertDialogCancel,
    ScAlertDialogAction,
    ScDropdownMenu,
    ScDropdownMenuTrigger,
    ScDropdownMenuContent,
    ScDropdownMenuItem,
    ScDropdownMenuSeparator,
    ScEmptyState,
    ScSeparator,
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
              <span class="text-xs text-muted-foreground">User Management</span>
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
            <h1 class="text-lg font-semibold">Users</h1>
          </div>

          <!-- Add User Dialog -->
          <div sc-dialog>
            <button sc-dialog-trigger sc-button>
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
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <line x1="19" x2="19" y1="8" y2="14" />
                <line x1="22" x2="16" y1="11" y2="11" />
              </svg>
              Add User
            </button>
            <div sc-dialog-content class="sm:max-w-[425px]">
              <div sc-dialog-header>
                <h2 sc-dialog-title>Add New User</h2>
                <p sc-dialog-description>Fill in the details to create a new user account.</p>
              </div>
              <div class="grid gap-4 py-4">
                <div class="grid gap-2">
                  <label sc-label for="name">Full Name</label>
                  <input sc-input id="name" placeholder="John Doe" [(ngModel)]="newUser.name" />
                </div>
                <div class="grid gap-2">
                  <label sc-label for="email">Email</label>
                  <input
                    sc-input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    [(ngModel)]="newUser.email"
                  />
                </div>
                <div class="grid gap-2">
                  <label sc-label for="role">Role</label>
                  <div sc-select [(value)]="newUser.role">
                    <button sc-select-trigger id="role">
                      {{ newUser.role || 'Select role' }}
                    </button>
                    <div sc-select-content>
                      <div sc-select-item value="Admin">Admin</div>
                      <div sc-select-item value="Editor">Editor</div>
                      <div sc-select-item value="Viewer">Viewer</div>
                    </div>
                  </div>
                </div>
              </div>
              <div sc-dialog-footer>
                <button sc-dialog-close sc-button variant="outline">Cancel</button>
                <button sc-dialog-close sc-button (click)="addUser()">Add User</button>
              </div>
            </div>
          </div>
        </header>

        <main class="flex-1 p-4 lg:p-6">
          <div #dataTable="scDataTable" sc-data-table [data]="users()" [columns]="columns">
            <!-- Toolbar -->
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-4">
              <input
                sc-data-table-filter
                placeholder="Search users..."
                class="w-full sm:max-w-sm"
              />
              <div class="flex items-center gap-2 ml-auto">
                <div sc-data-table-column-toggle></div>
              </div>
            </div>

            <!-- Table -->
            <div class="rounded-md border">
              <table class="w-full caption-bottom text-sm">
                <thead sc-data-table-header>
                  <tr>
                    <th sc-data-table-head class="w-[50px]">
                      <input
                        type="checkbox"
                        class="size-4 rounded border-primary"
                        [checked]="isAllSelected()"
                        [indeterminate]="isSomeSelected()"
                        (change)="toggleAllSelection()"
                      />
                    </th>
                    <th sc-data-table-head columnId="name" [sortable]="true">User</th>
                    <th sc-data-table-head columnId="role" [sortable]="true">Role</th>
                    <th sc-data-table-head columnId="status" [sortable]="true">Status</th>
                    <th sc-data-table-head columnId="createdAt" [sortable]="true">Created</th>
                    <th sc-data-table-head class="w-[80px]">Actions</th>
                  </tr>
                </thead>
                <tbody sc-data-table-body>
                  @for (user of paginatedData(); track user.id) {
                    <tr sc-data-table-row [selected]="rowSelection().has(user.id)">
                      <td sc-data-table-cell>
                        <input
                          type="checkbox"
                          class="size-4 rounded border-primary"
                          [checked]="rowSelection().has(user.id)"
                          (change)="toggleRowSelection(user.id)"
                        />
                      </td>
                      <td sc-data-table-cell>
                        <div class="flex items-center gap-3">
                          <span sc-avatar class="size-8">
                            <img sc-avatar-image [src]="user.avatar" [alt]="user.name" />
                            <span sc-avatar-fallback>{{ getInitials(user.name) }}</span>
                          </span>
                          <div>
                            <div class="font-medium">{{ user.name }}</div>
                            <div class="text-xs text-muted-foreground">{{ user.email }}</div>
                          </div>
                        </div>
                      </td>
                      <td sc-data-table-cell>
                        <span sc-badge [variant]="getRoleBadgeVariant(user.role)">
                          {{ user.role }}
                        </span>
                      </td>
                      <td sc-data-table-cell>
                        <div class="flex items-center gap-2">
                          <span
                            class="size-2 rounded-full"
                            [class]="getStatusDotClass(user.status)"
                          ></span>
                          <span class="capitalize">{{ user.status }}</span>
                        </div>
                      </td>
                      <td sc-data-table-cell>{{ formatDate(user.createdAt) }}</td>
                      <td sc-data-table-cell>
                        <div sc-dropdown-menu>
                          <button sc-dropdown-menu-trigger sc-button variant="ghost" size="icon">
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
                              aria-hidden="true"
                            >
                              <circle cx="12" cy="12" r="1" />
                              <circle cx="12" cy="5" r="1" />
                              <circle cx="12" cy="19" r="1" />
                            </svg>
                            <span class="sr-only">Open menu</span>
                          </button>
                          <div sc-dropdown-menu-content align="end">
                            <!-- View Details Sheet -->
                            <div sc-sheet>
                              <button sc-sheet-trigger sc-dropdown-menu-item>
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
                                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                  <circle cx="12" cy="12" r="3" />
                                </svg>
                                View Details
                              </button>
                              <div sc-sheet-content side="right" class="w-[400px] sm:max-w-none">
                                <div sc-sheet-header>
                                  <h2 sc-sheet-title>User Details</h2>
                                  <p sc-sheet-description>View and manage user information</p>
                                </div>
                                <div class="py-6 space-y-6">
                                  <div class="flex items-center gap-4">
                                    <span sc-avatar class="size-16">
                                      <img sc-avatar-image [src]="user.avatar" [alt]="user.name" />
                                      <span sc-avatar-fallback>{{ getInitials(user.name) }}</span>
                                    </span>
                                    <div>
                                      <h3 class="text-lg font-semibold">{{ user.name }}</h3>
                                      <p class="text-sm text-muted-foreground">{{ user.email }}</p>
                                    </div>
                                  </div>
                                  <div sc-separator></div>
                                  <div class="space-y-4">
                                    <div>
                                      <label class="text-sm font-medium text-muted-foreground"
                                        >Role</label
                                      >
                                      <p class="mt-1">{{ user.role }}</p>
                                    </div>
                                    <div>
                                      <label class="text-sm font-medium text-muted-foreground"
                                        >Status</label
                                      >
                                      <p class="mt-1 capitalize">{{ user.status }}</p>
                                    </div>
                                    <div>
                                      <label class="text-sm font-medium text-muted-foreground"
                                        >Created</label
                                      >
                                      <p class="mt-1">{{ formatDate(user.createdAt) }}</p>
                                    </div>
                                    <div>
                                      <label class="text-sm font-medium text-muted-foreground"
                                        >User ID</label
                                      >
                                      <p class="mt-1 font-mono text-sm">{{ user.id }}</p>
                                    </div>
                                  </div>
                                </div>
                                <div sc-sheet-footer>
                                  <button sc-sheet-close sc-button variant="outline">Close</button>
                                </div>
                              </div>
                            </div>

                            <!-- Edit User Dialog -->
                            <div sc-dialog>
                              <button sc-dialog-trigger sc-dropdown-menu-item>
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
                                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                                  <path d="m15 5 4 4" />
                                </svg>
                                Edit User
                              </button>
                              <div sc-dialog-content class="sm:max-w-[425px]">
                                <div sc-dialog-header>
                                  <h2 sc-dialog-title>Edit User</h2>
                                  <p sc-dialog-description>Update user information.</p>
                                </div>
                                <div class="grid gap-4 py-4">
                                  <div class="grid gap-2">
                                    <label sc-label>Full Name</label>
                                    <input sc-input [value]="user.name" />
                                  </div>
                                  <div class="grid gap-2">
                                    <label sc-label>Email</label>
                                    <input sc-input type="email" [value]="user.email" />
                                  </div>
                                  <div class="grid gap-2">
                                    <label sc-label>Role</label>
                                    <div sc-select [value]="user.role">
                                      <button sc-select-trigger>{{ user.role }}</button>
                                      <div sc-select-content>
                                        <div sc-select-item value="Admin">Admin</div>
                                        <div sc-select-item value="Editor">Editor</div>
                                        <div sc-select-item value="Viewer">Viewer</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="grid gap-2">
                                    <label sc-label>Status</label>
                                    <div sc-select [value]="user.status">
                                      <button sc-select-trigger class="capitalize">
                                        {{ user.status }}
                                      </button>
                                      <div sc-select-content>
                                        <div sc-select-item value="active">Active</div>
                                        <div sc-select-item value="inactive">Inactive</div>
                                        <div sc-select-item value="pending">Pending</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div sc-dialog-footer>
                                  <button sc-dialog-close sc-button variant="outline">
                                    Cancel
                                  </button>
                                  <button sc-dialog-close sc-button>Save Changes</button>
                                </div>
                              </div>
                            </div>

                            <div sc-dropdown-menu-separator></div>

                            <!-- Delete Confirmation -->
                            <div sc-alert-dialog>
                              <button
                                sc-alert-dialog-trigger
                                sc-dropdown-menu-item
                                class="text-destructive focus:text-destructive"
                              >
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
                                  <path d="M3 6h18" />
                                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                  <line x1="10" x2="10" y1="11" y2="17" />
                                  <line x1="14" x2="14" y1="11" y2="17" />
                                </svg>
                                Delete User
                              </button>
                              <div sc-alert-dialog-content>
                                <div sc-alert-dialog-header>
                                  <h2 sc-alert-dialog-title>Are you sure?</h2>
                                  <p sc-alert-dialog-description>
                                    This action cannot be undone. This will permanently delete the
                                    user account and remove all associated data.
                                  </p>
                                </div>
                                <div sc-alert-dialog-footer>
                                  <button sc-alert-dialog-cancel>Cancel</button>
                                  <button sc-alert-dialog-action (click)="deleteUser(user.id)">
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  } @empty {
                    <tr>
                      <td colspan="6" class="h-[300px]">
                        <sc-empty-state
                          title="No users found"
                          description="Try adjusting your search or add a new user."
                          [icon]="usersEmptyIcon"
                        />
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>

            <!-- Pagination -->
            <div
              sc-data-table-pagination
              [(pageSize)]="pageSize"
              [(currentPage)]="currentPage"
            ></div>
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
export default class UsersPage {
  readonly usersEmptyIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-muted-foreground/50"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;

  readonly mainNav = [
    {
      title: 'Dashboard',
      link: '/dashboard',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
    },
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
  ];

  readonly columns: ColumnDef<User>[] = [
    { id: 'name', header: 'Name', accessorKey: 'name', enableSorting: true },
    { id: 'role', header: 'Role', accessorKey: 'role', enableSorting: true },
    { id: 'status', header: 'Status', accessorKey: 'status', enableSorting: true },
    { id: 'createdAt', header: 'Created', accessorKey: 'createdAt', enableSorting: true },
  ];

  readonly users = signal<User[]>([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'active',
      avatar: 'https://i.pravatar.cc/150?u=john',
      createdAt: new Date('2024-01-15'),
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Editor',
      status: 'active',
      avatar: 'https://i.pravatar.cc/150?u=jane',
      createdAt: new Date('2024-02-20'),
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'Viewer',
      status: 'inactive',
      avatar: 'https://i.pravatar.cc/150?u=bob',
      createdAt: new Date('2024-01-10'),
    },
    {
      id: 4,
      name: 'Alice Brown',
      email: 'alice@example.com',
      role: 'Editor',
      status: 'pending',
      avatar: 'https://i.pravatar.cc/150?u=alice',
      createdAt: new Date('2024-03-05'),
    },
    {
      id: 5,
      name: 'Charlie Wilson',
      email: 'charlie@example.com',
      role: 'Admin',
      status: 'active',
      avatar: 'https://i.pravatar.cc/150?u=charlie',
      createdAt: new Date('2024-02-28'),
    },
    {
      id: 6,
      name: 'Diana Miller',
      email: 'diana@example.com',
      role: 'Viewer',
      status: 'active',
      avatar: 'https://i.pravatar.cc/150?u=diana',
      createdAt: new Date('2024-01-22'),
    },
    {
      id: 7,
      name: 'Edward Davis',
      email: 'edward@example.com',
      role: 'Editor',
      status: 'inactive',
      avatar: 'https://i.pravatar.cc/150?u=edward',
      createdAt: new Date('2024-03-12'),
    },
    {
      id: 8,
      name: 'Fiona Garcia',
      email: 'fiona@example.com',
      role: 'Viewer',
      status: 'pending',
      avatar: 'https://i.pravatar.cc/150?u=fiona',
      createdAt: new Date('2024-02-14'),
    },
    {
      id: 9,
      name: 'George Martinez',
      email: 'george@example.com',
      role: 'Admin',
      status: 'active',
      avatar: 'https://i.pravatar.cc/150?u=george',
      createdAt: new Date('2024-01-30'),
    },
    {
      id: 10,
      name: 'Hannah Lee',
      email: 'hannah@example.com',
      role: 'Editor',
      status: 'active',
      avatar: 'https://i.pravatar.cc/150?u=hannah',
      createdAt: new Date('2024-03-01'),
    },
  ]);

  readonly rowSelection = signal<Set<number>>(new Set());
  readonly pageSize = signal(5);
  readonly currentPage = signal(1);

  readonly newUser = {
    name: '',
    email: '',
    role: '' as 'Admin' | 'Editor' | 'Viewer' | '',
  };

  readonly paginatedData = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize();
    const end = start + this.pageSize();
    return this.users().slice(start, end);
  });

  isAllSelected(): boolean {
    const users = this.users();
    return users.length > 0 && this.rowSelection().size === users.length;
  }

  isSomeSelected(): boolean {
    const size = this.rowSelection().size;
    return size > 0 && size < this.users().length;
  }

  toggleAllSelection(): void {
    if (this.isAllSelected()) {
      this.rowSelection.set(new Set());
    } else {
      this.rowSelection.set(new Set(this.users().map((u) => u.id)));
    }
  }

  toggleRowSelection(id: number): void {
    const selection = new Set(this.rowSelection());
    if (selection.has(id)) {
      selection.delete(id);
    } else {
      selection.add(id);
    }
    this.rowSelection.set(selection);
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  }

  getRoleBadgeVariant(role: string): 'default' | 'secondary' | 'outline' {
    switch (role) {
      case 'Admin':
        return 'default';
      case 'Editor':
        return 'secondary';
      default:
        return 'outline';
    }
  }

  getStatusDotClass(status: string): string {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'inactive':
        return 'bg-gray-400';
      case 'pending':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-400';
    }
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  addUser(): void {
    if (this.newUser.name && this.newUser.email && this.newUser.role) {
      const newId = Math.max(...this.users().map((u) => u.id)) + 1;
      this.users.update((users) => [
        ...users,
        {
          id: newId,
          name: this.newUser.name,
          email: this.newUser.email,
          role: this.newUser.role as 'Admin' | 'Editor' | 'Viewer',
          status: 'pending' as const,
          avatar: `https://i.pravatar.cc/150?u=${this.newUser.email}`,
          createdAt: new Date(),
        },
      ]);
      this.newUser.name = '';
      this.newUser.email = '';
      this.newUser.role = '';
    }
  }

  deleteUser(id: number): void {
    this.users.update((users) => users.filter((u) => u.id !== id));
    this.rowSelection.update((selection) => {
      const newSelection = new Set(selection);
      newSelection.delete(id);
      return newSelection;
    });
  }
}
