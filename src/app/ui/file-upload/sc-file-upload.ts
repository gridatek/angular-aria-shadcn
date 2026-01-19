import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Directive,
  ElementRef,
  inject,
  InjectionToken,
  input,
  model,
  output,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

// Token for file upload context
export const SC_FILE_UPLOAD = new InjectionToken<ScFileUpload>('SC_FILE_UPLOAD');

export interface FileUploadFile {
  file: File;
  id: string;
  progress?: number;
  status: 'pending' | 'uploading' | 'complete' | 'error';
  error?: string;
}

// ============================================================================
// FileUpload
// ============================================================================
@Directive({
  selector: '[sc-file-upload]',
  providers: [{ provide: SC_FILE_UPLOAD, useExisting: ScFileUpload }],
  host: {
    'data-slot': 'file-upload',
    '[class]': 'class()',
  },
})
export class ScFileUpload {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly multiple = input<boolean>(false);
  readonly accept = input<string>('');
  readonly maxSize = input<number>(0); // in bytes, 0 = no limit
  readonly maxFiles = input<number>(0); // 0 = no limit
  readonly disabled = input<boolean>(false);

  readonly files = model<FileUploadFile[]>([]);
  readonly filesSelected = output<File[]>();
  readonly fileRemoved = output<FileUploadFile>();
  readonly error = output<string>();

  protected readonly class = computed(() => cn('block', this.classInput()));

  private generateId(): string {
    return Math.random().toString(36).substring(2, 11);
  }

  addFiles(fileList: FileList | File[]): void {
    if (this.disabled()) return;

    const newFiles = Array.from(fileList);
    const currentFiles = this.files();
    const maxFiles = this.maxFiles();
    const maxSize = this.maxSize();
    const accept = this.accept();

    const validFiles: File[] = [];

    for (const file of newFiles) {
      // Check max files limit
      if (maxFiles > 0 && currentFiles.length + validFiles.length >= maxFiles) {
        this.error.emit(`Maximum ${maxFiles} files allowed`);
        break;
      }

      // Check file size
      if (maxSize > 0 && file.size > maxSize) {
        this.error.emit(`File "${file.name}" exceeds maximum size`);
        continue;
      }

      // Check file type
      if (accept && !this.isAcceptedType(file, accept)) {
        this.error.emit(`File "${file.name}" is not an accepted type`);
        continue;
      }

      validFiles.push(file);
    }

    if (validFiles.length > 0) {
      const uploadFiles: FileUploadFile[] = validFiles.map((file) => ({
        file,
        id: this.generateId(),
        status: 'pending' as const,
      }));

      if (this.multiple()) {
        this.files.update((files) => [...files, ...uploadFiles]);
      } else {
        this.files.set(uploadFiles.slice(0, 1));
      }

      this.filesSelected.emit(validFiles);
    }
  }

  removeFile(fileId: string): void {
    const file = this.files().find((f) => f.id === fileId);
    if (file) {
      this.files.update((files) => files.filter((f) => f.id !== fileId));
      this.fileRemoved.emit(file);
    }
  }

  updateFileProgress(fileId: string, progress: number): void {
    this.files.update((files) =>
      files.map((f) => (f.id === fileId ? { ...f, progress, status: 'uploading' as const } : f)),
    );
  }

  updateFileStatus(fileId: string, status: FileUploadFile['status'], error?: string): void {
    this.files.update((files) => files.map((f) => (f.id === fileId ? { ...f, status, error } : f)));
  }

  clearFiles(): void {
    this.files.set([]);
  }

  private isAcceptedType(file: File, accept: string): boolean {
    const acceptTypes = accept.split(',').map((t) => t.trim().toLowerCase());

    for (const acceptType of acceptTypes) {
      if (acceptType.startsWith('.')) {
        // Extension check
        if (file.name.toLowerCase().endsWith(acceptType)) {
          return true;
        }
      } else if (acceptType.endsWith('/*')) {
        // MIME type wildcard (e.g., image/*)
        const mimePrefix = acceptType.slice(0, -2);
        if (file.type.toLowerCase().startsWith(mimePrefix)) {
          return true;
        }
      } else {
        // Exact MIME type match
        if (file.type.toLowerCase() === acceptType) {
          return true;
        }
      }
    }

    return false;
  }
}

