import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Directive,
  ElementRef,
  inject,
  InjectionToken,
  input,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

// Chart colors from CSS variables
export const CHART_COLORS = [
  'hsl(var(--chart-1))',
  'hsl(var(--chart-2))',
  'hsl(var(--chart-3))',
  'hsl(var(--chart-4))',
  'hsl(var(--chart-5))',
] as const;

export interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface ChartConfig {
  [key: string]: {
    label: string;
    color?: string;
  };
}

// Token for chart context
export const SC_CHART = new InjectionToken<ScChartContainer>('SC_CHART');

// ============================================================================
// ChartContainer
// ============================================================================
@Directive({
  selector: '[sc-chart-container]',
  providers: [{ provide: SC_CHART, useExisting: ScChartContainer }],
  host: {
    'data-slot': 'chart-container',
    '[class]': 'class()',
  },
})
export class ScChartContainer {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly config = input<ChartConfig>({});

  protected readonly class = computed(() => cn('flex flex-col gap-4', this.classInput()));

  getColor(key: string, index: number): string {
    const cfg = this.config()[key];
    if (cfg?.color) return cfg.color;
    return CHART_COLORS[index % CHART_COLORS.length];
  }

  getLabel(key: string): string {
    return this.config()[key]?.label ?? key;
  }
}

