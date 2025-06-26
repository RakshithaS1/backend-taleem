import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FunfactsFeedbackComponent } from '../../common/funfacts-feedback/funfacts-feedback.component';
import { FeaturesStyleOneComponent } from '../../common/features-style-one/features-style-one.component';
import { InstructorComponent } from '../../common/instructor/instructor.component';
import { PremiumAccessComponent } from '../../common/premium-access/premium-access.component';
import { PartnerComponent } from '../../common/partner/partner.component';

@Component({
    selector: 'app-about-style-one',
    imports: [RouterLink, FunfactsFeedbackComponent, FeaturesStyleOneComponent, InstructorComponent, PremiumAccessComponent, PartnerComponent],
    templateUrl: './about-style-one.component.html',
    styleUrls: ['./about-style-one.component.scss']
})
export class AboutStyleOneComponent {}