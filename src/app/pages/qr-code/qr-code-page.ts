import { Component } from '@angular/core';
import { ScQrCodeDemo } from '../../examples/qr-code';

@Component({
  selector: 'app-qr-code-page',
  imports: [ScQrCodeDemo],
  template: `
    <div class="container py-10">
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2">QR Code</h1>
        <p class="text-muted-foreground">
          Generate QR codes from text or URLs with customizable colors and logo support.
        </p>
      </div>
      <sc-qr-code-demo />
    </div>
  `,
})
export default class QrCodePage {}
