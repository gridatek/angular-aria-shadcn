import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { Option } from '@angular/aria/listbox';
import { cn } from '../../utils';

@Component({
  selector: 'div[sc-select-item]',
  imports: [Option],
  template: `
    <div
      ngOption
      #option="ngOption"
      [value]="value()"
      [label]="labelText()"
      [disabled]="disabled()"
      [class]="optionClass()"
      data-slot="select-item-option"
    >
      <span class="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
        @if (option.selected()) {
          <svg
            class="size-4"
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
            <path d="M20 6 9 17l-5-5" />
          </svg>
        }
      </span>
      <ng-content />
    </div>
  `,
  host: {
    'data-slot': 'select-item',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSelectItem<T> {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly value = input.required<T>();
  readonly label = input<string>();
  readonly disabled = input(false);

  private readonly elementRef = inject(ElementRef);

  protected readonly labelText = computed(
    () => this.label() ?? this.elementRef.nativeElement.textContent?.trim(),
  );

  protected readonly optionClass = computed(() =>
    cn(
      'relative flex w-full cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none',
      'focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
      this.classInput(),
    ),
  );
}
