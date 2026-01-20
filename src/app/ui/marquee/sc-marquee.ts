import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Directive,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

// ============================================================================
// Marquee
// ============================================================================
@Component({
  selector: 'sc-marquee',
  template: `
    <div [class]="innerClass()">
      <ng-content />
    </div>
    <div [class]="innerClass()" aria-hidden="true">
      <ng-content select="[sc-marquee-clone]" />
    </div>
  `,
  host: {
    'data-slot': 'marquee',
    '[class]': 'class()',
    '[style.--duration]': 'duration() + "s"',
    '[style.--gap]': 'gap() + "px"',
    '[attr.data-direction]': 'direction()',
    '[attr.data-pause-on-hover]': 'pauseOnHover() || null',
    '[attr.data-reverse]': 'reverse() || null',
  },
  styles: `
    [data-slot='marquee'] {
      --duration: 40s;
      --gap: 16px;
      display: flex;
      overflow: hidden;
      gap: var(--gap);
    }

    [data-slot='marquee'] > div {
      display: flex;
      flex-shrink: 0;
      gap: var(--gap);
      animation: marquee var(--duration) linear infinite;
    }

    [data-slot='marquee'][data-direction='vertical'] {
      flex-direction: column;
    }

    [data-slot='marquee'][data-direction='vertical'] > div {
      flex-direction: column;
      animation-name: marquee-vertical;
    }

    [data-slot='marquee'][data-reverse] > div {
      animation-direction: reverse;
    }

    [data-slot='marquee'][data-pause-on-hover]:hover > div {
      animation-play-state: paused;
    }

    @keyframes marquee {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(calc(-100% - var(--gap)));
      }
    }

    @keyframes marquee-vertical {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(calc(-100% - var(--gap)));
      }
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScMarquee {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly direction = input<'horizontal' | 'vertical'>('horizontal');
  readonly duration = input<number>(40);
  readonly gap = input<number>(16);
  readonly pauseOnHover = input<boolean>(true);
  readonly reverse = input<boolean>(false);

  protected readonly class = computed(() => cn(this.classInput()));

  protected readonly innerClass = computed(() => cn('flex shrink-0 items-center justify-around'));
}

// ============================================================================
// MarqueeItem
// ============================================================================
@Directive({
  selector: '[sc-marquee-item]',
  host: {
    'data-slot': 'marquee-item',
    '[class]': 'class()',
  },
})
export class ScMarqueeItem {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('flex-shrink-0', this.classInput()));
}

// ============================================================================
// MarqueeClone (for seamless looping - duplicate content)
// ============================================================================
@Directive({
  selector: '[sc-marquee-clone]',
  host: {
    'data-slot': 'marquee-clone',
    '[class]': 'class()',
  },
})
export class ScMarqueeClone {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('flex-shrink-0', this.classInput()));
}

// ============================================================================
// MarqueeFade (gradient fade effect on edges)
// ============================================================================
@Component({
  selector: 'sc-marquee-fade',
  template: `
    <div [class]="fadeLeftClass()"></div>
    <ng-content />
    <div [class]="fadeRightClass()"></div>
  `,
  host: {
    'data-slot': 'marquee-fade',
    '[class]': 'class()',
    '[attr.data-direction]': 'direction()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScMarqueeFade {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly direction = input<'horizontal' | 'vertical'>('horizontal');
  readonly fadeSize = input<string>('5rem');

  protected readonly class = computed(() => cn('relative overflow-hidden', this.classInput()));

  protected readonly fadeLeftClass = computed(() => {
    const isVertical = this.direction() === 'vertical';
    return cn(
      'pointer-events-none absolute z-10 from-background to-transparent',
      isVertical
        ? `top-0 left-0 right-0 h-[${this.fadeSize()}] bg-gradient-to-b`
        : `left-0 top-0 bottom-0 w-[${this.fadeSize()}] bg-gradient-to-r`,
    );
  });

  protected readonly fadeRightClass = computed(() => {
    const isVertical = this.direction() === 'vertical';
    return cn(
      'pointer-events-none absolute z-10 from-background to-transparent',
      isVertical
        ? `bottom-0 left-0 right-0 h-[${this.fadeSize()}] bg-gradient-to-t`
        : `right-0 top-0 bottom-0 w-[${this.fadeSize()}] bg-gradient-to-l`,
    );
  });
}

// ============================================================================
// Simple Auto-Looping Marquee (self-contained)
// ============================================================================
@Component({
  selector: 'sc-auto-marquee',
  template: `
    <div [class]="trackClass()">
      <div [class]="contentClass()">
        <ng-content />
      </div>
      <div [class]="contentClass()" aria-hidden="true">
        <ng-content select="[clone]" />
      </div>
    </div>
  `,
  host: {
    'data-slot': 'auto-marquee',
    '[class]': 'class()',
    '[style.--marquee-duration]': 'duration() + "s"',
    '[style.--marquee-gap]': 'gap() + "px"',
    '[attr.data-pause-on-hover]': 'pauseOnHover() || null',
  },
  styles: `
    [data-slot='auto-marquee'] {
      --marquee-duration: 30s;
      --marquee-gap: 16px;
      overflow: hidden;
    }

    [data-slot='auto-marquee'] [data-slot='auto-marquee-track'] {
      display: flex;
      gap: var(--marquee-gap);
      width: max-content;
      animation: auto-marquee-scroll var(--marquee-duration) linear infinite;
    }

    [data-slot='auto-marquee'][data-pause-on-hover]:hover [data-slot='auto-marquee-track'] {
      animation-play-state: paused;
    }

    @keyframes auto-marquee-scroll {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(calc(-50% - var(--marquee-gap) / 2));
      }
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAutoMarquee {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly duration = input<number>(30);
  readonly gap = input<number>(16);
  readonly pauseOnHover = input<boolean>(true);

  protected readonly class = computed(() => cn('w-full', this.classInput()));

  protected readonly trackClass = computed(() => cn('flex'));

  protected readonly contentClass = computed(() =>
    cn('flex shrink-0 items-center gap-[--marquee-gap]'),
  );
}

// ============================================================================
// MarqueeText (simple text marquee)
// ============================================================================
@Component({
  selector: 'sc-marquee-text',
  template: `
    <div [class]="trackClass()">
      <span [class]="textClass()">{{ text() }}</span>
      <span [class]="separatorClass()">{{ separator() }}</span>
      <span [class]="textClass()">{{ text() }}</span>
      <span [class]="separatorClass()">{{ separator() }}</span>
      <span [class]="textClass()">{{ text() }}</span>
      <span [class]="separatorClass()">{{ separator() }}</span>
      <span [class]="textClass()">{{ text() }}</span>
      <span [class]="separatorClass()">{{ separator() }}</span>
    </div>
  `,
  host: {
    'data-slot': 'marquee-text',
    '[class]': 'class()',
    '[style.--text-duration]': 'duration() + "s"',
    '[attr.data-pause-on-hover]': 'pauseOnHover() || null',
    '[attr.data-reverse]': 'reverse() || null',
  },
  styles: `
    [data-slot='marquee-text'] {
      --text-duration: 20s;
      overflow: hidden;
      white-space: nowrap;
    }

    [data-slot='marquee-text'] > div {
      display: inline-block;
      animation: marquee-text-scroll var(--text-duration) linear infinite;
    }

    [data-slot='marquee-text'][data-reverse] > div {
      animation-direction: reverse;
    }

    [data-slot='marquee-text'][data-pause-on-hover]:hover > div {
      animation-play-state: paused;
    }

    @keyframes marquee-text-scroll {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScMarqueeText {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly text = input.required<string>();
  readonly separator = input<string>('•');
  readonly duration = input<number>(20);
  readonly pauseOnHover = input<boolean>(true);
  readonly reverse = input<boolean>(false);

  protected readonly class = computed(() => cn('w-full', this.classInput()));

  protected readonly trackClass = computed(() => cn('whitespace-nowrap'));

  protected readonly textClass = computed(() => cn('inline-block px-4'));

  protected readonly separatorClass = computed(() => cn('inline-block px-2 text-muted-foreground'));
}
