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
import { ScSeparator } from '../../../ui/separator';

@Component({
  selector: 'app-login-page',
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
    ScSeparator,
  ],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <div class="w-full max-w-md space-y-6">
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
          <h1 class="text-2xl font-bold">Welcome back</h1>
          <p class="text-muted-foreground">Enter your credentials to access your account</p>
        </div>

        <div sc-card>
          <div sc-card-content class="pt-6">
            <form (submit)="onSubmit($event)" class="space-y-4">
              <div class="space-y-2">
                <label sc-label for="email">Email</label>
                <input
                  sc-input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  [(ngModel)]="email"
                  name="email"
                  required
                />
              </div>

              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <label sc-label for="password">Password</label>
                  <a routerLink="/login" class="text-sm text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>
                <sc-password-input
                  id="password"
                  placeholder="Enter your password"
                  [(value)]="password"
                />
              </div>

              <div class="flex items-center space-x-2">
                <input sc-checkbox id="remember" [(ngModel)]="rememberMe" name="remember" />
                <label
                  for="remember"
                  class="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>

              <button sc-button type="submit" class="w-full" [disabled]="isLoading()">
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
                  Signing in...
                } @else {
                  Sign In
                }
              </button>
            </form>

            <div class="relative my-6">
              <div class="absolute inset-0 flex items-center">
                <span sc-separator class="w-full"></span>
              </div>
              <div class="relative flex justify-center text-xs uppercase">
                <span class="bg-card px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <button sc-button variant="outline" type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="mr-2 h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </button>
              <button sc-button variant="outline" type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="mr-2 h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                GitHub
              </button>
            </div>
          </div>

          <div sc-card-footer class="flex justify-center">
            <p class="text-sm text-muted-foreground">
              Don't have an account?
              <a routerLink="/register" class="text-primary hover:underline font-medium">
                Sign up
              </a>
            </p>
          </div>
        </div>

        <p class="text-center text-xs text-muted-foreground">
          By clicking continue, you agree to our
          <a routerLink="/login" class="underline hover:text-primary">Terms of Service</a>
          and
          <a routerLink="/login" class="underline hover:text-primary">Privacy Policy</a>.
        </p>
      </div>
    </div>
  `,
  host: {
    class: 'block',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginPage {
  email = '';
  password = '';
  rememberMe = false;
  readonly isLoading = signal(false);

  onSubmit(event: Event): void {
    event.preventDefault();
    this.isLoading.set(true);

    // Simulate API call
    setTimeout(() => {
      this.isLoading.set(false);
    }, 1500);
  }
}
