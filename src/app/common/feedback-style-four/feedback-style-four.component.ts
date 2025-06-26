import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-feedback-style-four',
    imports: [CarouselModule],
    templateUrl: './feedback-style-four.component.html',
    styleUrls: ['./feedback-style-four.component.scss']
})
export class FeedbackStyleFourComponent {

    coachingFeedbackSlides: OwlOptions = {
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        margin: 30,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ]
    }

}