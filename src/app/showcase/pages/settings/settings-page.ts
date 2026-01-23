import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
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
import { ScTabs, ScTabsList, ScTabsTrigger, ScTabsContent } from '../../../ui/tabs';
import {
  ScCard,
  ScCardHeader,
  ScCardTitle,
  ScCardDescription,
  ScCardContent,
  ScCardFooter,
} from '../../../ui/card';
import { ScButton } from '../../../ui/button';
import { ScInput } from '../../../ui/input';
import { ScLabel } from '../../../ui/label';
import { ScTextarea } from '../../../ui/textarea';
import { ScSwitch } from '../../../ui/switch';
import { ScCheckbox } from '../../../ui/checkbox';
import { ScRadioGroup, ScRadioGroupItem } from '../../../ui/radio-group';
import { ScSelect, ScSelectTrigger, ScSelectContent, ScSelectItem } from '../../../ui/select';
import { ScSlider } from '../../../ui/slider';
import { ScAvatar, ScAvatarImage, ScAvatarFallback } from '../../../ui/avatar';
import { ScSeparator } from '../../../ui/separator';
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
import { ToastService } from '../../../ui/toast/toast.service';

@Component({
  selector: 'app-settings-page',
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
    ScTabs,
    ScTabsList,
    ScTabsTrigger,
    ScTabsContent,
    ScCard,
    ScCardHeader,
    ScCardTitle,
    ScCardDescription,
    ScCardContent,
    ScCardFooter,
    ScButton,
    ScInput,
    ScLabel,
    ScTextarea,
    ScSwitch,
    ScCheckbox,
    ScRadioGroup,
    ScRadioGroupItem,
    ScSelect,
    ScSelectTrigger,
    ScSelectContent,
    ScSelectItem,
    ScSlider,
    ScAvatar,
    ScAvatarImage,
    ScAvatarFallback,
    ScSeparator,
    ScAlertDialog,
    ScAlertDialogTrigger,
    ScAlertDialogContent,
    ScAlertDialogHeader,
    ScAlertDialogTitle,
    ScAlertDialogDescription,
    ScAlertDialogFooter,
    ScAlertDialogCancel,
    ScAlertDialogAction,
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
              <span class="text-xs text-muted-foreground">Settings</span>
            </div>
          </a>
        </div>

        <div sc-sidebar-content>
          <div sc-sidebar-group>
            <div sc-sidebar-group-label>Navigation</div>
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
            <h1 class="text-lg font-semibold">Settings</h1>
          </div>
        </header>

        <main class="flex-1 p-4 lg:p-6">
          <div class="max-w-4xl mx-auto space-y-6">
            <div>
              <h2 class="text-2xl font-bold tracking-tight">Settings</h2>
              <p class="text-muted-foreground">Manage your account settings and preferences.</p>
            </div>

            <div sc-tabs [(value)]="activeTab" class="space-y-6">
              <div sc-tabs-list class="grid w-full grid-cols-4">
                <button sc-tabs-trigger value="profile">Profile</button>
                <button sc-tabs-trigger value="account">Account</button>
                <button sc-tabs-trigger value="notifications">Notifications</button>
                <button sc-tabs-trigger value="appearance">Appearance</button>
              </div>

              <!-- Profile Tab -->
              <div sc-tabs-content value="profile" class="space-y-6">
                <div sc-card>
                  <div sc-card-header>
                    <h3 sc-card-title>Profile Information</h3>
                    <p sc-card-description>Update your profile information and profile picture.</p>
                  </div>
                  <div sc-card-content class="space-y-6">
                    <!-- Avatar -->
                    <div class="flex items-center gap-4">
                      <span sc-avatar class="size-20">
                        <img
                          sc-avatar-image
                          src="https://i.pravatar.cc/150?u=admin"
                          alt="Profile"
                        />
                        <span sc-avatar-fallback>AD</span>
                      </span>
                      <div class="space-y-1">
                        <button sc-button variant="outline" size="sm">Change Photo</button>
                        <p class="text-xs text-muted-foreground">JPG, GIF or PNG. 1MB max.</p>
                      </div>
                    </div>

                    <div sc-separator></div>

                    <!-- Name Fields -->
                    <div class="grid gap-4 sm:grid-cols-2">
                      <div class="space-y-2">
                        <label sc-label for="firstName">First Name</label>
                        <input sc-input id="firstName" [(ngModel)]="profile.firstName" />
                      </div>
                      <div class="space-y-2">
                        <label sc-label for="lastName">Last Name</label>
                        <input sc-input id="lastName" [(ngModel)]="profile.lastName" />
                      </div>
                    </div>

                    <!-- Email -->
                    <div class="space-y-2">
                      <label sc-label for="email">Email</label>
                      <input sc-input id="email" type="email" [(ngModel)]="profile.email" />
                    </div>

                    <!-- Bio -->
                    <div class="space-y-2">
                      <label sc-label for="bio">Bio</label>
                      <textarea
                        sc-textarea
                        id="bio"
                        [(ngModel)]="profile.bio"
                        rows="3"
                        placeholder="Tell us a little about yourself..."
                      ></textarea>
                      <p class="text-xs text-muted-foreground">
                        Brief description for your profile. URLs are hyperlinked.
                      </p>
                    </div>
                  </div>
                  <div sc-card-footer class="flex justify-end">
                    <button sc-button (click)="saveProfile()">Save Changes</button>
                  </div>
                </div>
              </div>

              <!-- Account Tab -->
              <div sc-tabs-content value="account" class="space-y-6">
                <!-- Password -->
                <div sc-card>
                  <div sc-card-header>
                    <h3 sc-card-title>Change Password</h3>
                    <p sc-card-description>Update your password to keep your account secure.</p>
                  </div>
                  <div sc-card-content class="space-y-4">
                    <div class="space-y-2">
                      <label sc-label for="currentPassword">Current Password</label>
                      <input sc-input id="currentPassword" type="password" />
                    </div>
                    <div class="space-y-2">
                      <label sc-label for="newPassword">New Password</label>
                      <input sc-input id="newPassword" type="password" />
                    </div>
                    <div class="space-y-2">
                      <label sc-label for="confirmPassword">Confirm Password</label>
                      <input sc-input id="confirmPassword" type="password" />
                    </div>
                  </div>
                  <div sc-card-footer class="flex justify-end">
                    <button sc-button>Update Password</button>
                  </div>
                </div>

                <!-- Two-Factor -->
                <div sc-card>
                  <div sc-card-header>
                    <h3 sc-card-title>Two-Factor Authentication</h3>
                    <p sc-card-description>Add an extra layer of security to your account.</p>
                  </div>
                  <div sc-card-content>
                    <div class="flex items-center justify-between">
                      <div class="space-y-0.5">
                        <div class="font-medium">Authenticator App</div>
                        <div class="text-sm text-muted-foreground">
                          Use an authenticator app to generate codes.
                        </div>
                      </div>
                      <button sc-switch [(checked)]="twoFactorEnabled"></button>
                    </div>
                  </div>
                </div>

                <!-- Danger Zone -->
                <div sc-card class="border-destructive">
                  <div sc-card-header>
                    <h3 sc-card-title class="text-destructive">Danger Zone</h3>
                    <p sc-card-description>Irreversible and destructive actions.</p>
                  </div>
                  <div sc-card-content>
                    <div class="flex items-center justify-between">
                      <div class="space-y-0.5">
                        <div class="font-medium">Delete Account</div>
                        <div class="text-sm text-muted-foreground">
                          Permanently delete your account and all data.
                        </div>
                      </div>
                      <div sc-alert-dialog>
                        <button sc-alert-dialog-trigger sc-button variant="destructive" size="sm">
                          Delete Account
                        </button>
                        <div sc-alert-dialog-content>
                          <div sc-alert-dialog-header>
                            <h2 sc-alert-dialog-title>Are you absolutely sure?</h2>
                            <p sc-alert-dialog-description>
                              This action cannot be undone. This will permanently delete your
                              account and remove all your data from our servers.
                            </p>
                          </div>
                          <div sc-alert-dialog-footer>
                            <button sc-alert-dialog-cancel>Cancel</button>
                            <button sc-alert-dialog-action>Delete Account</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Notifications Tab -->
              <div sc-tabs-content value="notifications" class="space-y-6">
                <div sc-card>
                  <div sc-card-header>
                    <h3 sc-card-title>Email Notifications</h3>
                    <p sc-card-description>Choose what emails you want to receive.</p>
                  </div>
                  <div sc-card-content class="space-y-4">
                    @for (notification of emailNotifications; track notification.id) {
                      <div class="flex items-center justify-between">
                        <div class="space-y-0.5">
                          <div class="font-medium">{{ notification.title }}</div>
                          <div class="text-sm text-muted-foreground">
                            {{ notification.description }}
                          </div>
                        </div>
                        <button sc-switch [(checked)]="notification.enabled"></button>
                      </div>
                    }
                  </div>
                </div>

                <div sc-card>
                  <div sc-card-header>
                    <h3 sc-card-title>Push Notifications</h3>
                    <p sc-card-description>Configure push notification preferences.</p>
                  </div>
                  <div sc-card-content class="space-y-4">
                    <div sc-radio-group [(value)]="pushNotificationSetting" class="space-y-3">
                      <div class="flex items-center space-x-3">
                        <input sc-radio-group-item value="all" id="push-all" />
                        <label sc-label for="push-all" class="font-normal cursor-pointer">
                          All notifications
                        </label>
                      </div>
                      <div class="flex items-center space-x-3">
                        <input sc-radio-group-item value="important" id="push-important" />
                        <label sc-label for="push-important" class="font-normal cursor-pointer">
                          Important notifications only
                        </label>
                      </div>
                      <div class="flex items-center space-x-3">
                        <input sc-radio-group-item value="none" id="push-none" />
                        <label sc-label for="push-none" class="font-normal cursor-pointer">
                          No push notifications
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Appearance Tab -->
              <div sc-tabs-content value="appearance" class="space-y-6">
                <div sc-card>
                  <div sc-card-header>
                    <h3 sc-card-title>Theme</h3>
                    <p sc-card-description>Select your preferred theme.</p>
                  </div>
                  <div sc-card-content>
                    <div sc-radio-group [(value)]="theme" class="grid grid-cols-3 gap-4">
                      @for (option of themeOptions; track option.value) {
                        <label
                          class="cursor-pointer [&:has([data-state=checked])>div]:border-primary"
                        >
                          <input sc-radio-group-item [value]="option.value" class="sr-only" />
                          <div
                            class="flex flex-col items-center gap-2 rounded-lg border-2 border-muted p-4 hover:border-accent"
                          >
                            <span [innerHTML]="option.icon" class="text-muted-foreground"></span>
                            <span class="text-sm font-medium">{{ option.label }}</span>
                          </div>
                        </label>
                      }
                    </div>
                  </div>
                </div>

                <div sc-card>
                  <div sc-card-header>
                    <h3 sc-card-title>Font Size</h3>
                    <p sc-card-description>Adjust the base font size.</p>
                  </div>
                  <div sc-card-content class="space-y-4">
                    <div class="flex items-center gap-4">
                      <span class="text-sm">A</span>
                      <div
                        sc-slider
                        [(value)]="fontSize"
                        [min]="12"
                        [max]="20"
                        [step]="1"
                        class="flex-1"
                      ></div>
                      <span class="text-lg">A</span>
                    </div>
                    <p class="text-sm text-muted-foreground">Current: {{ fontSize() }}px</p>
                  </div>
                </div>

                <div sc-card>
                  <div sc-card-header>
                    <h3 sc-card-title>Language</h3>
                    <p sc-card-description>Select your preferred language.</p>
                  </div>
                  <div sc-card-content>
                    <div sc-select [(value)]="language">
                      <button sc-select-trigger class="w-full sm:w-[240px]">
                        {{ getLanguageLabel(language()) }}
                      </button>
                      <div sc-select-content>
                        @for (lang of languages; track lang.value) {
                          <div sc-select-item [value]="lang.value">{{ lang.label }}</div>
                        }
                      </div>
                    </div>
                  </div>
                </div>
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
export default class SettingsPage {
  private readonly toastService = inject(ToastService);

  readonly activeTab = signal('profile');
  readonly twoFactorEnabled = signal(false);
  readonly pushNotificationSetting = signal('important');
  readonly theme = signal('system');
  readonly fontSize = signal(16);
  readonly language = signal('en');

  readonly profile = {
    firstName: 'Admin',
    lastName: 'User',
    email: 'admin@example.com',
    bio: 'Software developer passionate about building great user experiences.',
  };

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

  readonly emailNotifications = [
    {
      id: 'marketing',
      title: 'Marketing emails',
      description: 'Receive emails about new products, features, and more.',
      enabled: signal(true),
    },
    {
      id: 'security',
      title: 'Security alerts',
      description: 'Receive alerts about your account security.',
      enabled: signal(true),
    },
    {
      id: 'updates',
      title: 'Product updates',
      description: 'Receive updates about product changes and improvements.',
      enabled: signal(false),
    },
    {
      id: 'newsletter',
      title: 'Newsletter',
      description: 'Receive our monthly newsletter with tips and tricks.',
      enabled: signal(true),
    },
  ];

  readonly themeOptions = [
    {
      value: 'light',
      label: 'Light',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
    },
    {
      value: 'dark',
      label: 'Dark',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
    },
    {
      value: 'system',
      label: 'System',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`,
    },
  ];

  readonly languages = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' },
    { value: 'ja', label: 'Japanese' },
    { value: 'zh', label: 'Chinese' },
  ];

  getLanguageLabel(value: string): string {
    return this.languages.find((l) => l.value === value)?.label ?? value;
  }

  saveProfile(): void {
    this.toastService.show({
      title: 'Profile updated',
      description: 'Your profile information has been saved.',
      variant: 'default',
    });
  }
}
