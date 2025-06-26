import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-testimonials-style-two',
    imports: [CarouselModule],
    templateUrl: './testimonials-style-two.component.html',
    styleUrls: ['./testimonials-style-two.component.scss']
})
export class TestimonialsStyleTwoComponent {
    
    testimonialsSlidesTwo: OwlOptions = {
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ]
    }

}