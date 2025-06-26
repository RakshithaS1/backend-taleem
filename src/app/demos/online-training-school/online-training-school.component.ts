import { Component } from '@angular/core';
import { OnlineTrainingBannerComponent } from './online-training-banner/online-training-banner.component';
import { OnlineTrainingCoursesComponent } from './online-training-courses/online-training-courses.component';
import { FeaturesStyleTwoComponent } from '../../common/features-style-two/features-style-two.component';
import { OnlineTrainingAboutComponent } from './online-training-about/online-training-about.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { TopCategoriesComponent } from '../../common/top-categories/top-categories.component';
import { FunfactsStyleOneComponent } from '../../common/funfacts-style-one/funfacts-style-one.component';
import { InstructorStyleTwoComponent } from '../../common/instructor-style-two/instructor-style-two.component';
import { PremiumAccessComponent } from '../../common/premium-access/premium-access.component';
import { OnlineTrainingBlogComponent } from './online-training-blog/online-training-blog.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { PartnerComponent } from '../../common/partner/partner.component';

@Component({
    selector: 'app-online-training-school',
    imports: [OnlineTrainingBannerComponent, OnlineTrainingCoursesComponent, FeaturesStyleTwoComponent, OnlineTrainingAboutComponent, FeedbackComponent, TopCategoriesComponent, FunfactsStyleOneComponent, InstructorStyleTwoComponent, PremiumAccessComponent, OnlineTrainingBlogComponent, SubscribeComponent, PartnerComponent],
    templateUrl: './online-training-school.component.html',
    styleUrls: ['./online-training-school.component.scss']
})
export class OnlineTrainingSchoolComponent {}