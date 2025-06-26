import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-blog-details-style-three',
    imports: [RouterLink, CarouselModule],
    templateUrl: './blog-details-style-three.component.html',
    styleUrls: ['./blog-details-style-three.component.scss']
})
export class BlogDetailsStyleThreeComponent {

    articleImageSlides: OwlOptions = {
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        animateOut: 'fadeOut',
        items: 1,
        navText: [
            "<i class='flaticon-chevron'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ]
    }

}