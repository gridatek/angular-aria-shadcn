import { ChangeDetectionStrategy, Component, computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'nav[sc-pagination]',
  host: {
    'data-slot': 'pagination',
    role: 'navigation',
    '[attr.aria-label]': '"pagination"',
    '[class]': 'class()',
  },
})
export class ScPagination {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('mx-auto flex w-full justify-center', this.classInput()),
  );
}

@Directive({
  selector: 'ul[sc-pagination-content]',
  host: {
    'data-slot': 'pagination-content',
    '[class]': 'class()',
  },
})
export class ScPaginationContent {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('flex flex-row items-center gap-1', this.classInput()),
  );
}

@Directive({
  selector: 'li[sc-pagination-item]',
  host: {
    'data-slot': 'pagination-item',
    '[class]': 'class()',
  },
})
export class ScPaginationItem {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('', this.classInput()));
}

@Directive({
  selector: 'a[sc-pagination-link], button[sc-pagination-link]',
  host: {
    'data-slot': 'pagination-link',
    '[class]': 'class()',
    '[attr.aria-current]': 'isActive() ? "page" : null',
  },
})
export class ScPaginationLink {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly isActive = input<boolean>(false);
  readonly size = input<'default' | 'sm' | 'lg' | 'icon'>('icon');

  protected readonly class = computed(() => {
    const sizeClasses = {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 px-3',
      lg: 'h-11 px-8',
      icon: 'size-10',
    };

    return cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'hover:bg-accent hover:text-accent-foreground',
      this.isActive() && 'border border-input bg-background',
      sizeClasses[this.size()],
      this.classInput(),
    );
  });
}

@Component({
  selector: 'a[sc-pagination-previous], button[sc-pagination-previous]',
  host: {
    'data-slot': 'pagination-previous',
    '[class]': 'class()',
    '[attr.aria-label]': '"Go to previous page"',
  },
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
      <path d="m15 18-6-6 6-6" />
    </svg>
    <span>Previous</span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPaginationPrevious {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'hover:bg-accent hover:text-accent-foreground',
      'gap-1 pl-2.5 h-10 px-4 py-2',
      this.classInput(),
    ),
  );
}

@Component({
  selector: 'a[sc-pagination-next], button[sc-pagination-next]',
  host: {
    'data-slot': 'pagination-next',
    '[class]': 'class()',
    '[attr.aria-label]': '"Go to next page"',
  },
  template: `
    <span>Next</span>
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPaginationNext {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'hover:bg-accent hover:text-accent-foreground',
      'gap-1 pr-2.5 h-10 px-4 py-2',
      this.classInput(),
    ),
  );
}

@Component({
  selector: 'span[sc-pagination-ellipsis]',
  host: {
    'data-slot': 'pagination-ellipsis',
    '[attr.aria-hidden]': 'true',
    '[class]': 'class()',
  },
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
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
    <span class="sr-only">More pages</span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPaginationEllipsis {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('flex size-10 items-center justify-center', this.classInput()),
  );
}