// ============================================================================
// ChartTooltip
// ============================================================================
@Component({
  selector: '[sc-chart-tooltip]',
  template: `
    @if (visible()) {
      <div
        class="pointer-events-none absolute z-50 rounded-lg border bg-background px-3 py-1.5 text-sm shadow-md"
        [style.left.px]="x()"
        [style.top.px]="y()"
        [style.transform]="'translate(-50%, -100%) translateY(-8px)'"
      >
        <ng-content />
      </div>
    }
  `,
  host: {
    'data-slot': 'chart-tooltip',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScChartTooltip {
  readonly visible = signal(false);
  readonly x = signal(0);
  readonly y = signal(0);

  show(x: number, y: number): void {
    this.x.set(x);
    this.y.set(y);
    this.visible.set(true);
  }

  hide(): void {
    this.visible.set(false);
  }
}

// ============================================================================
// ChartLegend
// ============================================================================
@Component({
  selector: '[sc-chart-legend]',
  template: `
    <div class="flex flex-wrap items-center justify-center gap-4">
      @for (item of items(); track item.label; let i = $index) {
        <div class="flex items-center gap-2">
          <div class="size-3 rounded-sm" [style.background-color]="item.color || getColor(i)"></div>
          <span class="text-sm text-muted-foreground">{{ item.label }}</span>
        </div>
      }
    </div>
  `,
  host: {
    'data-slot': 'chart-legend',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScChartLegend {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly items = input<{ label: string; color?: string }[]>([]);

  protected readonly class = computed(() => cn('mt-4', this.classInput()));

  getColor(index: number): string {
    return CHART_COLORS[index % CHART_COLORS.length];
  }
}

// ============================================================================
// BarChart
// ============================================================================
@Component({
  selector: '[sc-bar-chart]',
  template: `
    <svg
      [attr.viewBox]="viewBox()"
      class="w-full"
      [style.height.px]="height()"
      preserveAspectRatio="xMidYMid meet"
    >
      <!-- Grid lines -->
      @for (line of gridLines(); track line) {
        <line
          [attr.x1]="padding().left"
          [attr.y1]="line.y"
          [attr.x2]="chartWidth() + padding().left"
          [attr.y2]="line.y"
          stroke="currentColor"
          class="text-border"
          stroke-dasharray="4 4"
        />
        <text
          [attr.x]="padding().left - 8"
          [attr.y]="line.y + 4"
          text-anchor="end"
          class="fill-muted-foreground text-xs"
        >
          {{ line.label }}
        </text>
      }

      <!-- Bars -->
      @for (bar of bars(); track bar.label; let i = $index) {
        <g
          class="cursor-pointer transition-opacity hover:opacity-80"
          (mouseenter)="onBarHover($event, bar, i)"
          (mouseleave)="onBarLeave()"
        >
          <rect
            [attr.x]="bar.x"
            [attr.y]="bar.y"
            [attr.width]="bar.width"
            [attr.height]="bar.height"
            [attr.fill]="bar.color"
            [attr.rx]="barRadius()"
          />
        </g>
      }

      <!-- X-axis labels -->
      @for (bar of bars(); track bar.label) {
        <text
          [attr.x]="bar.x + bar.width / 2"
          [attr.y]="chartHeight() + padding().top + 16"
          text-anchor="middle"
          class="fill-muted-foreground text-xs"
        >
          {{ bar.label }}
        </text>
      }
    </svg>

    @if (hoveredBar()) {
      <div
        class="pointer-events-none absolute z-50 rounded-lg border bg-background px-3 py-1.5 text-sm shadow-md"
        [style.left.px]="tooltipX()"
        [style.top.px]="tooltipY()"
        [style.transform]="'translate(-50%, -100%) translateY(-8px)'"
      >
        <div class="font-medium">{{ hoveredBar()!.label }}</div>
        <div class="text-muted-foreground">{{ hoveredBar()!.value }}</div>
      </div>
    }
  `,
  host: {
    'data-slot': 'bar-chart',
    '[class]': 'class()',
    class: 'relative block',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScBarChart {
  private readonly container = inject(SC_CHART, { optional: true });

  readonly classInput = input<string>('', { alias: 'class' });
  readonly data = input<ChartDataPoint[]>([]);
  readonly height = input<number>(300);
  readonly barRadius = input<number>(4);
  readonly barGap = input<number>(8);

  readonly hoveredBar = signal<ChartDataPoint | null>(null);
  readonly tooltipX = signal(0);
  readonly tooltipY = signal(0);

  protected readonly padding = computed(() => ({ top: 20, right: 20, bottom: 30, left: 50 }));
  protected readonly chartWidth = computed(() => 400 - this.padding().left - this.padding().right);
  protected readonly chartHeight = computed(
    () => this.height() - this.padding().top - this.padding().bottom,
  );
  protected readonly viewBox = computed(() => `0 0 400 ${this.height()}`);

  protected readonly class = computed(() => cn('', this.classInput()));

  protected readonly maxValue = computed(() => {
    const values = this.data().map((d) => d.value);
    return Math.max(...values, 0) * 1.1; // Add 10% padding
  });

  protected readonly gridLines = computed(() => {
    const max = this.maxValue();
    const lines: { y: number; label: string }[] = [];
    const steps = 5;

    for (let i = 0; i <= steps; i++) {
      const value = (max / steps) * i;
      const y = this.padding().top + this.chartHeight() - (value / max) * this.chartHeight();
      lines.push({ y, label: Math.round(value).toString() });
    }

    return lines;
  });

  protected readonly bars = computed(() => {
    const data = this.data();
    const barCount = data.length;
    const totalGaps = (barCount - 1) * this.barGap();
    const barWidth = (this.chartWidth() - totalGaps) / barCount;
    const max = this.maxValue();

    return data.map((d, i) => {
      const barHeight = (d.value / max) * this.chartHeight();
      const color =
        d.color || this.container?.getColor(d.label, i) || CHART_COLORS[i % CHART_COLORS.length];

      return {
        ...d,
        x: this.padding().left + i * (barWidth + this.barGap()),
        y: this.padding().top + this.chartHeight() - barHeight,
        width: barWidth,
        height: barHeight,
        color,
      };
    });
  });

  onBarHover(event: MouseEvent, bar: ChartDataPoint, _index: number): void {
    const rect = (event.target as SVGElement).getBoundingClientRect();
    const parentRect = (event.target as SVGElement)
      .closest('[sc-bar-chart]')
      ?.getBoundingClientRect();
    if (parentRect) {
      this.tooltipX.set(rect.left - parentRect.left + rect.width / 2);
      this.tooltipY.set(rect.top - parentRect.top);
    }
    this.hoveredBar.set(bar);
  }

  onBarLeave(): void {
    this.hoveredBar.set(null);
  }
}

// ============================================================================
// LineChart
// ============================================================================
@Component({
  selector: '[sc-line-chart]',
  template: `
    <svg
      [attr.viewBox]="viewBox()"
      class="w-full"
      [style.height.px]="height()"
      preserveAspectRatio="xMidYMid meet"
    >
      <!-- Grid lines -->
      @for (line of gridLines(); track line) {
        <line
          [attr.x1]="padding().left"
          [attr.y1]="line.y"
          [attr.x2]="chartWidth() + padding().left"
          [attr.y2]="line.y"
          stroke="currentColor"
          class="text-border"
          stroke-dasharray="4 4"
        />
        <text
          [attr.x]="padding().left - 8"
          [attr.y]="line.y + 4"
          text-anchor="end"
          class="fill-muted-foreground text-xs"
        >
          {{ line.label }}
        </text>
      }

      <!-- Area fill -->
      @if (showArea()) {
        <path [attr.d]="areaPath()" [attr.fill]="areaColor()" class="opacity-20" />
      }

      <!-- Line -->
      <path
        [attr.d]="linePath()"
        fill="none"
        [attr.stroke]="lineColor()"
        stroke-width="2"
        stroke-linecap="round"
      />

      <!-- Points -->
      @if (showPoints()) {
        @for (point of points(); track point.label; let i = $index) {
          <circle
            [attr.cx]="point.x"
            [attr.cy]="point.y"
            r="4"
            [attr.fill]="lineColor()"
            class="cursor-pointer transition-all hover:r-6"
            (mouseenter)="onPointHover($event, point)"
            (mouseleave)="onPointLeave()"
          />
        }
      }

      <!-- X-axis labels -->
      @for (point of points(); track point.label; let i = $index) {
        @if (i % labelStep() === 0) {
          <text
            [attr.x]="point.x"
            [attr.y]="chartHeight() + padding().top + 16"
            text-anchor="middle"
            class="fill-muted-foreground text-xs"
          >
            {{ point.label }}
          </text>
        }
      }
    </svg>

    @if (hoveredPoint()) {
      <div
        class="pointer-events-none absolute z-50 rounded-lg border bg-background px-3 py-1.5 text-sm shadow-md"
        [style.left.px]="tooltipX()"
        [style.top.px]="tooltipY()"
        [style.transform]="'translate(-50%, -100%) translateY(-8px)'"
      >
        <div class="font-medium">{{ hoveredPoint()!.label }}</div>
        <div class="text-muted-foreground">{{ hoveredPoint()!.value }}</div>
      </div>
    }
  `,
  host: {
    'data-slot': 'line-chart',
    '[class]': 'class()',
    class: 'relative block',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScLineChart {
  private readonly container = inject(SC_CHART, { optional: true });

  readonly classInput = input<string>('', { alias: 'class' });
  readonly data = input<ChartDataPoint[]>([]);
  readonly height = input<number>(300);
  readonly showArea = input<boolean>(false);
  readonly showPoints = input<boolean>(true);
  readonly color = input<string>('');
  readonly labelStep = input<number>(1);

  readonly hoveredPoint = signal<ChartDataPoint | null>(null);
  readonly tooltipX = signal(0);
  readonly tooltipY = signal(0);

  protected readonly padding = computed(() => ({ top: 20, right: 20, bottom: 30, left: 50 }));
  protected readonly chartWidth = computed(() => 400 - this.padding().left - this.padding().right);
  protected readonly chartHeight = computed(
    () => this.height() - this.padding().top - this.padding().bottom,
  );
  protected readonly viewBox = computed(() => `0 0 400 ${this.height()}`);

  protected readonly class = computed(() => cn('', this.classInput()));

  protected readonly lineColor = computed(
    () => this.color() || this.container?.getColor('line', 0) || CHART_COLORS[0],
  );
  protected readonly areaColor = computed(() => this.lineColor());

  protected readonly maxValue = computed(() => {
    const values = this.data().map((d) => d.value);
    return Math.max(...values, 0) * 1.1;
  });

  protected readonly gridLines = computed(() => {
    const max = this.maxValue();
    const lines: { y: number; label: string }[] = [];
    const steps = 5;

    for (let i = 0; i <= steps; i++) {
      const value = (max / steps) * i;
      const y = this.padding().top + this.chartHeight() - (value / max) * this.chartHeight();
      lines.push({ y, label: Math.round(value).toString() });
    }

    return lines;
  });

  protected readonly points = computed(() => {
    const data = this.data();
    const max = this.maxValue();
    const stepX = this.chartWidth() / Math.max(data.length - 1, 1);

    return data.map((d, i) => ({
      ...d,
      x: this.padding().left + i * stepX,
      y: this.padding().top + this.chartHeight() - (d.value / max) * this.chartHeight(),
    }));
  });

  protected readonly linePath = computed(() => {
    const pts = this.points();
    if (pts.length === 0) return '';

    return pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  });

  protected readonly areaPath = computed(() => {
    const pts = this.points();
    if (pts.length === 0) return '';

    const baseline = this.padding().top + this.chartHeight();
    const linePart = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

    return `${linePart} L ${pts[pts.length - 1].x} ${baseline} L ${pts[0].x} ${baseline} Z`;
  });

  onPointHover(event: MouseEvent, point: ChartDataPoint): void {
    const circle = event.target as SVGElement;
    const parentRect = circle.closest('[sc-line-chart]')?.getBoundingClientRect();
    const circleRect = circle.getBoundingClientRect();
    if (parentRect) {
      this.tooltipX.set(circleRect.left - parentRect.left + circleRect.width / 2);
      this.tooltipY.set(circleRect.top - parentRect.top);
    }
    this.hoveredPoint.set(point);
  }

  onPointLeave(): void {
    this.hoveredPoint.set(null);
  }
}

// ============================================================================
// PieChart
// ============================================================================
@Component({
  selector: '[sc-pie-chart]',
  template: `
    <svg
      [attr.viewBox]="viewBox()"
      class="w-full"
      [style.height.px]="size()"
      preserveAspectRatio="xMidYMid meet"
    >
      @for (slice of slices(); track slice.label; let i = $index) {
        <path
          [attr.d]="slice.path"
          [attr.fill]="slice.color"
          class="cursor-pointer transition-opacity hover:opacity-80"
          (mouseenter)="onSliceHover($event, slice)"
          (mouseleave)="onSliceLeave()"
        />
      }

      @if (showLabels()) {
        @for (slice of slices(); track slice.label) {
          <text
            [attr.x]="slice.labelX"
            [attr.y]="slice.labelY"
            text-anchor="middle"
            class="pointer-events-none fill-background text-xs font-medium"
          >
            {{ slice.percentage }}%
          </text>
        }
      }
    </svg>

    @if (hoveredSlice()) {
      <div
        class="pointer-events-none absolute z-50 rounded-lg border bg-background px-3 py-1.5 text-sm shadow-md"
        [style.left.px]="tooltipX()"
        [style.top.px]="tooltipY()"
        [style.transform]="'translate(-50%, -100%) translateY(-8px)'"
      >
        <div class="flex items-center gap-2">
          <div class="size-3 rounded-sm" [style.background-color]="hoveredSlice()!.color"></div>
          <span class="font-medium">{{ hoveredSlice()!.label }}</span>
        </div>
        <div class="text-muted-foreground">
          {{ hoveredSlice()!.value }} ({{ hoveredSlice()!.percentage }}%)
        </div>
      </div>
    }
  `,
  host: {
    'data-slot': 'pie-chart',
    '[class]': 'class()',
    class: 'relative block',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPieChart {
  private readonly container = inject(SC_CHART, { optional: true });

  readonly classInput = input<string>('', { alias: 'class' });
  readonly data = input<ChartDataPoint[]>([]);
  readonly size = input<number>(300);
  readonly innerRadius = input<number>(0); // 0 for pie, >0 for donut
  readonly showLabels = input<boolean>(true);

  readonly hoveredSlice = signal<(ChartDataPoint & { percentage: number; color: string }) | null>(
    null,
  );
  readonly tooltipX = signal(0);
  readonly tooltipY = signal(0);

  protected readonly viewBox = computed(() => `0 0 ${this.size()} ${this.size()}`);
  protected readonly class = computed(() => cn('', this.classInput()));

  protected readonly total = computed(() => this.data().reduce((sum, d) => sum + d.value, 0));

  protected readonly slices = computed(() => {
    const data = this.data();
    const total = this.total();
    const centerX = this.size() / 2;
    const centerY = this.size() / 2;
    const outerRadius = this.size() / 2 - 10;
    const innerR = this.innerRadius();

    let startAngle = -Math.PI / 2;
    const slices: {
      label: string;
      value: number;
      percentage: number;
      path: string;
      color: string;
      labelX: number;
      labelY: number;
    }[] = [];

    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      const percentage = Math.round((d.value / total) * 100);
      const angle = (d.value / total) * 2 * Math.PI;
      const endAngle = startAngle + angle;

      const x1 = centerX + outerRadius * Math.cos(startAngle);
      const y1 = centerY + outerRadius * Math.sin(startAngle);
      const x2 = centerX + outerRadius * Math.cos(endAngle);
      const y2 = centerY + outerRadius * Math.sin(endAngle);

      const largeArc = angle > Math.PI ? 1 : 0;
      const color =
        d.color || this.container?.getColor(d.label, i) || CHART_COLORS[i % CHART_COLORS.length];

      let path: string;
      if (innerR > 0) {
        const ix1 = centerX + innerR * Math.cos(startAngle);
        const iy1 = centerY + innerR * Math.sin(startAngle);
        const ix2 = centerX + innerR * Math.cos(endAngle);
        const iy2 = centerY + innerR * Math.sin(endAngle);

        path = `M ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x2} ${y2} L ${ix2} ${iy2} A ${innerR} ${innerR} 0 ${largeArc} 0 ${ix1} ${iy1} Z`;
      } else {
        path = `M ${centerX} ${centerY} L ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x2} ${y2} Z`;
      }

      const labelAngle = startAngle + angle / 2;
      const labelRadius = innerR > 0 ? (outerRadius + innerR) / 2 : outerRadius * 0.6;
      const labelX = centerX + labelRadius * Math.cos(labelAngle);
      const labelY = centerY + labelRadius * Math.sin(labelAngle);

      slices.push({
        label: d.label,
        value: d.value,
        percentage,
        path,
        color,
        labelX,
        labelY,
      });

      startAngle = endAngle;
    }

    return slices;
  });

  onSliceHover(
    event: MouseEvent,
    slice: { label: string; value: number; percentage: number; color: string },
  ): void {
    const path = event.target as SVGElement;
    const parentRect = path.closest('[sc-pie-chart]')?.getBoundingClientRect();
    if (parentRect) {
      const pathRect = path.getBoundingClientRect();
      this.tooltipX.set(pathRect.left - parentRect.left + pathRect.width / 2);
      this.tooltipY.set(pathRect.top - parentRect.top);
    }
    this.hoveredSlice.set(slice);
  }

  onSliceLeave(): void {
    this.hoveredSlice.set(null);
  }
}

// ============================================================================
// DonutChart (alias for PieChart with innerRadius)
// ============================================================================
@Component({
  selector: '[sc-donut-chart]',
  template: `
    <div
      sc-pie-chart
      [data]="data()"
      [size]="size()"
      [innerRadius]="innerRadius()"
      [showLabels]="showLabels()"
      [class]="classInput()"
    ></div>
  `,
  imports: [ScPieChart],
  host: {
    'data-slot': 'donut-chart',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDonutChart {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly data = input<ChartDataPoint[]>([]);
  readonly size = input<number>(300);
  readonly innerRadius = input<number>(60);
  readonly showLabels = input<boolean>(false);
}
