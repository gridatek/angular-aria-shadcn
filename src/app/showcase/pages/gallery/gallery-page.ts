import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ScNavbar,
  ScNavbarBrand,
  ScNavbarContent,
  ScNavbarActions,
  ScNavbarLink,
  ScNavbarMobileTrigger,
  ScNavbarMobileContent,
  ScNavbarMobileLink,
  ScNavbarMobileOverlay,
} from '../../../blocks/navbar';
import { ScButton } from '../../../ui/button';
import { ScBadge } from '../../../ui/badge';
import {
  ScCard,
  ScCardHeader,
  ScCardTitle,
  ScCardDescription,
  ScCardContent,
} from '../../../ui/card';
import { ScInput } from '../../../ui/input';
import { ScLabel } from '../../../ui/label';
import { ScTextarea } from '../../../ui/textarea';
import { ScCheckbox } from '../../../ui/checkbox';
import { ScSwitch } from '../../../ui/switch';
import { ScSelect, ScSelectTrigger, ScSelectContent, ScSelectItem } from '../../../ui/select';
import { ScRadioGroup, ScRadioGroupItem } from '../../../ui/radio-group';
import { ScSlider } from '../../../ui/slider';
import { ScProgress } from '../../../ui/progress';
import { ScAvatar, ScAvatarImage, ScAvatarFallback } from '../../../ui/avatar';
import { ScAvatarGroup } from '../../../ui/avatar-group';
import { ScTabs, ScTabsList, ScTabsTrigger, ScTabsContent } from '../../../ui/tabs';
import {
  ScAccordion,
  ScAccordionItem,
  ScAccordionTrigger,
  ScAccordionContent,
} from '../../../ui/accordion';
import { ScSeparator } from '../../../ui/separator';
import { ScTooltip, ScTooltipTrigger, ScTooltipContent } from '../../../ui/tooltip';
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
import { ScAlert, ScAlertTitle, ScAlertDescription } from '../../../ui/alert';
import {
  ScTable,
  ScTableHeader,
  ScTableBody,
  ScTableRow,
  ScTableHead,
  ScTableCell,
} from '../../../ui/table';
import { ScSkeleton } from '../../../ui/skeleton';
import { ScSpinner } from '../../../ui/spinner';

