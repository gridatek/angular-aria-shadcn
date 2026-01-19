import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Directive,
  inject,
  Injectable,
  input,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

export type SidebarSide = 'left' | 'right';
export type SidebarVariant = 'sidebar' | 'floating' | 'inset';
export type SidebarCollapsible = 'offcanvas' | 'icon' | 'none';

@Injectable()
export class ScSidebarState {
  readonly open = signal(true);
  readonly openMobile = signal(false);

  toggle(): void {
    this.open.update((v) => !v);
  }

  toggleMobile(): void {
    this.openMobile.update((v) => !v);
  }

  setOpen(value: boolean): void {
    this.open.set(value);
  }

  setOpenMobile(value: boolean): void {
    this.openMobile.set(value);
  }
}

@Component({
  selector: 'div[sc-sidebar-provider]',
  template: `<ng-content />`,
  providers: [ScSidebarState],
  host: {
    'data-slot': 'sidebar-provider',
    '[class]': 'class()',
    '[style.--sidebar-width]': '"16rem"',
    '[style.--sidebar-width-icon]': '"3rem"',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSidebarProvider {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar',
      this.classInput(),
    ),
  );
}

@Component({
  selector: 'aside[sc-sidebar]',
  template: `
    <div [class]="innerClass()">
      <ng-content />
    </div>
  `,
  host: {
    'data-slot': 'sidebar',
    '[class]': 'class()',
    '[attr.data-state]': 'state.open() ? "expanded" : "collapsed"',
    '[attr.data-collapsible]': 'collapsible()',
    '[attr.data-variant]': 'variant()',
    '[attr.data-side]': 'side()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSidebar {
  readonly state = inject(ScSidebarState);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly side = input<SidebarSide>('left');
  readonly variant = input<SidebarVariant>('sidebar');
  readonly collapsible = input<SidebarCollapsible>('offcanvas');

  protected readonly class = computed(() => {
    const collapsible = this.collapsible();
    const side = this.side();
    const variant = this.variant();

    if (collapsible === 'none') {
      return cn(
        'flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground',
        this.classInput(),
      );
    }

    return cn(
      'group peer hidden md:block text-sidebar-foreground',
      'transition-[width] duration-200 ease-linear',
      'group-data-[state=collapsed]/sidebar-wrapper:w-[--sidebar-width-icon]',
      variant === 'floating' || variant === 'inset'
        ? 'w-[calc(var(--sidebar-width)+theme(spacing.4))]'
        : 'w-[--sidebar-width]',
      side === 'left'
        ? 'group-data-[collapsible=offcanvas]:left-0'
        : 'group-data-[collapsible=offcanvas]:right-0',
      this.classInput(),
    );
  });

  protected readonly innerClass = computed(() => {
    const variant = this.variant();

    return cn(
      'flex h-full w-full flex-col bg-sidebar',
      'group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow',
      variant === 'inset' && 'bg-transparent',
    );
  });
}

@Directive({
  selector: 'div[sc-sidebar-header]',
  host: {
    'data-slot': 'sidebar-header',
    '[class]': 'class()',
  },
})
export class ScSidebarHeader {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('flex flex-col gap-2 p-2', this.classInput()));
}

@Directive({
  selector: 'div[sc-sidebar-content]',
  host: {
    'data-slot': 'sidebar-content',
    '[class]': 'class()',
  },
})
export class ScSidebarContent {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'flex min-h-0 flex-1 flex-col gap-2 overflow-auto',
      'group-data-[collapsible=icon]:overflow-hidden',
      this.classInput(),
    ),
  );
}

@Directive({
  selector: 'div[sc-sidebar-footer]',
  host: {
    'data-slot': 'sidebar-footer',
    '[class]': 'class()',
  },
})
export class ScSidebarFooter {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('flex flex-col gap-2 p-2', this.classInput()));
}

@Directive({
  selector: 'div[sc-sidebar-group]',
  host: {
    'data-slot': 'sidebar-group',
    '[class]': 'class()',
  },
})
export class ScSidebarGroup {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('relative flex w-full min-w-0 flex-col p-2', this.classInput()),
  );
}

@Directive({
  selector: 'div[sc-sidebar-group-label]',
  host: {
    'data-slot': 'sidebar-group-label',
    '[class]': 'class()',
  },
})
export class ScSidebarGroupLabel {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70',
      'outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear',
      'focus-visible:ring-2',
      'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
      this.classInput(),
    ),
  );
}

@Directive({
  selector: 'ul[sc-sidebar-menu]',
  host: {
    'data-slot': 'sidebar-menu',
    '[class]': 'class()',
  },
})
export class ScSidebarMenu {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('flex w-full min-w-0 flex-col gap-1', this.classInput()),
  );
}

@Directive({
  selector: 'li[sc-sidebar-menu-item]',
  host: {
    'data-slot': 'sidebar-menu-item',
    '[class]': 'class()',
  },
})
export class ScSidebarMenuItem {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('group/menu-item relative', this.classInput()));
}

@Directive({
  selector: 'button[sc-sidebar-menu-button], a[sc-sidebar-menu-button]',
  host: {
    'data-slot': 'sidebar-menu-button',
    '[class]': 'class()',
    '[attr.data-active]': 'isActive() || null',
  },
})
export class ScSidebarMenuButton {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly isActive = input<boolean>(false);
  readonly size = input<'default' | 'sm' | 'lg'>('default');

  protected readonly class = computed(() => {
    const size = this.size();

    return cn(
      'peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm',
      'outline-none ring-sidebar-ring transition-[width,height,padding]',
      'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
      'focus-visible:ring-2',
      'active:bg-sidebar-accent active:text-sidebar-accent-foreground',
      'disabled:pointer-events-none disabled:opacity-50',
      'group-has-[[data-slot=sidebar-menu-action]]/menu-item:pr-8',
      'data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground',
      'group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2',
      '[&>svg]:size-4 [&>svg]:shrink-0',
      size === 'sm' && 'text-xs',
      size === 'lg' && 'text-sm group-data-[collapsible=icon]:!p-0',
      this.classInput(),
    );
  });
}

@Component({
  selector: 'button[sc-sidebar-trigger]',
  template: `
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
      class="size-4"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 3v18" />
    </svg>
    <span class="sr-only">Toggle Sidebar</span>
  `,
  host: {
    'data-slot': 'sidebar-trigger',
    type: 'button',
    '[class]': 'class()',
    '(click)': 'state.toggle()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSidebarTrigger {
  readonly state = inject(ScSidebarState);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'inline-flex size-8 items-center justify-center rounded-md',
      'hover:bg-accent hover:text-accent-foreground',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
      this.classInput(),
    ),
  );
}

@Directive({
  selector: 'div[sc-sidebar-inset]',
  host: {
    'data-slot': 'sidebar-inset',
    '[class]': 'class()',
  },
})
export class ScSidebarInset {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'relative flex min-h-svh flex-1 flex-col bg-background',
      'peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))]',
      'md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0',
      'md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow',
      this.classInput(),
    ),
  );
}

@Directive({
  selector: '[sc-sidebar-separator]',
  host: {
    'data-slot': 'sidebar-separator',
    '[class]': 'class()',
  },
})
export class ScSidebarSeparator {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('mx-2 w-auto bg-sidebar-border h-px', this.classInput()),
  );
}
