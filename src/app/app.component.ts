import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { NavigationEnd, Event, Router, RouterOutlet } from '@angular/router';
import { BackToTopComponent } from './common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule, NavbarComponent, FooterComponent, BackToTopComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

    location: any;
    title = 'Odemy - Angular 19 Online Courses & Education Template';

    constructor(
        public router: Router,
        private viewportScroller: ViewportScroller
    ) {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                // Scroll to the top after each navigation end
                this.viewportScroller.scrollToPosition([0, 0]);
            }
        });
    }

}