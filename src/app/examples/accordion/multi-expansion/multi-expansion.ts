import {Component} from '@angular/core';
import {
  AccordionGroup,
  AccordionTrigger,
  AccordionPanel,
  AccordionContent,
} from '@angular/aria/accordion';

@Component({
  selector: 'app-multi-expansion',
  templateUrl: 'multi-expansion.html',
  styleUrl: 'multi-expansion.css',
  imports: [AccordionGroup, AccordionTrigger, AccordionPanel, AccordionContent],
})
export class MultiExpansion {}
