import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-motivational-feedback',
    imports: [CarouselModule],
    templateUrl: './motivational-feedback.component.html',
    styleUrls: ['./motivational-feedback.component.scss']
})
export class MotivationalFeedbackComponent {

    motivationFeedbackSlides: OwlOptions = {
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