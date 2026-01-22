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
import {
  ScAccordion,
  ScAccordionItem,
  ScAccordionTrigger,
  ScAccordionContent,
} from '../../../ui/accordion';
import { ScSeparator } from '../../../ui/separator';
import { ScAvatar, ScAvatarImage, ScAvatarFallback } from '../../../ui/avatar';
import { ScAvatarGroup } from '../../../ui/avatar-group';

@Component({
  selector: 'app-landing-page',
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
    ScAccordion,
    ScAccordionItem,
    ScAccordionTrigger,
    ScAccordionContent,
    ScSeparator,
    ScAvatar,
    ScAvatarImage,
    ScAvatarFallback,
    ScAvatarGroup,
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
          <a sc-navbar-link routerLink="/" [active]="true">Home</a>
          <a sc-navbar-link routerLink="/components" [active]="false">Components</a>
          <a sc-navbar-link routerLink="/dashboard" [active]="false">Dashboard</a>
          <a sc-navbar-link routerLink="/gallery" [active]="false">Gallery</a>
        </div>

        <div sc-navbar-actions>
          <button sc-navbar-mobile-trigger></button>
          <a sc-button variant="ghost" routerLink="/login" class="hidden md:inline-flex">Sign In</a>
          <a sc-button routerLink="/register" class="hidden md:inline-flex">Get Started</a>
        </div>

        <div sc-navbar-mobile-overlay></div>

        <div sc-navbar-mobile-content>
          <a sc-navbar-mobile-link routerLink="/" [active]="true">Home</a>
          <a sc-navbar-mobile-link routerLink="/components" [active]="false">Components</a>
          <a sc-navbar-mobile-link routerLink="/dashboard" [active]="false">Dashboard</a>
          <a sc-navbar-mobile-link routerLink="/gallery" [active]="false">Gallery</a>
          <hr class="my-2 border-border" />
          <a sc-navbar-mobile-link routerLink="/login">Sign In</a>
          <a sc-button routerLink="/register" class="w-full mt-2">Get Started</a>
        </div>
      </nav>

      <!-- Main Content -->
      <main class="flex-1">
        <!-- Hero Section -->
        <section class="relative overflow-hidden py-20 md:py-32 px-4 md:px-6">
          <div
            class="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background"
          ></div>
          <div class="relative max-w-5xl mx-auto text-center space-y-8">
            <span sc-badge variant="secondary" class="px-4 py-1.5"> Built with Angular ARIA </span>

            <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Beautiful Components for
              <span class="text-primary">Modern Apps</span>
            </h1>

            <p class="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive collection of accessible, customizable UI components built with
              Angular and Tailwind CSS. Ship faster with production-ready components.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a sc-button size="lg" routerLink="/components">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="mr-2"
                  aria-hidden="true"
                >
                  <rect width="7" height="9" x="3" y="3" rx="1" />
                  <rect width="7" height="5" x="14" y="3" rx="1" />
                  <rect width="7" height="9" x="14" y="12" rx="1" />
                  <rect width="7" height="5" x="3" y="16" rx="1" />
                </svg>
                Browse Components
              </a>
              <a
                sc-button
                variant="outline"
                size="lg"
                href="https://github.com/anthropics/angular-aria-shadcn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="mr-2"
                  aria-hidden="true"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                View on GitHub
              </a>
            </div>

            <!-- Social Proof -->
            <div class="flex flex-col items-center gap-4 pt-8">
              <sc-avatar-group [max]="5" size="md">
                @for (avatar of avatars; track avatar.name) {
                  <span sc-avatar>
                    <img sc-avatar-image [src]="avatar.image" [alt]="avatar.name" />
                    <span sc-avatar-fallback>{{ avatar.fallback }}</span>
                  </span>
                }
              </sc-avatar-group>
              <p class="text-sm text-muted-foreground">
                Trusted by <span class="font-semibold text-foreground">2,000+</span> developers
              </p>
            </div>
          </div>
        </section>

        <div sc-separator></div>

        <!-- Features Section -->
        <section class="py-20 px-4 md:px-6">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
              <span sc-badge variant="outline" class="mb-4">Features</span>
              <h2 class="text-3xl md:text-4xl font-bold mb-4">Everything you need to build</h2>
              <p class="text-muted-foreground max-w-2xl mx-auto">
                Our components are designed with accessibility, customization, and developer
                experience in mind.
              </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              @for (feature of features; track feature.title) {
                <div sc-card>
                  <div sc-card-header>
                    <div
                      class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2"
                    >
                      <span [innerHTML]="feature.icon" class="text-primary"></span>
                    </div>
                    <h3 sc-card-title>{{ feature.title }}</h3>
                    <p sc-card-description>{{ feature.description }}</p>
                  </div>
                </div>
              }
            </div>
          </div>
        </section>

        <div sc-separator></div>

        <!-- Component Preview Section -->
        <section class="py-20 px-4 md:px-6 bg-muted/30">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
              <span sc-badge variant="outline" class="mb-4">Components</span>
              <h2 class="text-3xl md:text-4xl font-bold mb-4">150+ Production-Ready Components</h2>
              <p class="text-muted-foreground max-w-2xl mx-auto">
                From simple buttons to complex data tables. Everything you need to build modern web
                applications.
              </p>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              @for (category of categories; track category.name) {
                <a
                  sc-button
                  variant="outline"
                  class="h-auto p-4 flex-col items-start justify-start text-left"
                  [routerLink]="category.link"
                >
                  <span class="text-2xl mb-2" [innerHTML]="category.icon"></span>
                  <span class="font-semibold">{{ category.name }}</span>
                  <span class="text-xs text-muted-foreground">{{ category.count }} components</span>
                </a>
              }
            </div>

            <div class="text-center mt-8">
              <a sc-button variant="outline" routerLink="/components">
                View All Components
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
            </div>
          </div>
        </section>

        <div sc-separator></div>

        <!-- FAQ Section -->
        <section class="py-20 px-4 md:px-6">
          <div class="max-w-3xl mx-auto">
            <div class="text-center mb-12">
              <span sc-badge variant="outline" class="mb-4">FAQ</span>
              <h2 class="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>

            <div sc-accordion type="single" collapsible class="w-full">
              @for (faq of faqs; track faq.question; let i = $index) {
                <div sc-accordion-item [value]="'item-' + i">
                  <button sc-accordion-trigger>{{ faq.question }}</button>
                  <div sc-accordion-content>
                    <p>{{ faq.answer }}</p>
                  </div>
                </div>
              }
            </div>
          </div>
        </section>

        <div sc-separator></div>

        <!-- CTA Section -->
        <section class="py-20 px-4 md:px-6 bg-primary text-primary-foreground">
          <div class="max-w-4xl mx-auto text-center space-y-6">
            <h2 class="text-3xl md:text-4xl font-bold">Ready to get started?</h2>
            <p class="text-primary-foreground/80 max-w-xl mx-auto">
              Join thousands of developers building with our component library. Start building
              beautiful, accessible applications today.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a sc-button size="lg" variant="secondary" routerLink="/register">
                Get Started Free
              </a>
              <a
                sc-button
                size="lg"
                variant="outline"
                class="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                routerLink="/components"
              >
                Browse Components
              </a>
            </div>
          </div>
        </section>
      </main>

      <!-- Footer -->
      <footer class="border-t py-12 px-4 md:px-6">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-4 gap-8">
            <div class="md:col-span-1">
              <div class="flex items-center gap-2 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
                <span class="font-semibold">SC Components</span>
              </div>
              <p class="text-sm text-muted-foreground">
                Beautiful, accessible components built with Angular ARIA and Tailwind CSS.
              </p>
            </div>

            <div>
              <h4 class="font-semibold mb-4">Product</h4>
              <ul class="space-y-2 text-sm text-muted-foreground">
                <li><a routerLink="/components" class="hover:text-foreground">Components</a></li>
                <li><a routerLink="/dashboard" class="hover:text-foreground">Dashboard</a></li>
                <li><a routerLink="/gallery" class="hover:text-foreground">Gallery</a></li>
              </ul>
            </div>

            <div>
              <h4 class="font-semibold mb-4">Examples</h4>
              <ul class="space-y-2 text-sm text-muted-foreground">
                <li><a routerLink="/login" class="hover:text-foreground">Login</a></li>
                <li><a routerLink="/register" class="hover:text-foreground">Register</a></li>
                <li><a routerLink="/settings" class="hover:text-foreground">Settings</a></li>
                <li><a routerLink="/users" class="hover:text-foreground">Users</a></li>
              </ul>
            </div>

            <div>
              <h4 class="font-semibold mb-4">Resources</h4>
              <ul class="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://github.com/anthropics/angular-aria-shadcn"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hover:text-foreground"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://angular.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hover:text-foreground"
                  >
                    Angular
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hover:text-foreground"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div sc-separator class="my-8"></div>

          <div
            class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
          >
            <p>Built with Angular ARIA and Tailwind CSS. Open source.</p>
            <p>MIT License</p>
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
export default class LandingPage {
  readonly mobileMenuOpen = signal(false);

  readonly avatars = [
    { name: 'Alex', image: 'https://i.pravatar.cc/150?u=alex', fallback: 'AL' },
    { name: 'Sarah', image: 'https://i.pravatar.cc/150?u=sarah', fallback: 'SA' },
    { name: 'Mike', image: 'https://i.pravatar.cc/150?u=mike', fallback: 'MI' },
    { name: 'Emma', image: 'https://i.pravatar.cc/150?u=emma', fallback: 'EM' },
    { name: 'John', image: 'https://i.pravatar.cc/150?u=john', fallback: 'JO' },
    { name: 'Lisa', image: 'https://i.pravatar.cc/150?u=lisa', fallback: 'LI' },
  ];

  readonly features = [
    {
      title: 'Accessible by Default',
      description:
        'Built on Angular ARIA primitives with full keyboard navigation, screen reader support, and WCAG compliance.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 10-4 4-4-4"/></svg>`,
    },
    {
      title: 'Fully Customizable',
      description:
        'Every component can be styled with Tailwind CSS. Use CSS variables for theming.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
    },
    {
      title: 'TypeScript First',
      description:
        'Written in TypeScript with full type definitions for excellent IDE support and type safety.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    },
    {
      title: 'Modern Angular',
      description:
        'Built with Angular signals, standalone components, and the latest Angular best practices.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    },
    {
      title: 'Dark Mode Ready',
      description: 'All components support light and dark modes out of the box with CSS variables.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
    },
    {
      title: 'Copy & Paste',
      description:
        'No npm packages to install. Copy the components you need directly into your project.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
    },
  ];

  readonly categories = [
    {
      name: 'Form Controls',
      count: 25,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M7 12h10"/><path d="M7 17h10"/></svg>`,
      link: '/components/input',
    },
    {
      name: 'Data Display',
      count: 20,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="3" x2="21" y1="15" y2="15"/><line x1="9" x2="9" y1="9" y2="21"/></svg>`,
      link: '/components/table',
    },
    {
      name: 'Overlays',
      count: 15,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/></svg>`,
      link: '/components/dialog',
    },
    {
      name: 'Navigation',
      count: 12,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>`,
      link: '/components/tabs',
    },
    {
      name: 'Feedback',
      count: 10,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>`,
      link: '/components/toast',
    },
    {
      name: 'Media',
      count: 15,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`,
      link: '/components/carousel',
    },
    {
      name: 'Charts',
      count: 8,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>`,
      link: '/components/chart',
    },
    {
      name: 'Layout',
      count: 10,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`,
      link: '/components/sidebar',
    },
  ];

  readonly faqs = [
    {
      question: 'Is this library free to use?',
      answer:
        'Yes, all components are open source and free to use in both personal and commercial projects under the MIT license.',
    },
    {
      question: 'Do I need to install any npm packages?',
      answer:
        'No, you can copy and paste the components directly into your project. The only dependencies are Angular, Tailwind CSS, and Angular ARIA.',
    },
    {
      question: 'Are the components accessible?',
      answer:
        'Yes, all components are built on Angular ARIA primitives with full keyboard navigation, screen reader support, and WCAG 2.1 AA compliance.',
    },
    {
      question: 'Can I customize the styling?',
      answer:
        'Absolutely! Components use Tailwind CSS and CSS variables for styling. You can easily customize colors, spacing, and other design tokens.',
    },
    {
      question: 'What version of Angular is supported?',
      answer:
        'The components are built with Angular 21+ and use the latest features like signals, standalone components, and control flow syntax.',
    },
  ];
}
