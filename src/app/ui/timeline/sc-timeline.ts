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
// Timeline
// ============================================================================
@Directive({
  selector: '[sc-timeline]',
  host: {
    'data-slot': 'timeline',
    '[class]': 'class()',
  },
})
export class ScTimeline {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('relative space-y-0', this.classInput()));
}

// ============================================================================
// TimelineItem
// ============================================================================
@Component({
  selector: '[sc-timeline-item]',
  template: `<ng-content />`,
  host: {
    'data-slot': 'timeline-item',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTimelineItem {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('relative pb-8 pl-8 last:pb-0', this.classInput()));
}

// ============================================================================
// TimelineConnector (vertical line)
// ============================================================================
@Component({
  selector: '[sc-timeline-connector]',
  template: ``,
  host: {
    'data-slot': 'timeline-connector',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTimelineConnector {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('absolute left-[11px] top-5 h-[calc(100%-20px)] w-px bg-border', this.classInput()),
  );
}

// ============================================================================
// TimelineDot
// ============================================================================
@Component({
  selector: '[sc-timeline-dot]',
  template: `<ng-content />`,
  host: {
    'data-slot': 'timeline-dot',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTimelineDot {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly variant = input<'default' | 'outline' | 'success' | 'warning' | 'error'>('default');
  readonly size = input<'sm' | 'default' | 'lg'>('default');

  protected readonly class = computed(() =>
    cn(
      'absolute left-0 flex items-center justify-center rounded-full',
      // Size
      this.size() === 'sm' && 'size-4 top-1',
      this.size() === 'default' && 'size-6 top-0',
      this.size() === 'lg' && 'size-8 -top-1',
      // Variant
      this.variant() === 'default' && 'bg-primary text-primary-foreground',
      this.variant() === 'outline' && 'border-2 border-border bg-background',
      this.variant() === 'success' && 'bg-green-500 text-white',
      this.variant() === 'warning' && 'bg-yellow-500 text-white',
      this.variant() === 'error' && 'bg-red-500 text-white',
      this.classInput(),
    ),
  );
}

// ============================================================================
// TimelineContent
// ============================================================================
@Component({
  selector: '[sc-timeline-content]',
  template: `<ng-content />`,
  host: {
    'data-slot': 'timeline-content',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTimelineContent {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('space-y-1', this.classInput()));
}

// ============================================================================
// TimelineTitle
// ============================================================================
@Directive({
  selector: '[sc-timeline-title]',
  host: {
    'data-slot': 'timeline-title',
    '[class]': 'class()',
  },
})
export class ScTimelineTitle {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('font-medium leading-none', this.classInput()));
}

// ============================================================================
// TimelineDescription
// ============================================================================
@Directive({
  selector: '[sc-timeline-description]',
  host: {
    'data-slot': 'timeline-description',
    '[class]': 'class()',
  },
})
export class ScTimelineDescription {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('text-sm text-muted-foreground', this.classInput()));
}

// ============================================================================
// TimelineTime
// ============================================================================
@Directive({
  selector: '[sc-timeline-time]',
  host: {
    'data-slot': 'timeline-time',
    '[class]': 'class()',
  },
})
export class ScTimelineTime {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('text-xs text-muted-foreground', this.classInput()));
}
