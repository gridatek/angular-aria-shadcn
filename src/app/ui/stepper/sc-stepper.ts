import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Directive,
  inject,
  InjectionToken,
  input,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

export type StepperOrientation = 'horizontal' | 'vertical';

// Token for stepper context
export const SC_STEPPER = new InjectionToken<ScStepper>('SC_STEPPER');
export const SC_STEPPER_ITEM = new InjectionToken<ScStepperItem>('SC_STEPPER_ITEM');

// ============================================================================
// Stepper
// ============================================================================
@Directive({
  selector: '[sc-stepper]',
  providers: [{ provide: SC_STEPPER, useExisting: ScStepper }],
  host: {
    'data-slot': 'stepper',
    '[class]': 'class()',
    '[attr.data-orientation]': 'orientation()',
  },
})
export class ScStepper {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly orientation = input<StepperOrientation>('horizontal');
  readonly activeStep = model<number>(0);

  protected readonly class = computed(() =>
    cn(
      'flex gap-4',
      this.orientation() === 'vertical' ? 'flex-col' : 'flex-row',
      this.classInput(),
    ),
  );

  goToStep(step: number): void {
    this.activeStep.set(step);
  }

  nextStep(): void {
    this.activeStep.update((s) => s + 1);
  }

  prevStep(): void {
    this.activeStep.update((s) => Math.max(0, s - 1));
  }

  isStepComplete(step: number): boolean {
    return step < this.activeStep();
  }

  isStepActive(step: number): boolean {
    return step === this.activeStep();
  }
}

// ============================================================================
// StepperList
// ============================================================================
@Directive({
  selector: '[sc-stepper-list]',
  host: {
    'data-slot': 'stepper-list',
    role: 'tablist',
    '[class]': 'class()',
  },
})
export class ScStepperList {
  private readonly stepper = inject(SC_STEPPER);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => {
    const isVertical = this.stepper.orientation() === 'vertical';
    return cn('flex gap-2', isVertical ? 'flex-col' : 'flex-row items-center', this.classInput());
  });
}

// ============================================================================
// StepperItem
// ============================================================================
@Directive({
  selector: '[sc-stepper-item]',
  providers: [{ provide: SC_STEPPER_ITEM, useExisting: ScStepperItem }],
  host: {
    'data-slot': 'stepper-item',
    '[class]': 'class()',
    '[attr.data-state]': 'state()',
  },
})
export class ScStepperItem {
  private readonly stepper = inject(SC_STEPPER);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly step = input.required<number>();

  readonly state = computed(() => {
    const stepNum = this.step();
    if (this.stepper.isStepComplete(stepNum)) return 'complete';
    if (this.stepper.isStepActive(stepNum)) return 'active';
    return 'inactive';
  });

  protected readonly class = computed(() => {
    const isVertical = this.stepper.orientation() === 'vertical';
    return cn('flex gap-2', isVertical ? 'flex-row' : 'flex-col items-center', this.classInput());
  });
}

// ============================================================================
// StepperTrigger
// ============================================================================
@Component({
  selector: 'button[sc-stepper-trigger]',
  template: `
    @if (stepperItem.state() === 'complete') {
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
        <path d="M20 6 9 17l-5-5" />
      </svg>
    } @else {
      <span>{{ stepperItem.step() + 1 }}</span>
    }
  `,
  host: {
    'data-slot': 'stepper-trigger',
    type: 'button',
    role: 'tab',
    '[class]': 'class()',
    '[attr.aria-selected]': 'stepperItem.state() === "active"',
    '[attr.data-state]': 'stepperItem.state()',
    '(click)': 'onClick()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScStepperTrigger {
  private readonly stepper = inject(SC_STEPPER);
  readonly stepperItem = inject(SC_STEPPER_ITEM);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'inline-flex size-10 items-center justify-center rounded-full border-2 text-sm font-medium',
      'transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      'data-[state=complete]:border-primary data-[state=complete]:bg-primary data-[state=complete]:text-primary-foreground',
      'data-[state=active]:border-primary data-[state=active]:text-primary',
      'data-[state=inactive]:border-muted data-[state=inactive]:text-muted-foreground',
      this.classInput(),
    ),
  );

  onClick(): void {
    this.stepper.goToStep(this.stepperItem.step());
  }
}

// ============================================================================
// StepperSeparator
// ============================================================================
@Directive({
  selector: '[sc-stepper-separator]',
  host: {
    'data-slot': 'stepper-separator',
    '[class]': 'class()',
    '[attr.data-state]': 'state()',
  },
})
export class ScStepperSeparator {
  private readonly stepper = inject(SC_STEPPER);
  private readonly stepperItem = inject(SC_STEPPER_ITEM, { optional: true });

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly state = computed(() => {
    if (!this.stepperItem) return 'inactive';
    return this.stepper.isStepComplete(this.stepperItem.step()) ? 'complete' : 'inactive';
  });

  protected readonly class = computed(() => {
    const isVertical = this.stepper.orientation() === 'vertical';
    return cn(
      'transition-colors',
      isVertical ? 'ml-5 h-8 w-0.5' : 'h-0.5 flex-1',
      'data-[state=complete]:bg-primary data-[state=inactive]:bg-muted',
      this.classInput(),
    );
  });
}

// ============================================================================
// StepperContent
// ============================================================================
@Directive({
  selector: '[sc-stepper-content]',
  host: {
    'data-slot': 'stepper-content',
    role: 'tabpanel',
    '[class]': 'class()',
    '[hidden]': '!isActive()',
  },
})
export class ScStepperContent {
  private readonly stepper = inject(SC_STEPPER);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly step = input.required<number>();

  protected readonly isActive = computed(() => this.stepper.isStepActive(this.step()));

  protected readonly class = computed(() => cn('mt-4', this.classInput()));
}

// ============================================================================
// StepperTitle
// ============================================================================
@Directive({
  selector: '[sc-stepper-title]',
  host: {
    'data-slot': 'stepper-title',
    '[class]': 'class()',
  },
})
export class ScStepperTitle {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('text-sm font-medium', this.classInput()));
}

// ============================================================================
// StepperDescription
// ============================================================================
@Directive({
  selector: '[sc-stepper-description]',
  host: {
    'data-slot': 'stepper-description',
    '[class]': 'class()',
  },
})
export class ScStepperDescription {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('text-xs text-muted-foreground', this.classInput()));
}

// ============================================================================
// StepperPrevious
// ============================================================================
@Component({
  selector: 'button[sc-stepper-previous]',
  template: `<ng-content />`,
  host: {
    'data-slot': 'stepper-previous',
    type: 'button',
    '[class]': 'class()',
    '[disabled]': 'stepper.activeStep() === 0',
    '(click)': 'stepper.prevStep()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScStepperPrevious {
  readonly stepper = inject(SC_STEPPER);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'inline-flex h-10 items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium',
      'ring-offset-background transition-colors',
      'hover:bg-accent hover:text-accent-foreground',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      this.classInput(),
    ),
  );
}

// ============================================================================
// StepperNext
// ============================================================================
@Component({
  selector: 'button[sc-stepper-next]',
  template: `<ng-content />`,
  host: {
    'data-slot': 'stepper-next',
    type: 'button',
    '[class]': 'class()',
    '(click)': 'stepper.nextStep()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScStepperNext {
  readonly stepper = inject(SC_STEPPER);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground',
      'ring-offset-background transition-colors',
      'hover:bg-primary/90',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      this.classInput(),
    ),
  );
}
