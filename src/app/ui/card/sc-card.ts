import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: '[sc-card]',
  host: {
    'data-slot': 'card',
    '[class]': 'class()',
  },
})
export class ScCard {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('rounded-lg border bg-card text-card-foreground shadow-sm', this.classInput()),
  );
}

@Directive({
  selector: '[sc-card-header]',
  host: {
    'data-slot': 'card-header',
    '[class]': 'class()',
  },
})
export class ScCardHeader {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('flex flex-col space-y-1.5 p-6', this.classInput()));
}

@Directive({
  selector: '[sc-card-title]',
  host: {
    'data-slot': 'card-title',
    '[class]': 'class()',
  },
})
export class ScCardTitle {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('text-2xl font-semibold leading-none tracking-tight', this.classInput()),
  );
}

@Directive({
  selector: '[sc-card-description]',
  host: {
    'data-slot': 'card-description',
    '[class]': 'class()',
  },
})
export class ScCardDescription {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('text-sm text-muted-foreground', this.classInput()));
}

@Directive({
  selector: '[sc-card-content]',
  host: {
    'data-slot': 'card-content',
    '[class]': 'class()',
  },
})
export class ScCardContent {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('p-6 pt-0', this.classInput()));
}

@Directive({
  selector: '[sc-card-footer]',
  host: {
    'data-slot': 'card-footer',
    '[class]': 'class()',
  },
})
export class ScCardFooter {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('flex items-center p-6 pt-0', this.classInput()));
}
