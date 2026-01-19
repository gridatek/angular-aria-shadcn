import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Directive,
  inject,
  InjectionToken,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';
import { cn } from '../../utils';

// Token for sharing form field state
export const SC_FORM_FIELD = new InjectionToken<ScFormField>('SC_FORM_FIELD');

@Directive({
  selector: '[sc-form-field]',
  providers: [{ provide: SC_FORM_FIELD, useExisting: ScFormField }],
  host: {
    'data-slot': 'form-field',
  },
})
export class ScFormField {
  readonly name = input.required<string>();

  private readonly form = inject(FormGroupDirective, { optional: true });
  private readonly ngForm = inject(NgForm, { optional: true });

  get control(): AbstractControl | null {
    const formDir = this.form || this.ngForm;
    if (!formDir) return null;
    return formDir.form.get(this.name()) ?? null;
  }

  get invalid(): boolean {
    return this.control?.invalid ?? false;
  }

  get touched(): boolean {
    return this.control?.touched ?? false;
  }

  get dirty(): boolean {
    return this.control?.dirty ?? false;
  }

  get showError(): boolean {
    return this.invalid && (this.touched || this.dirty);
  }

  get errorMessage(): string {
    const control = this.control;
    if (!control || !control.errors) return '';

    const errors = control.errors;
    if (errors['required']) return 'This field is required';
    if (errors['email']) return 'Please enter a valid email';
    if (errors['minlength']) {
      return `Minimum length is ${errors['minlength'].requiredLength} characters`;
    }
    if (errors['maxlength']) {
      return `Maximum length is ${errors['maxlength'].requiredLength} characters`;
    }
    if (errors['min']) return `Minimum value is ${errors['min'].min}`;
    if (errors['max']) return `Maximum value is ${errors['max'].max}`;
    if (errors['pattern']) return 'Invalid format';

    // Return first custom error message if available
    const firstError = Object.keys(errors)[0];
    if (typeof errors[firstError] === 'string') {
      return errors[firstError];
    }

    return 'Invalid value';
  }
}

@Directive({
  selector: 'div[sc-form-item]',
  host: {
    'data-slot': 'form-item',
    '[class]': 'class()',
  },
})
export class ScFormItem {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('space-y-2', this.classInput()));
}

@Component({
  selector: 'label[sc-form-label]',
  template: `<ng-content />`,
  host: {
    'data-slot': 'form-label',
    '[class]': 'class()',
    '[attr.data-error]': 'formField?.showError || null',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFormLabel {
  readonly formField = inject(SC_FORM_FIELD, { optional: true });

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'text-sm font-medium leading-none',
      'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      'data-[error=true]:text-destructive',
      this.classInput(),
    ),
  );
}

@Directive({
  selector: '[sc-form-control]',
  host: {
    'data-slot': 'form-control',
    '[attr.aria-invalid]': 'formField?.showError || null',
    '[attr.aria-describedby]': 'describedBy',
  },
})
export class ScFormControl {
  readonly formField = inject(SC_FORM_FIELD, { optional: true });

  get describedBy(): string | null {
    if (!this.formField) return null;
    const name = this.formField.name();
    const parts: string[] = [];
    parts.push(`${name}-description`);
    if (this.formField.showError) {
      parts.push(`${name}-message`);
    }
    return parts.join(' ');
  }
}

@Component({
  selector: 'p[sc-form-description]',
  template: `<ng-content />`,
  host: {
    'data-slot': 'form-description',
    '[class]': 'class()',
    '[id]': 'formField ? formField.name() + "-description" : null',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFormDescription {
  readonly formField = inject(SC_FORM_FIELD, { optional: true });

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('text-sm text-muted-foreground', this.classInput()));
}

@Component({
  selector: 'p[sc-form-message]',
  template: `{{ message() }}`,
  host: {
    'data-slot': 'form-message',
    '[class]': 'class()',
    '[id]': 'formField ? formField.name() + "-message" : null',
    role: 'alert',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFormMessage {
  readonly formField = inject(SC_FORM_FIELD, { optional: true });

  readonly classInput = input<string>('', { alias: 'class' });
  readonly customMessage = input<string>('', { alias: 'message' });

  protected readonly class = computed(() =>
    cn('text-sm font-medium text-destructive', this.classInput()),
  );

  protected readonly message = computed(() => {
    if (this.customMessage()) return this.customMessage();
    return this.formField?.errorMessage ?? '';
  });
}
