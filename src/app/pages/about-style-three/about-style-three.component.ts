import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeaturesStyleTwoComponent } from '../../common/features-style-two/features-style-two.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { InstructorComponent } from '../../common/instructor/instructor.component';
import { FunfactsStyleOneComponent } from '../../common/funfacts-style-one/funfacts-style-one.component';
import { PremiumAccessComponent } from '../../common/premium-access/premium-access.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-about-style-three',
    imports: [RouterLink, NgIf, FeaturesStyleTwoComponent, FeedbackComponent, InstructorComponent, FunfactsStyleOneComponent, PremiumAccessComponent],
    templateUrl: './about-style-three.component.html',
    styleUrls: ['./about-style-three.component.scss']
})
export class AboutStyleThreeComponent {

	// Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}