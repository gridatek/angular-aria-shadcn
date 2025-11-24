import {Component} from '@angular/core';
import {Toolbar, ToolbarWidget, ToolbarWidgetGroup} from '@angular/aria/toolbar';

@Component({
  selector: 'app-toolbar-example',
  templateUrl: './toolbar.html',
  imports: [Toolbar, ToolbarWidget, ToolbarWidgetGroup],
  host: {
    class: 'flex justify-center',
  },
})
export class ToolbarExample {}