@Component({
  selector: 'app-gallery-page',
  imports: [
    RouterLink,
    ScNavbar,
    ScNavbarBrand,
    ScNavbarContent,
    ScNavbarActions,
    ScNavbarLink,
    ScNavbarMobileTrigger,
    ScNavbarMobileContent,
    ScNavbarMobileLink,
    ScNavbarMobileOverlay,
    ScButton,
    ScBadge,
    ScCard,
    ScCardHeader,
    ScCardTitle,
    ScCardDescription,
    ScCardContent,
    ScInput,
    ScLabel,
    ScTextarea,
    ScCheckbox,
    ScSwitch,
    ScSelect,
    ScSelectTrigger,
    ScSelectContent,
    ScSelectItem,
    ScRadioGroup,
    ScRadioGroupItem,
    ScSlider,
    ScProgress,
    ScAvatar,
    ScAvatarImage,
    ScAvatarFallback,
    ScAvatarGroup,
    ScTabs,
    ScTabsList,
    ScTabsTrigger,
    ScTabsContent,
    ScAccordion,
    ScAccordionItem,
    ScAccordionTrigger,
    ScAccordionContent,
    ScSeparator,
    ScTooltip,
    ScTooltipTrigger,
    ScTooltipContent,
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
    ScAlert,
    ScAlertTitle,
    ScAlertDescription,
    ScTable,
    ScTableHeader,
    ScTableBody,
    ScTableRow,
    ScTableHead,
    ScTableCell,
    ScSkeleton,
    ScSpinner,
  ],
  template: `
    <div class="min-h-screen flex flex-col bg-background">
      <!-- Navbar -->
      <nav sc-navbar class="sticky top-0 z-50" [(mobileMenuOpen)]="mobileMenuOpen">
        <a sc-navbar-brand routerLink="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
          </svg>
          <span>SC Components</span>
        </a>

        <div sc-navbar-content>
          <a sc-navbar-link routerLink="/" [active]="false">Home</a>
          <a sc-navbar-link routerLink="/components" [active]="false">Components</a>
          <a sc-navbar-link routerLink="/gallery" [active]="true">Gallery</a>
        </div>

        <div sc-navbar-actions>
          <button sc-navbar-mobile-trigger></button>
          <a sc-button variant="outline" routerLink="/login" class="hidden md:inline-flex">
            Sign In
          </a>
        </div>

        <div sc-navbar-mobile-overlay></div>
        <div sc-navbar-mobile-content>
          <a sc-navbar-mobile-link routerLink="/" [active]="false">Home</a>
          <a sc-navbar-mobile-link routerLink="/components" [active]="false">Components</a>
          <a sc-navbar-mobile-link routerLink="/gallery" [active]="true">Gallery</a>
        </div>
      </nav>

      <!-- Main Content -->
      <main class="flex-1 py-8 px-4 md:px-6">
        <div class="max-w-7xl mx-auto space-y-12">
          <!-- Header -->
          <div class="text-center space-y-4">
            <span sc-badge variant="secondary">Kitchen Sink</span>
            <h1 class="text-4xl font-bold">Component Gallery</h1>
            <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive showcase of all major UI components in one place.
            </p>
          </div>

          <!-- Buttons Section -->
          <section class="space-y-6">
            <h2 class="text-2xl font-semibold">Buttons</h2>
            <div sc-card>
              <div sc-card-content class="pt-6 space-y-6">
                <div>
                  <h3 class="text-sm font-medium mb-3">Variants</h3>
                  <div class="flex flex-wrap gap-3">
                    <button sc-button>Default</button>
                    <button sc-button variant="secondary">Secondary</button>
                    <button sc-button variant="outline">Outline</button>
                    <button sc-button variant="ghost">Ghost</button>
                    <button sc-button variant="link">Link</button>
                    <button sc-button variant="destructive">Destructive</button>
                  </div>
                </div>
                <div>
                  <h3 class="text-sm font-medium mb-3">Sizes</h3>
                  <div class="flex flex-wrap items-center gap-3">
                    <button sc-button size="sm">Small</button>
                    <button sc-button>Default</button>
                    <button sc-button size="lg">Large</button>
                    <button sc-button size="icon">
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
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <h3 class="text-sm font-medium mb-3">States</h3>
                  <div class="flex flex-wrap gap-3">
                    <button sc-button disabled>Disabled</button>
                    <button sc-button>
                      <sc-spinner class="mr-2 h-4 w-4" />
                      Loading
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Badges Section -->
          <section class="space-y-6">
            <h2 class="text-2xl font-semibold">Badges</h2>
            <div sc-card>
              <div sc-card-content class="pt-6">
                <div class="flex flex-wrap gap-3">
                  <span sc-badge>Default</span>
                  <span sc-badge variant="secondary">Secondary</span>
                  <span sc-badge variant="outline">Outline</span>
                  <span sc-badge variant="destructive">Destructive</span>
                </div>
              </div>
            </div>
          </section>

          <!-- Form Controls Section -->
          <section class="space-y-6">
            <h2 class="text-2xl font-semibold">Form Controls</h2>
            <div class="grid gap-6 md:grid-cols-2">
              <!-- Input -->
              <div sc-card>
                <div sc-card-header>
                  <h3 sc-card-title>Input</h3>
                </div>
                <div sc-card-content class="space-y-4">
                  <div class="space-y-2">
                    <label sc-label for="default">Default</label>
                    <input sc-input id="default" placeholder="Enter text..." />
                  </div>
                  <div class="space-y-2">
                    <label sc-label for="disabled">Disabled</label>
                    <input sc-input id="disabled" placeholder="Disabled" disabled />
                  </div>
                </div>
              </div>

              <!-- Textarea -->
              <div sc-card>
                <div sc-card-header>
                  <h3 sc-card-title>Textarea</h3>
                </div>
                <div sc-card-content>
                  <div class="space-y-2">
                    <label sc-label for="textarea">Message</label>
                    <textarea
                      sc-textarea
                      id="textarea"
                      placeholder="Type your message here..."
                      rows="3"
                    ></textarea>
                  </div>
                </div>
              </div>

              <!-- Checkbox & Switch -->
              <div sc-card>
                <div sc-card-header>
                  <h3 sc-card-title>Checkbox & Switch</h3>
                </div>
                <div sc-card-content class="space-y-4">
                  <div class="flex items-center space-x-2">
                    <input sc-checkbox id="checkbox1" />
                    <label for="checkbox1" class="text-sm cursor-pointer">Accept terms</label>
                  </div>
                  <div class="flex items-center space-x-2">
                    <input sc-checkbox id="checkbox2" checked />
                    <label for="checkbox2" class="text-sm cursor-pointer">Checked</label>
                  </div>
                  <div class="flex items-center space-x-2">
                    <sc-switch [(checked)]="switchValue" />
                    <span class="text-sm">Enable notifications</span>
                  </div>
                </div>
              </div>

              <!-- Select -->
              <div sc-card>
                <div sc-card-header>
                  <h3 sc-card-title>Select</h3>
                </div>
                <div sc-card-content>
                  <div class="space-y-2">
                    <label sc-label>Choose an option</label>
                    <div sc-select [(value)]="selectValue">
                      <button sc-select-trigger class="w-full">
                        {{ selectValue || 'Select...' }}
                      </button>
                      <div sc-select-content>
                        <div sc-select-item value="Option 1">Option 1</div>
                        <div sc-select-item value="Option 2">Option 2</div>
                        <div sc-select-item value="Option 3">Option 3</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Radio Group -->
              <div sc-card>
                <div sc-card-header>
                  <h3 sc-card-title>Radio Group</h3>
                </div>
                <div sc-card-content>
                  <sc-radio-group [(value)]="radioValue" class="space-y-2">
                    <div class="flex items-center space-x-2">
                      <input sc-radio-group-item value="option1" id="r1" />
                      <label for="r1" class="text-sm cursor-pointer">Option 1</label>
                    </div>
                    <div class="flex items-center space-x-2">
                      <input sc-radio-group-item value="option2" id="r2" />
                      <label for="r2" class="text-sm cursor-pointer">Option 2</label>
                    </div>
                    <div class="flex items-center space-x-2">
                      <input sc-radio-group-item value="option3" id="r3" />
                      <label for="r3" class="text-sm cursor-pointer">Option 3</label>
                    </div>
                  </sc-radio-group>
                </div>
              </div>

              <!-- Slider -->
              <div sc-card>
                <div sc-card-header>
                  <h3 sc-card-title>Slider</h3>
                </div>
                <div sc-card-content class="space-y-4">
                  <div class="space-y-2">
                    <label sc-label>Volume: {{ sliderValue }}</label>
                    <sc-slider [(value)]="sliderValue" [max]="100" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Progress & Loading Section -->
          <section class="space-y-6">
            <h2 class="text-2xl font-semibold">Progress & Loading</h2>
            <div class="grid gap-6 md:grid-cols-2">
              <div sc-card>
                <div sc-card-header>
                  <h3 sc-card-title>Progress</h3>
                </div>
                <div sc-card-content class="space-y-4">
                  <sc-progress [value]="33" />
                  <sc-progress [value]="66" />
                  <sc-progress [value]="100" />
                </div>
              </div>
              <div sc-card>
                <div sc-card-header>
                  <h3 sc-card-title>Skeleton</h3>
                </div>
                <div sc-card-content>
                  <div class="flex items-center space-x-4">
                    <sc-skeleton class="h-12 w-12 rounded-full" />
                    <div class="space-y-2">
                      <sc-skeleton class="h-4 w-[250px]" />
                      <sc-skeleton class="h-4 w-[200px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Avatars Section -->
          <section class="space-y-6">
            <h2 class="text-2xl font-semibold">Avatars</h2>
            <div sc-card>
              <div sc-card-content class="pt-6 space-y-6">
                <div>
                  <h3 class="text-sm font-medium mb-3">Sizes</h3>
                  <div class="flex items-center gap-4">
                    <span sc-avatar class="size-8">
                      <img sc-avatar-image src="https://i.pravatar.cc/150?u=1" alt="User" />
                      <span sc-avatar-fallback>SM</span>
                    </span>
                    <span sc-avatar>
                      <img sc-avatar-image src="https://i.pravatar.cc/150?u=2" alt="User" />
                      <span sc-avatar-fallback>MD</span>
                    </span>
                    <span sc-avatar class="size-14">
                      <img sc-avatar-image src="https://i.pravatar.cc/150?u=3" alt="User" />
                      <span sc-avatar-fallback>LG</span>
                    </span>
                  </div>
                </div>
                <div>
                  <h3 class="text-sm font-medium mb-3">Avatar Group</h3>
                  <sc-avatar-group [max]="4">
                    @for (i of [1, 2, 3, 4, 5, 6]; track i) {
                      <span sc-avatar>
                        <img
                          sc-avatar-image
                          [src]="'https://i.pravatar.cc/150?u=user' + i"
                          alt="User"
                        />
                        <span sc-avatar-fallback>U{{ i }}</span>
                      </span>
                    }
                  </sc-avatar-group>
                </div>
              </div>
            </div>
          </section>

          <!-- Tabs & Accordion Section -->
          <section class="space-y-6">
            <h2 class="text-2xl font-semibold">Tabs & Accordion</h2>
            <div class="grid gap-6 md:grid-cols-2">
              <div sc-card>
                <div sc-card-header>
                  <h3 sc-card-title>Tabs</h3>
                </div>
                <div sc-card-content>
                  <sc-tabs value="tab1">
                    <div sc-tabs-list>
                      <button sc-tabs-trigger value="tab1">Account</button>
                      <button sc-tabs-trigger value="tab2">Password</button>
                      <button sc-tabs-trigger value="tab3">Settings</button>
                    </div>
                    <div sc-tabs-content value="tab1" class="p-4">
                      <p class="text-sm text-muted-foreground">Account settings content.</p>
                    </div>
                    <div sc-tabs-content value="tab2" class="p-4">
                      <p class="text-sm text-muted-foreground">Password settings content.</p>
                    </div>
                    <div sc-tabs-content value="tab3" class="p-4">
                      <p class="text-sm text-muted-foreground">General settings content.</p>
                    </div>
                  </sc-tabs>
                </div>
              </div>

              <div sc-card>
                <div sc-card-header>
                  <h3 sc-card-title>Accordion</h3>
                </div>
                <div sc-card-content>
                  <div sc-accordion type="single" collapsible>
                    <div sc-accordion-item value="item-1">
                      <button sc-accordion-trigger>Is it accessible?</button>
                      <div sc-accordion-content>
                        <p>Yes. It adheres to the WAI-ARIA design pattern.</p>
                      </div>
                    </div>
                    <div sc-accordion-item value="item-2">
                      <button sc-accordion-trigger>Is it styled?</button>
                      <div sc-accordion-content>
                        <p>Yes. It comes with default styles using Tailwind CSS.</p>
                      </div>
                    </div>
                    <div sc-accordion-item value="item-3">
                      <button sc-accordion-trigger>Is it animated?</button>
                      <div sc-accordion-content>
                        <p>Yes. It's animated by default with smooth transitions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Alerts Section -->
          <section class="space-y-6">
            <h2 class="text-2xl font-semibold">Alerts</h2>
            <div class="space-y-4">
              <div sc-alert>
                <h5 sc-alert-title>Default Alert</h5>
                <p sc-alert-description>This is a default alert message.</p>
              </div>
              <div sc-alert variant="destructive">
                <h5 sc-alert-title>Error</h5>
                <p sc-alert-description>Something went wrong. Please try again.</p>
              </div>
            </div>
          </section>

          <!-- Dialogs Section -->
          <section class="space-y-6">
            <h2 class="text-2xl font-semibold">Dialogs & Overlays</h2>
            <div sc-card>
              <div sc-card-content class="pt-6">
                <div class="flex flex-wrap gap-4">
                  <!-- Dialog -->
                  <div sc-dialog>
                    <button sc-dialog-trigger sc-button variant="outline">Open Dialog</button>
                    <div sc-dialog-content>
                      <div sc-dialog-header>
                        <h2 sc-dialog-title>Dialog Title</h2>
                        <p sc-dialog-description>This is a dialog description.</p>
                      </div>
                      <p class="py-4">Dialog content goes here.</p>
                      <div sc-dialog-footer>
                        <button sc-dialog-close sc-button variant="outline">Cancel</button>
                        <button sc-dialog-close sc-button>Continue</button>
                      </div>
                    </div>
                  </div>

                  <!-- Sheet -->
                  <div sc-sheet>
                    <button sc-sheet-trigger sc-button variant="outline">Open Sheet</button>
                    <div sc-sheet-content side="right">
                      <div sc-sheet-header>
                        <h2 sc-sheet-title>Sheet Title</h2>
                        <p sc-sheet-description>This is a sheet panel.</p>
                      </div>
                      <div class="py-4">
                        <p>Sheet content goes here.</p>
                      </div>
                      <button sc-sheet-close sc-button class="w-full">Close</button>
                    </div>
                  </div>

                  <!-- Alert Dialog -->
                  <div sc-alert-dialog>
                    <button sc-alert-dialog-trigger sc-button variant="destructive">
                      Delete Item
                    </button>
                    <div sc-alert-dialog-content>
                      <div sc-alert-dialog-header>
                        <h2 sc-alert-dialog-title>Are you sure?</h2>
                        <p sc-alert-dialog-description>This action cannot be undone.</p>
                      </div>
                      <div sc-alert-dialog-footer>
                        <button sc-alert-dialog-cancel>Cancel</button>
                        <button sc-alert-dialog-action>Delete</button>
                      </div>
                    </div>
                  </div>

                  <!-- Tooltip -->
                  <sc-tooltip>
                    <button sc-tooltip-trigger sc-button variant="outline">Hover me</button>
                    <div sc-tooltip-content>This is a tooltip</div>
                  </sc-tooltip>
                </div>
              </div>
            </div>
          </section>

          <!-- Table Section -->
          <section class="space-y-6">
            <h2 class="text-2xl font-semibold">Table</h2>
            <div sc-card>
              <div sc-card-content class="pt-6">
                <table sc-table>
                  <thead sc-table-header>
                    <tr sc-table-row>
                      <th sc-table-head>Name</th>
                      <th sc-table-head>Email</th>
                      <th sc-table-head>Role</th>
                      <th sc-table-head class="text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody sc-table-body>
                    @for (user of sampleUsers; track user.email) {
                      <tr sc-table-row>
                        <td sc-table-cell class="font-medium">{{ user.name }}</td>
                        <td sc-table-cell>{{ user.email }}</td>
                        <td sc-table-cell>{{ user.role }}</td>
                        <td sc-table-cell class="text-right">
                          <span
                            sc-badge
                            [variant]="user.status === 'Active' ? 'default' : 'secondary'"
                          >
                            {{ user.status }}
                          </span>
                        </td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <!-- Explore More -->
          <section class="text-center py-12">
            <h2 class="text-2xl font-semibold mb-4">Want to see more?</h2>
            <p class="text-muted-foreground mb-6">
              Explore our complete collection of 150+ components.
            </p>
            <a sc-button size="lg" routerLink="/components">
              Browse All Components
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
                class="ml-2"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </section>
        </div>
      </main>

      <!-- Footer -->
      <footer class="border-t py-6 px-4 md:px-6">
        <div
          class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
        >
          <p>Built with Angular ARIA and Tailwind CSS.</p>
          <div class="flex gap-4">
            <a routerLink="/" class="hover:text-foreground">Home</a>
            <a routerLink="/components" class="hover:text-foreground">Components</a>
            <a routerLink="/dashboard" class="hover:text-foreground">Dashboard</a>
          </div>
        </div>
      </footer>
    </div>
  `,
  host: {
    class: 'block',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GalleryPage {
  readonly mobileMenuOpen = signal(false);
  readonly switchValue = signal(true);
  readonly selectValue = signal('');
  readonly radioValue = signal('option1');
  readonly sliderValue = signal(50);

  readonly sampleUsers = [
    { name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
    { name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive' },
    { name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active' },
  ];
}
