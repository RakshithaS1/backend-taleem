import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FunfactsStyleOneComponent } from '../../common/funfacts-style-one/funfacts-style-one.component';
import { PartnerComponent } from '../../common/partner/partner.component';
import { InstructorComponent } from '../../common/instructor/instructor.component';
import { TestimonialsComponent } from '../../common/testimonials/testimonials.component';

@Component({
    selector: 'app-about-style-four',
    imports: [RouterLink, CommonModule, FunfactsStyleOneComponent, PartnerComponent, InstructorComponent, TestimonialsComponent],
    templateUrl: './about-style-four.component.html',
    styleUrls: ['./about-style-four.component.scss']
})
export class AboutStyleFourComponent {
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }
}