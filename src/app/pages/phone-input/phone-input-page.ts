import { Component } from '@angular/core';
import { ScPhoneInputDemo } from '../../examples/phone-input';

@Component({
  selector: 'app-phone-input-page',
  imports: [ScPhoneInputDemo],
  template: `
    <div class="container py-10">
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2">Phone Input</h1>
        <p class="text-muted-foreground">
          Phone number input with country code selector and formatting options.
        </p>
      </div>
      <sc-phone-input-demo />
    </div>
  `,
})
export default class PhoneInputPage {}
