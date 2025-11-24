import {Component} from '@angular/core';
import {
  AccordionGroup,
  AccordionTrigger,
  AccordionPanel,
  AccordionContent,
} from '@angular/aria/accordion';

@Component({
  selector: 'app-disabled-focusable',
  templateUrl: 'disabled-focusable.html',
  styleUrl: 'disabled-focusable.css',
  imports: [AccordionGroup, AccordionTrigger, AccordionPanel, AccordionContent],
})
export class DisabledFocusable {}
