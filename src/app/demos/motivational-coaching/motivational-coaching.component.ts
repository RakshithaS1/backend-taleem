import { Component } from '@angular/core';
import { MotivationalCoachingBannerComponent } from './motivational-coaching-banner/motivational-coaching-banner.component';
import { FeaturesFunfactsComponent } from '../../common/features-funfacts/features-funfacts.component';
import { AboutMeComponent } from '../../common/about-me/about-me.component';
import { MotivationalCoachingCoursesComponent } from './motivational-coaching-courses/motivational-coaching-courses.component';
import { MotivationalFeedbackComponent } from '../../common/motivational-feedback/motivational-feedback.component';
import { CoachingProgramStyleTwoComponent } from '../../common/coaching-program-style-two/coaching-program-style-two.component';
import { SubscribeStyleFiveComponent } from '../../common/subscribe-style-five/subscribe-style-five.component';
import { MotivationalCoachingBlogComponent } from './motivational-coaching-blog/motivational-coaching-blog.component';

@Component({
    selector: 'app-motivational-coaching',
    imports: [MotivationalCoachingBannerComponent, FeaturesFunfactsComponent, AboutMeComponent, MotivationalCoachingCoursesComponent, MotivationalFeedbackComponent, CoachingProgramStyleTwoComponent, SubscribeStyleFiveComponent, MotivationalCoachingBlogComponent],
    templateUrl: './motivational-coaching.component.html',
    styleUrls: ['./motivational-coaching.component.scss']
})
export class MotivationalCoachingComponent {}