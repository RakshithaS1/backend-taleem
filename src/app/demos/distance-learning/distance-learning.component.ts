import { Component } from '@angular/core';
import { DistanceBannerComponent } from './distance-banner/distance-banner.component';
import { DistanceBoxesComponent } from './distance-boxes/distance-boxes.component';
import { DistanceCoursesComponent } from './distance-courses/distance-courses.component';
import { DistanceAboutComponent } from './distance-about/distance-about.component';
import { FunfactsStyleTwoComponent } from '../../common/funfacts-style-two/funfacts-style-two.component';
import { DistancePopularCoursesComponent } from './distance-popular-courses/distance-popular-courses.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { InstructorStyleTwoComponent } from '../../common/instructor-style-two/instructor-style-two.component';
import { PremiumAccessComponent } from '../../common/premium-access/premium-access.component';
import { PartnerComponent } from '../../common/partner/partner.component';
import { DistanceBlogComponent } from './distance-blog/distance-blog.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';

@Component({
    selector: 'app-distance-learning',
    imports: [DistanceBannerComponent, DistanceBoxesComponent, DistanceCoursesComponent, DistanceAboutComponent, FunfactsStyleTwoComponent, DistancePopularCoursesComponent, FeedbackComponent, InstructorStyleTwoComponent, PremiumAccessComponent, PartnerComponent, DistanceBlogComponent, SubscribeComponent],
    templateUrl: './distance-learning.component.html',
    styleUrls: ['./distance-learning.component.scss']
})
export class DistanceLearningComponent {}