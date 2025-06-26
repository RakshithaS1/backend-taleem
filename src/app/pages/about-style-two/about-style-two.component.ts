import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FunfactsStyleOneComponent } from '../../common/funfacts-style-one/funfacts-style-one.component';
import { TestimonialsComponent } from '../../common/testimonials/testimonials.component';
import { InstructorComponent } from '../../common/instructor/instructor.component';
import { PartnerComponent } from '../../common/partner/partner.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-about-style-two',
    imports: [RouterLink, NgIf, FunfactsStyleOneComponent, TestimonialsComponent, InstructorComponent, PartnerComponent],
    templateUrl: './about-style-two.component.html',
    styleUrls: ['./about-style-two.component.scss']
})
export class AboutStyleTwoComponent {

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}