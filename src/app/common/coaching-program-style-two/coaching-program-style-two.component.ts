import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-coaching-program-style-two',
    imports: [RouterLink, CarouselModule],
    templateUrl: './coaching-program-style-two.component.html',
    styleUrls: ['./coaching-program-style-two.component.scss']
})
export class CoachingProgramStyleTwoComponent {

    motivationEventsSlides: OwlOptions = {
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