// ============================================================================
// FileUploadDropzone
// ============================================================================
@Component({
  selector: '[sc-file-upload-dropzone]',
  template: `
    <input
      #fileInput
      type="file"
      class="sr-only"
      [multiple]="fileUpload.multiple()"
      [accept]="fileUpload.accept()"
      [disabled]="fileUpload.disabled()"
      (change)="onFileSelect($event)"
    />
    <ng-content />
  `,
  host: {
    'data-slot': 'file-upload-dropzone',
    '[class]': 'class()',
    '[attr.data-dragging]': 'isDragging()',
    '[attr.data-disabled]': 'fileUpload.disabled() || null',
    '(click)': 'openFilePicker()',
    '(dragover)': 'onDragOver($event)',
    '(dragleave)': 'onDragLeave($event)',
    '(drop)': 'onDrop($event)',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFileUploadDropzone {
  readonly fileUpload = inject(SC_FILE_UPLOAD);
  private readonly elementRef = inject(ElementRef);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly isDragging = signal(false);

  protected readonly class = computed(() =>
    cn(
      'relative flex min-h-[150px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed',
      'transition-colors hover:border-primary/50 hover:bg-accent/50',
      'data-[dragging=true]:border-primary data-[dragging=true]:bg-accent',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      this.classInput(),
    ),
  );

  openFilePicker(): void {
    if (this.fileUpload.disabled()) return;
    const input = this.elementRef.nativeElement.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement;
    input?.click();
  }

  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileUpload.addFiles(input.files);
      input.value = '';
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if (!this.fileUpload.disabled()) {
      this.isDragging.set(true);
    }
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging.set(false);
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging.set(false);

    if (this.fileUpload.disabled()) return;

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.fileUpload.addFiles(files);
    }
  }
}

// ============================================================================
// FileUploadTrigger
// ============================================================================
@Component({
  selector: 'button[sc-file-upload-trigger]',
  template: `
    <input
      #fileInput
      type="file"
      class="sr-only"
      [multiple]="fileUpload.multiple()"
      [accept]="fileUpload.accept()"
      [disabled]="fileUpload.disabled()"
      (change)="onFileSelect($event)"
    />
    <ng-content />
  `,
  host: {
    'data-slot': 'file-upload-trigger',
    type: 'button',
    '[class]': 'class()',
    '[disabled]': 'fileUpload.disabled()',
    '(click)': 'openFilePicker($event)',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFileUploadTrigger {
  readonly fileUpload = inject(SC_FILE_UPLOAD);
  private readonly elementRef = inject(ElementRef);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground',
      'ring-offset-background transition-colors',
      'hover:bg-primary/90',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      this.classInput(),
    ),
  );

  openFilePicker(event: Event): void {
    event.preventDefault();
    if (this.fileUpload.disabled()) return;
    const input = this.elementRef.nativeElement.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement;
    input?.click();
  }

  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileUpload.addFiles(input.files);
      input.value = '';
    }
  }
}

// ============================================================================
// FileUploadList
// ============================================================================
@Directive({
  selector: '[sc-file-upload-list]',
  host: {
    'data-slot': 'file-upload-list',
    '[class]': 'class()',
  },
})
export class ScFileUploadList {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('mt-4 space-y-2', this.classInput()));
}

// ============================================================================
// FileUploadItem
// ============================================================================
@Component({
  selector: '[sc-file-upload-item]',
  template: `<ng-content />`,
  host: {
    'data-slot': 'file-upload-item',
    '[class]': 'class()',
    '[attr.data-status]': 'file().status',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFileUploadItem {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly file = input.required<FileUploadFile>();

  protected readonly class = computed(() =>
    cn(
      'flex items-center gap-3 rounded-lg border bg-background p-3',
      'data-[status=error]:border-destructive data-[status=error]:bg-destructive/10',
      this.classInput(),
    ),
  );
}

// ============================================================================
// FileUploadItemPreview
// ============================================================================
@Component({
  selector: '[sc-file-upload-item-preview]',
  template: `
    @if (isImage()) {
      <img [src]="previewUrl()" [alt]="file().file.name" class="size-full object-cover" />
    } @else {
      <ng-content />
    }
  `,
  host: {
    'data-slot': 'file-upload-item-preview',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFileUploadItemPreview {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly file = input.required<FileUploadFile>();

  protected readonly isImage = computed(() => this.file().file.type.startsWith('image/'));

  protected readonly previewUrl = computed(() => {
    if (this.isImage()) {
      return URL.createObjectURL(this.file().file);
    }
    return '';
  });

  protected readonly class = computed(() =>
    cn(
      'flex size-10 items-center justify-center overflow-hidden rounded bg-muted',
      this.classInput(),
    ),
  );
}

// ============================================================================
// FileUploadItemName
// ============================================================================
@Directive({
  selector: '[sc-file-upload-item-name]',
  host: {
    'data-slot': 'file-upload-item-name',
    '[class]': 'class()',
  },
})
export class ScFileUploadItemName {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('flex-1 truncate text-sm font-medium', this.classInput()),
  );
}

// ============================================================================
// FileUploadItemSize
// ============================================================================
@Component({
  selector: '[sc-file-upload-item-size]',
  template: `{{ formattedSize() }}`,
  host: {
    'data-slot': 'file-upload-item-size',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFileUploadItemSize {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly file = input.required<FileUploadFile>();

  protected readonly formattedSize = computed(() => {
    const bytes = this.file().file.size;
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  });

  protected readonly class = computed(() => cn('text-xs text-muted-foreground', this.classInput()));
}

// ============================================================================
// FileUploadItemDelete
// ============================================================================
@Component({
  selector: 'button[sc-file-upload-item-delete]',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="size-4"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
    <span class="sr-only">Remove file</span>
  `,
  host: {
    'data-slot': 'file-upload-item-delete',
    type: 'button',
    '[class]': 'class()',
    '(click)': 'onClick()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFileUploadItemDelete {
  private readonly fileUpload = inject(SC_FILE_UPLOAD);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly fileId = input.required<string>();

  protected readonly class = computed(() =>
    cn(
      'inline-flex size-8 items-center justify-center rounded-md text-muted-foreground',
      'transition-colors hover:bg-accent hover:text-foreground',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
      this.classInput(),
    ),
  );

  onClick(): void {
    this.fileUpload.removeFile(this.fileId());
  }
}

// ============================================================================
// FileUploadItemProgress
// ============================================================================
@Component({
  selector: '[sc-file-upload-item-progress]',
  template: `
    <div
      class="h-full rounded-full bg-primary transition-all"
      [style.width.%]="file().progress || 0"
    ></div>
  `,
  host: {
    'data-slot': 'file-upload-item-progress',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFileUploadItemProgress {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly file = input.required<FileUploadFile>();

  protected readonly class = computed(() =>
    cn('h-1 w-full overflow-hidden rounded-full bg-muted', this.classInput()),
  );
}
