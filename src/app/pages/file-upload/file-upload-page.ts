import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScFileUploadDemo } from '../../examples/file-upload/sc-file-upload-demo';

@Component({
  selector: 'app-file-upload-page',
  imports: [ScFileUploadDemo],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">File Upload</h1>
        <p class="text-muted-foreground">
          A drag and drop file upload zone with preview and progress support.
        </p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">SC Components</h2>
          <p class="text-sm text-muted-foreground">
            Wrapper components with clean markup and encapsulated styles
          </p>
        </div>
        <div>
          <app-sc-file-upload-demo />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FileUploadPage {}
