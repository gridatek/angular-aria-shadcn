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
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

export interface HSV {
  h: number; // 0-360
  s: number; // 0-100
  v: number; // 0-100
}

export interface RGB {
  r: number; // 0-255
  g: number; // 0-255
  b: number; // 0-255
}

export interface HSL {
  h: number; // 0-360
  s: number; // 0-100
  l: number; // 0-100
}

// Token for color picker context
export const SC_COLOR_PICKER = new InjectionToken<ScColorPicker>('SC_COLOR_PICKER');

// Color conversion utilities
function hsvToRgb(h: number, s: number, v: number): RGB {
  s = s / 100;
  v = v / 100;
  const c = v * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v - c;

  let r = 0,
    g = 0,
    b = 0;
  if (h < 60) {
    r = c;
    g = x;
  } else if (h < 120) {
    r = x;
    g = c;
  } else if (h < 180) {
    g = c;
    b = x;
  } else if (h < 240) {
    g = x;
    b = c;
  } else if (h < 300) {
    r = x;
    b = c;
  } else {
    r = c;
    b = x;
  }

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  };
}

function rgbToHsv(r: number, g: number, b: number): HSV {
  r = r / 255;
  g = g / 255;
  b = b / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;

  let h = 0;
  const s = max === 0 ? 0 : (d / max) * 100;
  const v = max * 100;

  if (d !== 0) {
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) * 60;
        break;
      case g:
        h = ((b - r) / d + 2) * 60;
        break;
      case b:
        h = ((r - g) / d + 4) * 60;
        break;
    }
  }

  return { h: Math.round(h), s: Math.round(s), v: Math.round(v) };
}

function rgbToHex(r: number, g: number, b: number): string {
  return `#${[r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('')}`;
}

