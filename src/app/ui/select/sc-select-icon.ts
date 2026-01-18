import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: 'sc-select-icon',
  imports: [],
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
      aria-hidden="true"
      [class]="class()"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  `,
  host: {
    'data-slot': 'select-icon',
    style: 'display: contents',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSelectIcon {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'text-muted-foreground pointer-events-none absolute right-3 size-4 shrink-0 opacity-50 transition-transform duration-150 [[aria-expanded=true]~&]:rotate-180',
      this.classInput(),
    ),
  );
}
