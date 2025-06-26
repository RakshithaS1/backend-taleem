import { Component } from '@angular/core';
import { ElearningBannerComponent } from './elearning-banner/elearning-banner.component';
import { PartnerComponent } from '../../common/partner/partner.component';
import { FeaturesStyleOneComponent } from '../../common/features-style-one/features-style-one.component';
import { ElearningAboutComponent } from './elearning-about/elearning-about.component';
import { CoursesComponent } from '../../common/courses/courses.component';
import { FunfactsFeedbackComponent } from '../../common/funfacts-feedback/funfacts-feedback.component';
import { GetInstantCoursesComponent } from '../../common/get-instant-courses/get-instant-courses.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { ViewAllCoursesComponent } from '../../common/view-all-courses/view-all-courses.component';
import { PremiumAccessComponent } from '../../common/premium-access/premium-access.component';

@Component({
    selector: 'app-elearning-school',
    imports: [ElearningBannerComponent, PartnerComponent, FeaturesStyleOneComponent, ElearningAboutComponent, CoursesComponent, FunfactsFeedbackComponent, GetInstantCoursesComponent, BlogComponent, ViewAllCoursesComponent, PremiumAccessComponent],
    templateUrl: './elearning-school.component.html',
    styleUrls: ['./elearning-school.component.scss']
})
export class ElearningSchoolComponent {}