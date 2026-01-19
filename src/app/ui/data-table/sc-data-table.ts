import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChildren,
  Directive,
  inject,
  InjectionToken,
  input,
  model,
  output,
  signal,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

export type SortDirection = 'asc' | 'desc' | null;

export interface ColumnDef<T> {
  id: string;
  header: string;
  accessorKey?: keyof T;
  accessorFn?: (row: T) => unknown;
  cell?: (row: T) => string;
  enableSorting?: boolean;
  enableHiding?: boolean;
  sortingFn?: (a: T, b: T, direction: SortDirection) => number;
}

export interface SortingState {
  id: string;
  desc: boolean;
}

export interface ColumnVisibilityState {
  [key: string]: boolean;
}

// Token for data table context
export const SC_DATA_TABLE = new InjectionToken<ScDataTable<unknown>>('SC_DATA_TABLE');

// ============================================================================
// DataTable
// ============================================================================
@Directive({
  selector: '[sc-data-table]',
  providers: [{ provide: SC_DATA_TABLE, useExisting: ScDataTable }],
  host: {
    'data-slot': 'data-table',
    '[class]': 'class()',
  },
})
export class ScDataTable<T> {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly data = input<T[]>([]);
  readonly columns = input<ColumnDef<T>[]>([]);

  readonly sorting = model<SortingState | null>(null);
  readonly columnVisibility = model<ColumnVisibilityState>({});
  readonly globalFilter = model<string>('');
  readonly rowSelection = model<Set<number>>(new Set());

  readonly sortChange = output<SortingState | null>();
  readonly filterChange = output<string>();

  protected readonly class = computed(() => cn('w-full', this.classInput()));

  readonly visibleColumns = computed(() => {
    const cols = this.columns();
    const visibility = this.columnVisibility();
    return cols.filter((col) => visibility[col.id] !== false);
  });

  readonly filteredData = computed(() => {
    const data = this.data();
    const filter = this.globalFilter().toLowerCase().trim();

    if (!filter) return data;

    return data.filter((row) => {
      return this.columns().some((col) => {
        const value = this.getCellValue(row, col);
        return String(value).toLowerCase().includes(filter);
      });
    });
  });

  readonly sortedData = computed(() => {
    const data = [...this.filteredData()];
    const sort = this.sorting();

    if (!sort) return data;

    const column = this.columns().find((col) => col.id === sort.id);
    if (!column) return data;

    return data.sort((a, b) => {
      if (column.sortingFn) {
        return column.sortingFn(a, b, sort.desc ? 'desc' : 'asc');
      }

      const aVal = this.getCellValue(a, column);
      const bVal = this.getCellValue(b, column);

      if (aVal === bVal) return 0;
      if (aVal === null || aVal === undefined) return 1;
      if (bVal === null || bVal === undefined) return -1;

      const comparison = aVal < bVal ? -1 : 1;
      return sort.desc ? -comparison : comparison;
    });
  });

  getCellValue(row: T, column: ColumnDef<T>): unknown {
    if (column.accessorFn) {
      return column.accessorFn(row);
    }
    if (column.accessorKey) {
      return row[column.accessorKey];
    }
    return '';
  }

  toggleSort(columnId: string): void {
    const column = this.columns().find((col) => col.id === columnId);
    if (!column || column.enableSorting === false) return;

    const currentSort = this.sorting();

    if (!currentSort || currentSort.id !== columnId) {
      this.sorting.set({ id: columnId, desc: false });
    } else if (!currentSort.desc) {
      this.sorting.set({ id: columnId, desc: true });
    } else {
      this.sorting.set(null);
    }

    this.sortChange.emit(this.sorting());
  }

  toggleColumnVisibility(columnId: string): void {
    const current = this.columnVisibility();
    const isVisible = current[columnId] !== false;
    this.columnVisibility.set({ ...current, [columnId]: !isVisible });
  }

  setColumnVisibility(columnId: string, visible: boolean): void {
    const current = this.columnVisibility();
    this.columnVisibility.set({ ...current, [columnId]: visible });
  }

  toggleRowSelection(index: number): void {
    const selection = new Set(this.rowSelection());
    if (selection.has(index)) {
      selection.delete(index);
    } else {
      selection.add(index);
    }
    this.rowSelection.set(selection);
  }

  toggleAllRowSelection(): void {
    const data = this.sortedData();
    const selection = this.rowSelection();

    if (selection.size === data.length) {
      this.rowSelection.set(new Set());
    } else {
      this.rowSelection.set(new Set(data.map((_, i) => i)));
    }
  }

  isRowSelected(index: number): boolean {
    return this.rowSelection().has(index);
  }