function hexToRgb(hex: string): RGB | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function rgbToHsl(r: number, g: number, b: number): HSL {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

// ============================================================================
// ColorPicker
// ============================================================================
@Directive({
  selector: '[sc-color-picker]',
  providers: [{ provide: SC_COLOR_PICKER, useExisting: ScColorPicker }],
  host: {
    'data-slot': 'color-picker',
    '[class]': 'class()',
  },
})
export class ScColorPicker {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly value = model<string>('#000000');
  readonly disabled = input<boolean>(false);

  // Internal HSV state for smooth picking
  private readonly _hsv = signal<HSV>({ h: 0, s: 0, v: 0 });

  protected readonly class = computed(() => cn('inline-block', this.classInput()));

  readonly hsv = computed(() => this._hsv());
  readonly rgb = computed(() => {
    const { h, s, v } = this._hsv();
    return hsvToRgb(h, s, v);
  });
  readonly hsl = computed(() => {
    const { r, g, b } = this.rgb();
    return rgbToHsl(r, g, b);
  });
  readonly hex = computed(() => {
    const { r, g, b } = this.rgb();
    return rgbToHex(r, g, b);
  });

  constructor() {
    // Initialize HSV from value
    const rgb = hexToRgb(this.value());
    if (rgb) {
      this._hsv.set(rgbToHsv(rgb.r, rgb.g, rgb.b));
    }
  }

  setHsv(hsv: Partial<HSV>): void {
    const current = this._hsv();
    const newHsv = { ...current, ...hsv };
    this._hsv.set(newHsv);
    const { r, g, b } = hsvToRgb(newHsv.h, newHsv.s, newHsv.v);
    this.value.set(rgbToHex(r, g, b));
  }

  setRgb(rgb: Partial<RGB>): void {
    const current = this.rgb();
    const newRgb = { ...current, ...rgb };
    this._hsv.set(rgbToHsv(newRgb.r, newRgb.g, newRgb.b));
    this.value.set(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
  }

  setHex(hex: string): void {
    const rgb = hexToRgb(hex);
    if (rgb) {
      this._hsv.set(rgbToHsv(rgb.r, rgb.g, rgb.b));
      this.value.set(hex.startsWith('#') ? hex : `#${hex}`);
    }
  }

  setHue(h: number): void {
    this.setHsv({ h: Math.max(0, Math.min(360, h)) });
  }

  setSaturation(s: number): void {
    this.setHsv({ s: Math.max(0, Math.min(100, s)) });
  }

  setValue(v: number): void {
    this.setHsv({ v: Math.max(0, Math.min(100, v)) });
  }
}

// ============================================================================
// ColorPickerArea (saturation/brightness selector)
// ============================================================================
@Component({
  selector: '[sc-color-picker-area]',
  template: `
    <div
      class="relative size-full cursor-crosshair rounded-md"
      [style.background]="'hsl(' + colorPicker.hsv().h + ', 100%, 50%)'"
      (mousedown)="onMouseDown($event)"
      (touchstart)="onTouchStart($event)"
    >
      <div class="absolute inset-0 rounded-md bg-gradient-to-r from-white to-transparent"></div>
      <div class="absolute inset-0 rounded-md bg-gradient-to-t from-black to-transparent"></div>
      <div
        class="absolute size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-md"
        [style.left.%]="colorPicker.hsv().s"
        [style.top.%]="100 - colorPicker.hsv().v"
        [style.background-color]="colorPicker.hex()"
      ></div>
    </div>
  `,
  host: {
    'data-slot': 'color-picker-area',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScColorPickerArea {
  readonly colorPicker = inject(SC_COLOR_PICKER);
  private readonly elementRef = inject(ElementRef);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('block h-40 w-full', this.classInput()));

  onMouseDown(event: MouseEvent): void {
    if (this.colorPicker.disabled()) return;
    this.updateFromEvent(event);
    const onMouseMove = (e: MouseEvent) => this.updateFromEvent(e);
    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

  onTouchStart(event: TouchEvent): void {
    if (this.colorPicker.disabled()) return;
    event.preventDefault();
    this.updateFromTouch(event);
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      this.updateFromTouch(e);
    };
    const onTouchEnd = () => {
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
    };
    document.addEventListener('touchmove', onTouchMove, { passive: false });
    document.addEventListener('touchend', onTouchEnd);
  }

  private updateFromEvent(event: MouseEvent): void {
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
    this.colorPicker.setHsv({ s: x * 100, v: (1 - y) * 100 });
  }

  private updateFromTouch(event: TouchEvent): void {
    const touch = event.touches[0];
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (touch.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (touch.clientY - rect.top) / rect.height));
    this.colorPicker.setHsv({ s: x * 100, v: (1 - y) * 100 });
  }
}

// ============================================================================
// ColorPickerHue (hue slider)
// ============================================================================
@Component({
  selector: '[sc-color-picker-hue]',
  template: `
    <div
      class="relative h-full w-full cursor-pointer rounded-md"
      style="background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)"
      (mousedown)="onMouseDown($event)"
      (touchstart)="onTouchStart($event)"
    >
      <div
        class="absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-md"
        [style.left.%]="(colorPicker.hsv().h / 360) * 100"
        [style.background]="'hsl(' + colorPicker.hsv().h + ', 100%, 50%)'"
      ></div>
    </div>
  `,
  host: {
    'data-slot': 'color-picker-hue',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScColorPickerHue {
  readonly colorPicker = inject(SC_COLOR_PICKER);
  private readonly elementRef = inject(ElementRef);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('block h-3 w-full', this.classInput()));

  onMouseDown(event: MouseEvent): void {
    if (this.colorPicker.disabled()) return;
    this.updateFromEvent(event);
    const onMouseMove = (e: MouseEvent) => this.updateFromEvent(e);
    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

  onTouchStart(event: TouchEvent): void {
    if (this.colorPicker.disabled()) return;
    event.preventDefault();
    this.updateFromTouch(event);
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      this.updateFromTouch(e);
    };
    const onTouchEnd = () => {
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
    };
    document.addEventListener('touchmove', onTouchMove, { passive: false });
    document.addEventListener('touchend', onTouchEnd);
  }

  private updateFromEvent(event: MouseEvent): void {
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    this.colorPicker.setHue(x * 360);
  }

  private updateFromTouch(event: TouchEvent): void {
    const touch = event.touches[0];
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (touch.clientX - rect.left) / rect.width));
    this.colorPicker.setHue(x * 360);
  }
}

// ============================================================================
// ColorPickerPreview
// ============================================================================
@Directive({
  selector: '[sc-color-picker-preview]',
  host: {
    'data-slot': 'color-picker-preview',
    '[class]': 'class()',
    '[style.background-color]': 'colorPicker.hex()',
  },
})
export class ScColorPickerPreview {
  readonly colorPicker = inject(SC_COLOR_PICKER);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('block size-10 rounded-md border shadow-sm', this.classInput()),
  );
}

// ============================================================================
// ColorPickerInput (hex input)
// ============================================================================
@Component({
  selector: 'input[sc-color-picker-input]',
  template: ``,
  host: {
    'data-slot': 'color-picker-input',
    type: 'text',
    '[class]': 'class()',
    '[value]': 'displayValue()',
    '[disabled]': 'colorPicker.disabled()',
    '(input)': 'onInput($event)',
    '(blur)': 'onBlur()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScColorPickerInput {
  readonly colorPicker = inject(SC_COLOR_PICKER);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly format = input<'hex' | 'rgb' | 'hsl'>('hex');

  protected readonly class = computed(() =>
    cn(
      'flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm font-mono',
      'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      this.classInput(),
    ),
  );

  protected readonly displayValue = computed(() => {
    const fmt = this.format();
    if (fmt === 'hex') {
      return this.colorPicker.hex().toUpperCase();
    } else if (fmt === 'rgb') {
      const { r, g, b } = this.colorPicker.rgb();
      return `rgb(${r}, ${g}, ${b})`;
    } else {
      const { h, s, l } = this.colorPicker.hsl();
      return `hsl(${h}, ${s}%, ${l}%)`;
    }
  });

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.trim();

    if (this.format() === 'hex') {
      const hex = value.startsWith('#') ? value : `#${value}`;
      if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
        this.colorPicker.setHex(hex);
      }
    }
  }

  onBlur(): void {
    // Reset to valid value on blur
  }
}

// ============================================================================
// ColorPickerSwatches
// ============================================================================
@Component({
  selector: '[sc-color-picker-swatches]',
  template: `
    @for (color of colors(); track color) {
      <button
        type="button"
        class="size-6 rounded-md border shadow-sm transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring"
        [style.background-color]="color"
        [attr.aria-label]="'Select color ' + color"
        (click)="selectColor(color)"
      ></button>
    }
  `,
  host: {
    'data-slot': 'color-picker-swatches',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScColorPickerSwatches {
  readonly colorPicker = inject(SC_COLOR_PICKER);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly colors = input<string[]>([
    '#ef4444',
    '#f97316',
    '#eab308',
    '#22c55e',
    '#14b8a6',
    '#06b6d4',
    '#3b82f6',
    '#8b5cf6',
    '#ec4899',
    '#000000',
    '#6b7280',
    '#ffffff',
  ]);

  protected readonly class = computed(() => cn('flex flex-wrap gap-2', this.classInput()));

  selectColor(color: string): void {
    if (!this.colorPicker.disabled()) {
      this.colorPicker.setHex(color);
    }
  }
}

// ============================================================================
// ColorPickerEyeDropper
// ============================================================================
@Component({
  selector: 'button[sc-color-picker-eyedropper]',
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
      <path d="m2 22 1-1h3l9-9" />
      <path d="M3 21v-3l9-9" />
      <path
        d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"
      />
    </svg>
    <span class="sr-only">Pick color from screen</span>
  `,
  host: {
    'data-slot': 'color-picker-eyedropper',
    type: 'button',
    '[class]': 'class()',
    '[disabled]': 'colorPicker.disabled() || !isSupported()',
    '(click)': 'pickColor()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScColorPickerEyeDropper {
  readonly colorPicker = inject(SC_COLOR_PICKER);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'inline-flex size-9 items-center justify-center rounded-md border border-input bg-background',
      'hover:bg-accent hover:text-accent-foreground',
      'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      this.classInput(),
    ),
  );

  isSupported(): boolean {
    return 'EyeDropper' in window;
  }

  async pickColor(): Promise<void> {
    if (!this.isSupported() || this.colorPicker.disabled()) return;

    try {
      // @ts-expect-error EyeDropper API not yet in TypeScript types
      const eyeDropper = new window.EyeDropper();
      const result = await eyeDropper.open();
      this.colorPicker.setHex(result.sRGBHex);
    } catch {
      // User cancelled or error
    }
  }
}
