import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
  viewChild,
  forwardRef,
} from '@angular/core';
import { ComboboxInput } from '@angular/aria/combobox';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { cn } from '../../utils';
import { ScSelect } from './sc-select';

@Component({
  selector: 'button[sc-select-trigger]',
  imports: [ComboboxInput, CdkOverlayOrigin],
  template: `
    <input
      ngComboboxInput
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      class="sr-only pointer-events-none absolute"
      readonly
      tabindex="-1"
    />
    <ng-content />
    <svg
      class="text-muted-foreground size-4 shrink-0 opacity-50"
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  `,
  host: {
    'data-slot': 'select-trigger',
    type: 'button',
    '[class]': 'hostClass()',
    '[attr.aria-expanded]': 'combobox()?.expanded()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSelectTrigger {
  readonly classInput = input<string>('', { alias: 'class' });

  readonly origin = viewChild.required<CdkOverlayOrigin>('origin');
  private readonly select = inject(forwardRef(() => ScSelect), { optional: true });

  readonly combobox = computed(() => this.select?.combobox());

  protected readonly hostClass = computed(() =>
    cn(
      'border-input bg-background ring-offset-background flex h-9 w-full items-center justify-between gap-2 whitespace-nowrap rounded-md border px-3 py-2 text-sm shadow-xs',
      'placeholder:text-muted-foreground',
      'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      '[&>span]:line-clamp-1',
      this.classInput()
    )
  );
}
