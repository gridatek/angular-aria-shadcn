import {Component} from '@angular/core';
import {
  AccordionGroup,
  AccordionTrigger,
  AccordionPanel,
  AccordionContent,
} from '@angular/aria/accordion';

@Component({
  selector: 'app-multi-expansion-example',
  templateUrl: 'multi-expansion.html',
  imports: [AccordionGroup, AccordionTrigger, AccordionPanel, AccordionContent],
  host: {
    class: 'flex justify-center',
  },
})
export class MultiExpansionExample {}
