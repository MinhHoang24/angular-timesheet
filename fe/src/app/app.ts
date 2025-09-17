import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { Content } from './content/content';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header, Sidebar, Content
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fe');
}
