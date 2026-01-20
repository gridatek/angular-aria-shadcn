import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Directive,
  ElementRef,
  inject,
  InjectionToken,
  input,
  model,
  output,
  signal,
  ViewEncapsulation,
  viewChild,
} from '@angular/core';
import { cn } from '../../utils';

// Token for tag input context
export const SC_TAG_INPUT = new InjectionToken<ScTagInput>('SC_TAG_INPUT');

// ============================================================================
// TagInput
// ============================================================================
@Directive({
  selector: '[sc-tag-input]',
  exportAs: 'scTagInput',
  providers: [{ provide: SC_TAG_INPUT, useExisting: ScTagInput }],
  host: {
    'data-slot': 'tag-input',
    '[class]': 'class()',
    '[attr.data-disabled]': 'disabled() || null',
    '[attr.data-focused]': 'isFocused() || null',
    '(click)': 'focusInput()',
  },
})
export class ScTagInput {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly tags = model<string[]>([]);
  readonly placeholder = input<string>('Add tag...');
  readonly disabled = input<boolean>(false);
  readonly maxTags = input<number | null>(null);
  readonly allowDuplicates = input<boolean>(false);
  readonly delimiters = input<string[]>(['Enter', ',']);
  readonly minLength = input<number>(1);
  readonly maxLength = input<number | null>(null);

  readonly tagAdd = output<string>();
  readonly tagRemove = output<string>();

  readonly isFocused = signal(false);
  readonly inputValue = signal('');

  private inputRef: ElementRef<HTMLInputElement> | null = null;

  protected readonly class = computed(() =>
    cn(
      'flex flex-wrap items-center gap-1.5 min-h-10 w-full rounded-md border border-input bg-background px-3 py-2',
      'focus-within:ring-1 focus-within:ring-ring focus-within:border-ring',
      'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
      this.classInput(),
    ),
  );

  readonly canAddMore = computed(() => {
    const max = this.maxTags();
    if (max === null) return true;
    return this.tags().length < max;
  });

  setInputRef(ref: ElementRef<HTMLInputElement>): void {
    this.inputRef = ref;
  }

  focusInput(): void {
    if (!this.disabled()) {
      this.inputRef?.nativeElement.focus();
    }
  }

  addTag(value: string): boolean {
    const trimmed = value.trim();

    // Validation
    if (trimmed.length < this.minLength()) return false;
    if (this.maxLength() !== null && trimmed.length > this.maxLength()!) return false;
    if (!this.canAddMore()) return false;
    if (!this.allowDuplicates() && this.tags().includes(trimmed)) return false;

    this.tags.update((tags) => [...tags, trimmed]);
    this.tagAdd.emit(trimmed);
    return true;
  }

  removeTag(tag: string): void {
    if (this.disabled()) return;
    this.tags.update((tags) => tags.filter((t) => t !== tag));
    this.tagRemove.emit(tag);
  }

  removeTagAtIndex(index: number): void {
    if (this.disabled()) return;
    const tag = this.tags()[index];
    if (tag) {
      this.tags.update((tags) => tags.filter((_, i) => i !== index));
      this.tagRemove.emit(tag);
    }
  }

  removeLastTag(): void {
    const tags = this.tags();
    if (tags.length > 0) {
      this.removeTagAtIndex(tags.length - 1);
    }
  }

  clearAll(): void {
    if (this.disabled()) return;
    const removed = [...this.tags()];
    this.tags.set([]);
    removed.forEach((tag) => this.tagRemove.emit(tag));
  }
}

