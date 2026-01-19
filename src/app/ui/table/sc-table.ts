import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'table[sc-table]',
  host: {
    'data-slot': 'table',
    '[class]': 'class()',
  },
})
export class ScTable {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('w-full caption-bottom text-sm', this.classInput()));
}

@Directive({
  selector: 'thead[sc-table-header]',
  host: {
    'data-slot': 'table-header',
    '[class]': 'class()',
  },
})
export class ScTableHeader {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('[&_tr]:border-b', this.classInput()));
}

@Directive({
  selector: 'tbody[sc-table-body]',
  host: {
    'data-slot': 'table-body',
    '[class]': 'class()',
  },
})
export class ScTableBody {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('[&_tr:last-child]:border-0', this.classInput()));
}

@Directive({
  selector: 'tfoot[sc-table-footer]',
  host: {
    'data-slot': 'table-footer',
    '[class]': 'class()',
  },
})
export class ScTableFooter {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('border-t bg-muted/50 font-medium [&>tr]:last:border-b-0', this.classInput()),
  );
}

@Directive({
  selector: 'tr[sc-table-row]',
  host: {
    'data-slot': 'table-row',
    '[class]': 'class()',
  },
})
export class ScTableRow {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
      this.classInput(),
    ),
  );
}

@Directive({
  selector: 'th[sc-table-head]',
  host: {
    'data-slot': 'table-head',
    '[class]': 'class()',
  },
})
export class ScTableHead {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
      this.classInput(),
    ),
  );
}

@Directive({
  selector: 'td[sc-table-cell]',
  host: {
    'data-slot': 'table-cell',
    '[class]': 'class()',
  },
})
export class ScTableCell {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', this.classInput()),
  );
}

@Directive({
  selector: 'caption[sc-table-caption]',
  host: {
    'data-slot': 'table-caption',
    '[class]': 'class()',
  },
})
export class ScTableCaption {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('mt-4 text-sm text-muted-foreground', this.classInput()),
  );
}
