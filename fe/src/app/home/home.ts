import { Component } from '@angular/core';
import { Header } from "./header/header";
import { MainContent } from "./main-content/main-content";
import { Sidebar } from "./sidebar/sidebar";

@Component({
  selector: 'app-home',
  imports: [Header, MainContent, Sidebar],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}