import { Component } from '@angular/core';
import { LeftSidebar } from "./left-sidebar/left-sidebar";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [LeftSidebar],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

}
