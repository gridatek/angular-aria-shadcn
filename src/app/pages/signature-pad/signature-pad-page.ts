import { Component } from '@angular/core';
import { ScSignaturePadDemo } from '../../examples/signature-pad';

@Component({
  selector: 'app-signature-pad-page',
  imports: [ScSignaturePadDemo],
  template: `
    <div class="container py-10">
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2">Signature Pad</h1>
        <p class="text-muted-foreground">
          Canvas-based signature capture with touch and mouse support.
        </p>
      </div>
      <sc-signature-pad-demo />
    </div>
  `,
})
export default class SignaturePadPage {}
