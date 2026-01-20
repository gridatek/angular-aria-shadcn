import { Component } from '@angular/core';
import { ScBarcodeScannerDemo } from '../../examples/barcode-scanner';

@Component({
  selector: 'app-barcode-scanner-page',
  imports: [ScBarcodeScannerDemo],
  template: `
    <div class="container py-10">
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2">Barcode Scanner</h1>
        <p class="text-muted-foreground">
          Scan barcodes and QR codes using your device's camera with the Barcode Detection API.
        </p>
      </div>
      <sc-barcode-scanner-demo />
    </div>
  `,
})
export default class BarcodeScannerPage {}
