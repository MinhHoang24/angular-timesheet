import { Component } from '@angular/core';
import { LeftSidebarHeader } from "./left-sidebar-header/left-sidebar-header";
import { LeftSidebarNav } from "./left-sidebar-nav/left-sidebar-nav";
import { LeftSidebarFooter } from "./left-sidebar-footer/left-sidebar-footer";

@Component({
  selector: 'app-left-sidebar',
  imports: [LeftSidebarHeader, LeftSidebarNav, LeftSidebarFooter],
  templateUrl: './left-sidebar.html',
  styleUrl: './left-sidebar.css'
})
export class LeftSidebar {

}
