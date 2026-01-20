import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScImageCropperDemo } from '../../examples/image-cropper/sc-image-cropper-demo';

@Component({
  selector: 'app-image-cropper-page',
  imports: [ScImageCropperDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Image Cropper</h1>
        <p class="text-muted-foreground">
          An interactive image cropping component with drag, resize, zoom, and aspect ratio
          controls.
        </p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Crop and resize images with an intuitive interface. Supports aspect ratio presets, zoom
            controls, and live preview.
          </p>
        </div>
        <div>
          <app-sc-image-cropper-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ImageCropperPage {}
