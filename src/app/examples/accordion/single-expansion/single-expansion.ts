import {Component} from '@angular/core';
import {
  AccordionGroup,
  AccordionTrigger,
  AccordionPanel,
  AccordionContent,
} from '@angular/aria/accordion';

@Component({
  selector: 'app-single-expansion',
  templateUrl: 'single-expansion.html',
  styleUrl: 'single-expansion.css',
  imports: [AccordionGroup, AccordionTrigger, AccordionPanel, AccordionContent],
})
export class SingleExpansion {}
