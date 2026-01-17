import { Directive } from '@angular/core';

@Directive({
  selector: 'sc-select-group',
  host: {
    'data-slot': 'select-group',
    role: 'group',
  },
})
export class ScSelectGroup {}
