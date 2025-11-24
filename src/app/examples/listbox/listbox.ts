import {Listbox, Option} from '@angular/aria/listbox';
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-listbox',
  templateUrl: './listbox.html',
  styleUrl: './listbox.css',
  imports: [Listbox, Option],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Listbox {
  /** The options available in the listbox. */
  options = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
    'Option 7',
    'Option 8',
  ];
}