// ============================================================================
// TagInputField
// ============================================================================
@Component({
  selector: 'input[sc-tag-input-field]',
  template: ``,
  host: {
    'data-slot': 'tag-input-field',
    type: 'text',
    '[class]': 'class()',
    '[placeholder]': 'tagInput.canAddMore() ? tagInput.placeholder() : ""',
    '[disabled]': 'tagInput.disabled() || !tagInput.canAddMore()',
    '[value]': 'tagInput.inputValue()',
    '(input)': 'onInput($event)',
    '(keydown)': 'onKeydown($event)',
    '(focus)': 'tagInput.isFocused.set(true)',
    '(blur)': 'onBlur()',
    '(paste)': 'onPaste($event)',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTagInputField {
  readonly tagInput = inject(SC_TAG_INPUT);
  private readonly elementRef = inject(ElementRef<HTMLInputElement>);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly addOnBlur = input<boolean>(false);

  protected readonly class = computed(() =>
    cn(
      'flex-1 min-w-[120px] bg-transparent text-sm outline-none placeholder:text-muted-foreground',
      'disabled:cursor-not-allowed',
      this.classInput(),
    ),
  );

  constructor() {
    this.tagInput.setInputRef(this.elementRef);
  }

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.tagInput.inputValue.set(value);
  }

  onKeydown(event: KeyboardEvent): void {
    const value = this.tagInput.inputValue();
    const delimiters = this.tagInput.delimiters();

    // Check if key is a delimiter
    if (delimiters.includes(event.key)) {
      event.preventDefault();
      if (value.trim()) {
        if (this.tagInput.addTag(value)) {
          this.tagInput.inputValue.set('');
        }
      }
      return;
    }

    // Handle backspace to remove last tag
    if (event.key === 'Backspace' && !value) {
      event.preventDefault();
      this.tagInput.removeLastTag();
    }
  }

  onBlur(): void {
    this.tagInput.isFocused.set(false);

    if (this.addOnBlur()) {
      const value = this.tagInput.inputValue();
      if (value.trim()) {
        if (this.tagInput.addTag(value)) {
          this.tagInput.inputValue.set('');
        }
      }
    }
  }

  onPaste(event: ClipboardEvent): void {
    const delimiters = this.tagInput.delimiters();
    const pastedText = event.clipboardData?.getData('text') ?? '';

    // Check if pasted text contains delimiters (excluding Enter)
    const textDelimiters = delimiters.filter((d) => d !== 'Enter');
    const hasDelimiters = textDelimiters.some((d) => pastedText.includes(d));

    if (hasDelimiters) {
      event.preventDefault();

      // Split by all text delimiters
      let tags = [pastedText];
      textDelimiters.forEach((delimiter) => {
        tags = tags.flatMap((t) => t.split(delimiter));
      });

      // Add each tag
      tags.forEach((tag) => {
        if (tag.trim()) {
          this.tagInput.addTag(tag);
        }
      });

      this.tagInput.inputValue.set('');
    }
  }
}

// ============================================================================
// TagInputTag
// ============================================================================
@Component({
  selector: '[sc-tag-input-tag]',
  template: `
    <span class="truncate">{{ tag() }}</span>
    @if (!tagInput.disabled()) {
      <button
        type="button"
        class="ml-1 rounded-full hover:bg-foreground/20 focus:outline-none focus:ring-1 focus:ring-ring"
        (click)="remove($event)"
        [attr.aria-label]="'Remove ' + tag()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          class="size-3"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    }
  `,
  host: {
    'data-slot': 'tag-input-tag',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTagInputTag {
  readonly tagInput = inject(SC_TAG_INPUT);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly tag = input.required<string>();
  readonly variant = input<'default' | 'secondary' | 'outline'>('default');

  protected readonly class = computed(() =>
    cn(
      'inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium transition-colors',
      'max-w-[150px]',
      this.variant() === 'default' && 'bg-primary text-primary-foreground',
      this.variant() === 'secondary' && 'bg-secondary text-secondary-foreground',
      this.variant() === 'outline' && 'border bg-background',
      this.classInput(),
    ),
  );

  remove(event: Event): void {
    event.stopPropagation();
    this.tagInput.removeTag(this.tag());
  }
}

// ============================================================================
// TagInputClear
// ============================================================================
@Component({
  selector: 'button[sc-tag-input-clear]',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      class="size-4"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  `,
  host: {
    'data-slot': 'tag-input-clear',
    type: 'button',
    '[class]': 'class()',
    '[disabled]': 'tagInput.disabled() || tagInput.tags().length === 0',
    '(click)': 'onClick($event)',
    '[attr.aria-label]': '"Clear all tags"',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTagInputClear {
  readonly tagInput = inject(SC_TAG_INPUT);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'ml-auto inline-flex size-6 items-center justify-center rounded-md',
      'text-muted-foreground hover:text-foreground hover:bg-muted',
      'disabled:pointer-events-none disabled:opacity-50',
      'focus:outline-none focus:ring-1 focus:ring-ring',
      this.classInput(),
    ),
  );

  onClick(event: Event): void {
    event.stopPropagation();
    this.tagInput.clearAll();
  }
}

// ============================================================================
// TagInputCount
// ============================================================================
@Component({
  selector: '[sc-tag-input-count]',
  template: `{{ tagInput.tags().length }}{{ maxText() }}`,
  host: {
    'data-slot': 'tag-input-count',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTagInputCount {
  readonly tagInput = inject(SC_TAG_INPUT);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly showMax = input<boolean>(true);

  protected readonly class = computed(() => cn('text-xs text-muted-foreground', this.classInput()));

  protected readonly maxText = computed(() => {
    if (!this.showMax()) return '';
    const max = this.tagInput.maxTags();
    return max !== null ? ` / ${max}` : '';
  });
}
