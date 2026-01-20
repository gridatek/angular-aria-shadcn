import { Component } from '@angular/core';
import { ScLightboxDemo } from '../../examples/lightbox';

@Component({
  selector: 'app-lightbox-page',
  imports: [ScLightboxDemo],
  template: `
    <div class="container py-10">
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2">Lightbox</h1>
        <p class="text-muted-foreground">
          Full-screen image viewer with zoom, navigation, and keyboard support.
        </p>
      </div>
      <sc-lightbox-demo />
    </div>
  `,
})
export default class LightboxPage {}
