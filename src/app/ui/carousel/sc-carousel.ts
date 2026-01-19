import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  Directive,
  ElementRef,
  inject,
  input,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

export type CarouselOrientation = 'horizontal' | 'vertical';

@Component({
  selector: 'div[sc-carousel]',
  template: `<ng-content />`,
  host: {
    'data-slot': 'carousel',
    role: 'region',
    'aria-roledescription': 'carousel',
    '[class]': 'class()',
    '(keydown)': 'onKeyDown($event)',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCarousel {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly orientation = input<CarouselOrientation>('horizontal');
  readonly opts = input<CarouselOptions>({});

  private readonly content = contentChild(ScCarouselContent);

  readonly canScrollPrev = signal(false);
  readonly canScrollNext = signal(true);

  protected readonly class = computed(() => cn('relative', this.classInput()));

  scrollPrev(): void {
    const content = this.content();
    if (!content) return;
    content.scrollPrev();
  }

  scrollNext(): void {
    const content = this.content();
    if (!content) return;
    content.scrollNext();
  }

  updateScrollState(canPrev: boolean, canNext: boolean): void {
    this.canScrollPrev.set(canPrev);
    this.canScrollNext.set(canNext);
  }

  protected onKeyDown(event: KeyboardEvent): void {
    const isHorizontal = this.orientation() === 'horizontal';

    if (isHorizontal && event.key === 'ArrowLeft') {
      event.preventDefault();
      this.scrollPrev();
    } else if (isHorizontal && event.key === 'ArrowRight') {
      event.preventDefault();
      this.scrollNext();
    } else if (!isHorizontal && event.key === 'ArrowUp') {
      event.preventDefault();
      this.scrollPrev();
    } else if (!isHorizontal && event.key === 'ArrowDown') {
      event.preventDefault();
      this.scrollNext();
    }
  }
}

export interface CarouselOptions {
  align?: 'start' | 'center' | 'end';
  loop?: boolean;
}

@Directive({
  selector: 'div[sc-carousel-content]',
  host: {
    'data-slot': 'carousel-content',
    '[class]': 'class()',
    '(scroll)': 'onScroll()',
  },
})
export class ScCarouselContent {
  private readonly carousel = inject(ScCarousel);
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => {
    const isHorizontal = this.carousel.orientation() === 'horizontal';
    return cn(
      'flex',
      isHorizontal ? '-ml-4 flex-row' : '-mt-4 flex-col',
      'overflow-hidden scroll-smooth snap-mandatory',
      isHorizontal ? 'snap-x' : 'snap-y',
      this.classInput(),
    );
  });

  scrollPrev(): void {
    const el = this.elementRef.nativeElement;
    const isHorizontal = this.carousel.orientation() === 'horizontal';
    const scrollAmount = isHorizontal ? el.clientWidth : el.clientHeight;

    if (isHorizontal) {
      el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      el.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
    }
  }

  scrollNext(): void {
    const el = this.elementRef.nativeElement;
    const isHorizontal = this.carousel.orientation() === 'horizontal';
    const scrollAmount = isHorizontal ? el.clientWidth : el.clientHeight;

    if (isHorizontal) {
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
      el.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    }
  }

  protected onScroll(): void {
    const el = this.elementRef.nativeElement;
    const isHorizontal = this.carousel.orientation() === 'horizontal';

    if (isHorizontal) {
      const canPrev = el.scrollLeft > 0;
      const canNext = el.scrollLeft < el.scrollWidth - el.clientWidth - 1;
      this.carousel.updateScrollState(canPrev, canNext);
    } else {
      const canPrev = el.scrollTop > 0;
      const canNext = el.scrollTop < el.scrollHeight - el.clientHeight - 1;
      this.carousel.updateScrollState(canPrev, canNext);
    }
  }
}

@Directive({
  selector: 'div[sc-carousel-item]',
  host: {
    'data-slot': 'carousel-item',
    role: 'group',
    'aria-roledescription': 'slide',
    '[class]': 'class()',
  },
})
export class ScCarouselItem {
  private readonly carousel = inject(ScCarousel);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => {
    const isHorizontal = this.carousel.orientation() === 'horizontal';
    return cn(
      'min-w-0 shrink-0 grow-0 basis-full snap-start',
      isHorizontal ? 'pl-4' : 'pt-4',
      this.classInput(),
    );
  });
}

@Component({
  selector: 'button[sc-carousel-previous]',
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
    <span class="sr-only">Previous slide</span>
  `,
  host: {
    'data-slot': 'carousel-previous',
    type: 'button',
    '[class]': 'class()',
    '[disabled]': '!carousel.canScrollPrev()',
    '(click)': 'carousel.scrollPrev()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCarouselPrevious {
  readonly carousel = inject(ScCarousel);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => {
    const isHorizontal = this.carousel.orientation() === 'horizontal';
    return cn(
      'absolute size-8 rounded-full',
      'inline-flex items-center justify-center',
      'border border-input bg-background',
      'hover:bg-accent hover:text-accent-foreground',
      'disabled:pointer-events-none disabled:opacity-50',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      isHorizontal
        ? '-left-12 top-1/2 -translate-y-1/2'
        : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
      this.classInput(),
    );
  });
}

@Component({
  selector: 'button[sc-carousel-next]',
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
      <path d="m9 18 6-6-6-6" />
    </svg>
    <span class="sr-only">Next slide</span>
  `,
  host: {
    'data-slot': 'carousel-next',
    type: 'button',
    '[class]': 'class()',
    '[disabled]': '!carousel.canScrollNext()',
    '(click)': 'carousel.scrollNext()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCarouselNext {
  readonly carousel = inject(ScCarousel);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => {
    const isHorizontal = this.carousel.orientation() === 'horizontal';
    return cn(
      'absolute size-8 rounded-full',
      'inline-flex items-center justify-center',
      'border border-input bg-background',
      'hover:bg-accent hover:text-accent-foreground',
      'disabled:pointer-events-none disabled:opacity-50',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      isHorizontal
        ? '-right-12 top-1/2 -translate-y-1/2'
        : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
      this.classInput(),
    );
  });
}
