import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-kitchen-feedback-funfacts',
    imports: [CarouselModule],
    templateUrl: './kitchen-feedback-funfacts.component.html',
    styleUrls: ['./kitchen-feedback-funfacts.component.scss']
})
export class KitchenFeedbackFunfactsComponent {

    kitchenFeedbackSlides: OwlOptions = {
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ]
    }

}