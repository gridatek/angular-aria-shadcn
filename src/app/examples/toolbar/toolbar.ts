import {Component} from '@angular/core';
import {Toolbar, ToolbarWidget, ToolbarWidgetGroup} from '@angular/aria/toolbar';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css',
  imports: [Toolbar, ToolbarWidget, ToolbarWidgetGroup],
})
export class Toolbar {}
