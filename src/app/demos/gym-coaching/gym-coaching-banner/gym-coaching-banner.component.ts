import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-gym-coaching-banner',
    imports: [RouterLink, CarouselModule],
    templateUrl: './gym-coaching-banner.component.html',
    styleUrls: ['./gym-coaching-banner.component.scss']
})
export class GymCoachingBannerComponent {
    
    gymBannerSlides: OwlOptions = {
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
        navText: [
            "<i class='flaticon-chevron'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ],
        responsive: {
            0: {
                autoHeight: true
            },
            576: {
                autoHeight: false
            },
            768: {
                autoHeight: false
            },
            992: {
                autoHeight: false
            }
        }
    }

}