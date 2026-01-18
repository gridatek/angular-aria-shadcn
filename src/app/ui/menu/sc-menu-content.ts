import { MenuContent } from '@angular/aria/menu';
import { Directive } from '@angular/core';

@Directive({
  selector: 'ng-template[sc-menu-content]',
  hostDirectives: [MenuContent],
})
export class ScMenuContent {}
