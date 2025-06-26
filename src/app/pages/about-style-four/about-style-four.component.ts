import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FunfactsStyleTwoComponent } from '../../common/funfacts-style-two/funfacts-style-two.component';
import { PartnerComponent } from '../../common/partner/partner.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { InstructorComponent } from '../../common/instructor/instructor.component';
import { PremiumAccessComponent } from '../../common/premium-access/premium-access.component';

@Component({
    selector: 'app-about-style-four',
    imports: [RouterLink, FunfactsStyleTwoComponent, PartnerComponent, FeedbackComponent, InstructorComponent, PremiumAccessComponent],
    templateUrl: './about-style-four.component.html',
    styleUrls: ['./about-style-four.component.scss']
})
export class AboutStyleFourComponent {}