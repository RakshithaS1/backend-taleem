import { Component } from '@angular/core';
import { BusinessCoachingBannerComponent } from './business-coaching-banner/business-coaching-banner.component';
import { FeaturesStyleThreeComponent } from '../../common/features-style-three/features-style-three.component';
import { BusinessCoachingAboutComponent } from './business-coaching-about/business-coaching-about.component';
import { CoursesTypesComponent } from '../../common/courses-types/courses-types.component';
import { FunfactsStyleFiveComponent } from '../../common/funfacts-style-five/funfacts-style-five.component';
import { FeedbackStyleFourComponent } from '../../common/feedback-style-four/feedback-style-four.component';
import { BusinessCoachingCoursesComponent } from './business-coaching-courses/business-coaching-courses.component';
import { CoachingProgramComponent } from '../../common/coaching-program/coaching-program.component';
import { BusinessCoachingBlogComponent } from './business-coaching-blog/business-coaching-blog.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';

@Component({
    selector: 'app-business-coaching',
    imports: [BusinessCoachingBannerComponent, FeaturesStyleThreeComponent, BusinessCoachingAboutComponent, CoursesTypesComponent, FunfactsStyleFiveComponent, FeedbackStyleFourComponent, BusinessCoachingCoursesComponent, CoachingProgramComponent, BusinessCoachingBlogComponent, SubscribeComponent],
    templateUrl: './business-coaching.component.html',
    styleUrls: ['./business-coaching.component.scss']
})
export class BusinessCoachingComponent {}