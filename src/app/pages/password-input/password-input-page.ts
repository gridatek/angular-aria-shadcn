import { Component } from '@angular/core';
import { ScPasswordInputDemo } from '../../examples/password-input';

@Component({
  selector: 'app-password-input-page',
  imports: [ScPasswordInputDemo],
  template: `
    <div class="container py-10">
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2">Password Input</h1>
        <p class="text-muted-foreground">
          Password input with show/hide toggle, strength indicator, and confirmation support.
        </p>
      </div>
      <sc-password-input-demo />
    </div>
  `,
})
export default class PasswordInputPage {}
