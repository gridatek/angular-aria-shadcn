import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  ScCard,
  ScCardHeader,
  ScCardTitle,
  ScCardDescription,
  ScCardContent,
  ScCardFooter,
} from '../../../ui/card';
import { ScButton } from '../../../ui/button';
import { ScInput } from '../../../ui/input';
import { ScLabel } from '../../../ui/label';
import { ScPasswordInput } from '../../../ui/password-input';
import { ScCheckbox } from '../../../ui/checkbox';
import { ScSelect, ScSelectTrigger, ScSelectContent, ScSelectItem } from '../../../ui/select';
import {
  ScStepper,
  ScStepperList,
  ScStepperItem,
  ScStepperTrigger,
  ScStepperSeparator,
  ScStepperContent,
  ScStepperTitle,
  ScStepperDescription,
  ScStepperPrevious,
  ScStepperNext,
} from '../../../ui/stepper';

@Component({
  selector: 'app-register-page',
  imports: [
    FormsModule,
    RouterLink,
    ScCard,
    ScCardHeader,
    ScCardTitle,
    ScCardDescription,
    ScCardContent,
    ScCardFooter,
    ScButton,
    ScInput,
    ScLabel,
    ScPasswordInput,
    ScCheckbox,
    ScSelect,
    ScSelectTrigger,
    ScSelectContent,
    ScSelectItem,
    ScStepper,
    ScStepperList,
    ScStepperItem,
    ScStepperTrigger,
    ScStepperSeparator,
    ScStepperContent,
    ScStepperTitle,
    ScStepperDescription,
    ScStepperPrevious,
    ScStepperNext,
  ],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <div class="w-full max-w-2xl space-y-6">
        <!-- Logo -->
        <div class="flex flex-col items-center text-center">
          <a routerLink="/" class="flex items-center gap-2 mb-4">
            <div class="size-10 rounded-lg bg-primary flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-primary-foreground"
                aria-hidden="true"
              >
                <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
              </svg>
            </div>
            <span class="text-xl font-bold">SC Components</span>
          </a>
          <h1 class="text-2xl font-bold">Create an account</h1>
          <p class="text-muted-foreground">Complete the steps below to get started</p>
        </div>

        <div sc-card>
          <div sc-card-content class="pt-6">
            <div sc-stepper [(activeStep)]="currentStep">
              <!-- Stepper Header -->
              <div sc-stepper-list class="mb-8">
                <div sc-stepper-item [step]="0">
                  <button sc-stepper-trigger></button>
                  <div class="flex flex-col">
                    <span sc-stepper-title>Account</span>
                    <span sc-stepper-description class="hidden sm:block">Email & Password</span>
                  </div>
                </div>
                <div sc-stepper-separator></div>
                <div sc-stepper-item [step]="1">
                  <button sc-stepper-trigger></button>
                  <div class="flex flex-col">
                    <span sc-stepper-title>Profile</span>
                    <span sc-stepper-description class="hidden sm:block">Personal Info</span>
                  </div>
                </div>
                <div sc-stepper-separator></div>
                <div sc-stepper-item [step]="2">
                  <button sc-stepper-trigger></button>
                  <div class="flex flex-col">
                    <span sc-stepper-title>Preferences</span>
                    <span sc-stepper-description class="hidden sm:block">Settings</span>
                  </div>
                </div>
                <div sc-stepper-separator></div>
                <div sc-stepper-item [step]="3">
                  <button sc-stepper-trigger></button>
                  <div class="flex flex-col">
                    <span sc-stepper-title>Complete</span>
                    <span sc-stepper-description class="hidden sm:block">Review</span>
                  </div>
                </div>
              </div>

              <!-- Step 1: Account -->
              <div sc-stepper-content [step]="0">
                <div class="space-y-4">
                  <div class="space-y-2">
                    <label sc-label for="email">Email Address</label>
                    <input
                      sc-input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      [(ngModel)]="formData.email"
                    />
                  </div>
                  <div class="space-y-2">
                    <label sc-label for="password">Password</label>
                    <sc-password-input
                      id="password"
                      placeholder="Create a strong password"
                      [(value)]="formData.password"
                    />
                    <p class="text-xs text-muted-foreground">
                      Must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number.
                    </p>
                  </div>
                  <div class="space-y-2">
                    <label sc-label for="confirmPassword">Confirm Password</label>
                    <sc-password-input
                      id="confirmPassword"
                      placeholder="Confirm your password"
                      [(value)]="formData.confirmPassword"
                    />
                  </div>
                </div>
              </div>

              <!-- Step 2: Profile -->
              <div sc-stepper-content [step]="1">
                <div class="space-y-4">
                  <div class="grid gap-4 sm:grid-cols-2">
                    <div class="space-y-2">
                      <label sc-label for="firstName">First Name</label>
                      <input
                        sc-input
                        id="firstName"
                        placeholder="John"
                        [(ngModel)]="formData.firstName"
                      />
                    </div>
                    <div class="space-y-2">
                      <label sc-label for="lastName">Last Name</label>
                      <input
                        sc-input
                        id="lastName"
                        placeholder="Doe"
                        [(ngModel)]="formData.lastName"
                      />
                    </div>
                  </div>
                  <div class="space-y-2">
                    <label sc-label for="company">Company (Optional)</label>
                    <input
                      sc-input
                      id="company"
                      placeholder="Acme Inc."
                      [(ngModel)]="formData.company"
                    />
                  </div>
                  <div class="space-y-2">
                    <label sc-label for="role">Role</label>
                    <div sc-select [(value)]="formData.role">
                      <button sc-select-trigger id="role" class="w-full">
                        {{ formData.role || 'Select your role' }}
                      </button>
                      <div sc-select-content>
                        <div sc-select-item value="Developer">Developer</div>
                        <div sc-select-item value="Designer">Designer</div>
                        <div sc-select-item value="Product Manager">Product Manager</div>
                        <div sc-select-item value="Marketing">Marketing</div>
                        <div sc-select-item value="Other">Other</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Step 3: Preferences -->
              <div sc-stepper-content [step]="2">
                <div class="space-y-6">
                  <div class="space-y-2">
                    <label sc-label for="country">Country</label>
                    <div sc-select [(value)]="formData.country">
                      <button sc-select-trigger id="country" class="w-full">
                        {{ formData.country || 'Select your country' }}
                      </button>
                      <div sc-select-content>
                        <div sc-select-item value="United States">United States</div>
                        <div sc-select-item value="Canada">Canada</div>
                        <div sc-select-item value="United Kingdom">United Kingdom</div>
                        <div sc-select-item value="Germany">Germany</div>
                        <div sc-select-item value="France">France</div>
                        <div sc-select-item value="Australia">Australia</div>
                        <div sc-select-item value="Other">Other</div>
                      </div>
                    </div>
                  </div>

                  <div class="space-y-4">
                    <label sc-label>Communication Preferences</label>
                    <div class="space-y-3">
                      <div class="flex items-start space-x-3">
                        <input sc-checkbox id="marketing" [(ngModel)]="formData.marketingEmails" />
                        <div class="space-y-1">
                          <label for="marketing" class="text-sm font-medium cursor-pointer">
                            Marketing emails
                          </label>
                          <p class="text-xs text-muted-foreground">
                            Receive news about products, features, and updates.
                          </p>
                        </div>
                      </div>
                      <div class="flex items-start space-x-3">
                        <input sc-checkbox id="security" [(ngModel)]="formData.securityEmails" />
                        <div class="space-y-1">
                          <label for="security" class="text-sm font-medium cursor-pointer">
                            Security alerts
                          </label>
                          <p class="text-xs text-muted-foreground">
                            Important notifications about your account security.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Step 4: Complete -->
              <div sc-stepper-content [step]="3">
                <div class="space-y-6">
                  <div class="rounded-lg bg-muted p-6 space-y-4">
                    <h3 class="font-semibold">Review Your Information</h3>
                    <div class="grid gap-3 text-sm">
                      <div class="flex justify-between">
                        <span class="text-muted-foreground">Email:</span>
                        <span>{{ formData.email || 'Not provided' }}</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-muted-foreground">Name:</span>
                        <span>{{ formData.firstName }} {{ formData.lastName }}</span>
                      </div>
                      @if (formData.company) {
                        <div class="flex justify-between">
                          <span class="text-muted-foreground">Company:</span>
                          <span>{{ formData.company }}</span>
                        </div>
                      }
                      <div class="flex justify-between">
                        <span class="text-muted-foreground">Role:</span>
                        <span>{{ formData.role || 'Not selected' }}</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-muted-foreground">Country:</span>
                        <span>{{ formData.country || 'Not selected' }}</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <input sc-checkbox id="terms" [(ngModel)]="formData.acceptTerms" />
                    <label for="terms" class="text-sm cursor-pointer">
                      I agree to the
                      <a routerLink="/register" class="text-primary hover:underline">
                        Terms of Service
                      </a>
                      and
                      <a routerLink="/register" class="text-primary hover:underline">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                </div>
              </div>

              <!-- Navigation Buttons -->
              <div class="mt-8 flex justify-between">
                <button sc-stepper-previous>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-2"
                    aria-hidden="true"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  Previous
                </button>
                @if (currentStep() < 3) {
                  <button sc-stepper-next>
                    Next
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="ml-2"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                } @else {
                  <button
                    sc-button
                    (click)="onSubmit()"
                    [disabled]="!formData.acceptTerms || isLoading()"
                  >
                    @if (isLoading()) {
                      <svg
                        class="mr-2 h-4 w-4 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          class="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"
                        ></circle>
                        <path
                          class="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Creating account...
                    } @else {
                      Create Account
                    }
                  </button>
                }
              </div>
            </div>
          </div>

          <div sc-card-footer class="flex justify-center">
            <p class="text-sm text-muted-foreground">
              Already have an account?
              <a routerLink="/login" class="text-primary hover:underline font-medium">Sign in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  host: {
    class: 'block',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegisterPage {
  readonly currentStep = signal(0);
  readonly isLoading = signal(false);

  readonly formData = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    company: '',
    role: '',
    country: '',
    marketingEmails: true,
    securityEmails: true,
    acceptTerms: false,
  };

  onSubmit(): void {
    if (!this.formData.acceptTerms) return;

    this.isLoading.set(true);
    // Simulate API call
    setTimeout(() => {
      this.isLoading.set(false);
    }, 1500);
  }
}
