import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScSelect,
  ScSelectContent,
  ScSelectGroup,
  ScSelectItem,
  ScSelectLabel,
  ScSelectSeparator,
  ScSelectTrigger,
  ScSelectValue,
} from '../ui/select';

/**
 * Demo 3: SC Select wrapper components - Clean markup, styles encapsulated
 * This demonstrates the desired user API with sc-prefixed wrapper components.
 */
@Component({
  selector: 'app-sc-select-demo',
  imports: [
    ScSelect,
    ScSelectTrigger,
    ScSelectValue,
    ScSelectContent,
    ScSelectItem,
    ScSelectGroup,
    ScSelectLabel,
    ScSelectSeparator,
  ],
  template: `
    <sc-select>
      <button sc-select-trigger>
        <sc-select-value placeholder="Select a label" />
      </button>

      <sc-select-content>
        <sc-select-group>
          <span sc-select-label>Priority</span>
          <div sc-select-item value="important">Important</div>
          <div sc-select-item value="starred">Starred</div>
        </sc-select-group>
        <hr sc-select-separator />
        <sc-select-group>
          <span sc-select-label>Category</span>
          <div sc-select-item value="work">Work</div>
          <div sc-select-item value="personal">Personal</div>
        </sc-select-group>
        <hr sc-select-separator />
        <div sc-select-item value="todo">To Do</div>
        <div sc-select-item value="later">Later</div>
        <div sc-select-item value="read">Read</div>
        <div sc-select-item value="travel">Travel</div>
      </sc-select-content>
    </sc-select>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSelectDemo {}
