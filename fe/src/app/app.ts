import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  private routerSubscription!: Subscription;

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.renderer.removeClass(document.body, 'home-page');
        this.renderer.removeClass(document.body, 'login-page');
      }

      if (event instanceof NavigationEnd) {
        if (this.router.url === '/') {
          this.renderer.addClass(document.body, 'home-page');
        } else if (this.router.url === '/login') {
          this.renderer.addClass(document.body, 'login-page');
        }
      }
    });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}