  isAllRowsSelected(): boolean {
    const data = this.sortedData();
    return data.length > 0 && this.rowSelection().size === data.length;
  }

  isSomeRowsSelected(): boolean {
    const selection = this.rowSelection();
    const data = this.sortedData();
    return selection.size > 0 && selection.size < data.length;
  }
}

// ============================================================================
// DataTableHeader
// ============================================================================
@Component({
  selector: '[sc-data-table-header]',
  template: `<ng-content />`,
  host: {
    'data-slot': 'data-table-header',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDataTableHeader {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('[&_tr]:border-b', this.classInput()));
}

// ============================================================================
// DataTableBody
// ============================================================================
@Component({
  selector: '[sc-data-table-body]',
  template: `<ng-content />`,
  host: {
    'data-slot': 'data-table-body',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDataTableBody {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('[&_tr:last-child]:border-0', this.classInput()));
}

// ============================================================================
// DataTableRow
// ============================================================================
@Directive({
  selector: '[sc-data-table-row]',
  host: {
    'data-slot': 'data-table-row',
    '[class]': 'class()',
    '[attr.data-selected]': 'selected() || null',
  },
})
export class ScDataTableRow {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly selected = input<boolean>(false);

  protected readonly class = computed(() =>
    cn(
      'border-b transition-colors hover:bg-muted/50',
      'data-[selected]:bg-muted',
      this.classInput(),
    ),
  );
}

// ============================================================================
// DataTableHead
// ============================================================================
@Component({
  selector: '[sc-data-table-head]',
  template: `
    @if (sortable()) {
      <button
        type="button"
        class="flex items-center gap-1 hover:text-foreground -ml-3 h-8 px-3 rounded-md hover:bg-accent"
        (click)="onSort()"
      >
        <ng-content />
        @if (sortDirection() === 'asc') {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="size-4"
          >
            <path d="m5 15 7-7 7 7" />
          </svg>
        } @else if (sortDirection() === 'desc') {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="size-4"
          >
            <path d="m19 9-7 7-7-7" />
          </svg>
        } @else {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="size-4 opacity-0 group-hover:opacity-50"
          >
            <path d="m7 15 5 5 5-5" />
            <path d="m7 9 5-5 5 5" />
          </svg>
        }
      </button>
    } @else {
      <ng-content />
    }
  `,
  host: {
    'data-slot': 'data-table-head',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDataTableHead {
  private readonly table = inject(SC_DATA_TABLE);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly columnId = input<string>('');
  readonly sortable = input<boolean>(false);

  protected readonly class = computed(() =>
    cn(
      'h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
      'group',
      this.classInput(),
    ),
  );

  protected readonly sortDirection = computed((): SortDirection => {
    const sorting = this.table.sorting();
    if (!sorting || sorting.id !== this.columnId()) return null;
    return sorting.desc ? 'desc' : 'asc';
  });

  onSort(): void {
    const id = this.columnId();
    if (id) {
      this.table.toggleSort(id);
    }
  }
}

// ============================================================================
// DataTableCell
// ============================================================================
@Directive({
  selector: '[sc-data-table-cell]',
  host: {
    'data-slot': 'data-table-cell',
    '[class]': 'class()',
  },
})
export class ScDataTableCell {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
      this.classInput(),
    ),
  );
}

// ============================================================================
// DataTableFilter
// ============================================================================
@Component({
  selector: 'input[sc-data-table-filter]',
  template: ``,
  host: {
    'data-slot': 'data-table-filter',
    type: 'text',
    '[class]': 'class()',
    '[value]': 'table.globalFilter()',
    '(input)': 'onInput($event)',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDataTableFilter {
  readonly table = inject(SC_DATA_TABLE);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly placeholder = input<string>('Filter...');

  protected readonly class = computed(() =>
    cn(
      'flex h-9 w-full max-w-sm rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm',
      'placeholder:text-muted-foreground',
      'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
      'disabled:cursor-not-allowed disabled:opacity-50',
      this.classInput(),
    ),
  );

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.table.globalFilter.set(value);
  }
}

// ============================================================================
// DataTableColumnToggle
// ============================================================================
@Component({
  selector: '[sc-data-table-column-toggle]',
  template: `
    <button
      type="button"
      class="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
      (click)="toggleOpen()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="size-4"
      >
        <path d="M12 3v18" />
        <rect width="8" height="4" x="8" y="8" rx="1" />
        <path d="M2 8h2" />
        <path d="M2 12h2" />
        <path d="M20 8h2" />
        <path d="M20 12h2" />
      </svg>
      Columns
    </button>

    @if (isOpen()) {
      <div
        class="absolute right-0 top-full z-50 mt-2 min-w-[150px] rounded-md border bg-popover p-2 shadow-md"
      >
        @for (column of table.columns(); track column.id) {
          @if (column.enableHiding !== false) {
            <label
              class="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent cursor-pointer"
            >
              <input
                type="checkbox"
                class="size-4 rounded border-primary"
                [checked]="isColumnVisible(column.id)"
                (change)="toggleColumn(column.id)"
              />
              {{ column.header }}
            </label>
          }
        }
      </div>
    }
  `,
  host: {
    'data-slot': 'data-table-column-toggle',
    '[class]': 'class()',
    '(document:click)': 'onDocumentClick($event)',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDataTableColumnToggle {
  readonly table = inject(SC_DATA_TABLE);

  readonly classInput = input<string>('', { alias: 'class' });

  readonly isOpen = signal(false);

  protected readonly class = computed(() => cn('relative', this.classInput()));

  toggleOpen(): void {
    this.isOpen.update((v) => !v);
  }

  isColumnVisible(columnId: string): boolean {
    return this.table.columnVisibility()[columnId] !== false;
  }

  toggleColumn(columnId: string): void {
    this.table.toggleColumnVisibility(columnId);
  }

  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('[sc-data-table-column-toggle]')) {
      this.isOpen.set(false);
    }
  }
}

// ============================================================================
// DataTablePagination
// ============================================================================
@Component({
  selector: '[sc-data-table-pagination]',
  template: `
    <div class="flex items-center justify-between px-2">
      <div class="text-sm text-muted-foreground">
        @if (showSelection()) {
          {{ table.rowSelection().size }} of {{ table.sortedData().length }} row(s) selected.
        } @else {
          {{ table.sortedData().length }} row(s) total.
        }
      </div>
      <div class="flex items-center space-x-6 lg:space-x-8">
        <div class="flex items-center space-x-2">
          <p class="text-sm font-medium">Rows per page</p>
          <select
            class="h-8 w-[70px] rounded-md border border-input bg-background text-sm"
            [value]="pageSize()"
            (change)="onPageSizeChange($event)"
          >
            @for (size of pageSizes(); track size) {
              <option [value]="size">{{ size }}</option>
            }
          </select>
        </div>
        <div class="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {{ currentPage() }} of {{ totalPages() }}
        </div>
        <div class="flex items-center space-x-2">
          <button
            type="button"
            class="inline-flex size-8 items-center justify-center rounded-md border border-input bg-background hover:bg-accent disabled:opacity-50"
            [disabled]="currentPage() === 1"
            (click)="goToPage(1)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-4"
            >
              <path d="m11 17-5-5 5-5" />
              <path d="m18 17-5-5 5-5" />
            </svg>
          </button>
          <button
            type="button"
            class="inline-flex size-8 items-center justify-center rounded-md border border-input bg-background hover:bg-accent disabled:opacity-50"
            [disabled]="currentPage() === 1"
            (click)="goToPage(currentPage() - 1)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-4"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            class="inline-flex size-8 items-center justify-center rounded-md border border-input bg-background hover:bg-accent disabled:opacity-50"
            [disabled]="currentPage() === totalPages()"
            (click)="goToPage(currentPage() + 1)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-4"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
          <button
            type="button"
            class="inline-flex size-8 items-center justify-center rounded-md border border-input bg-background hover:bg-accent disabled:opacity-50"
            [disabled]="currentPage() === totalPages()"
            (click)="goToPage(totalPages())"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-4"
            >
              <path d="m6 17 5-5-5-5" />
              <path d="m13 17 5-5-5-5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  `,
  host: {
    'data-slot': 'data-table-pagination',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDataTablePagination {
  readonly table = inject(SC_DATA_TABLE);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly pageSize = model<number>(10);
  readonly currentPage = model<number>(1);
  readonly pageSizes = input<number[]>([10, 20, 30, 40, 50]);
  readonly showSelection = input<boolean>(true);

  protected readonly class = computed(() => cn('py-4', this.classInput()));

  readonly totalPages = computed(() => {
    const total = this.table.sortedData().length;
    const size = this.pageSize();
    return Math.max(1, Math.ceil(total / size));
  });

  onPageSizeChange(event: Event): void {
    const value = parseInt((event.target as HTMLSelectElement).value, 10);
    this.pageSize.set(value);
    this.currentPage.set(1);
  }

  goToPage(page: number): void {
    const total = this.totalPages();
    this.currentPage.set(Math.max(1, Math.min(page, total)));
  }
}
