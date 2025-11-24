import {Component} from '@angular/core';
import {
  AccordionGroup,
  AccordionTrigger,
  AccordionPanel,
  AccordionContent,
} from '@angular/aria/accordion';

@Component({
  selector: 'app-disabled-focusable-example',
  templateUrl: 'disabled-focusable.html',
  imports: [AccordionGroup, AccordionTrigger, AccordionPanel, AccordionContent],
  host: {
    class: 'flex justify-center',
  },
})
export class DisabledFocusableExample {}
