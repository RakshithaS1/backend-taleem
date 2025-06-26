import { Component } from '@angular/core';
import { HealthCoachingBannerComponent } from './health-coaching-banner/health-coaching-banner.component';
import { LifestyleComponent } from '../../common/lifestyle/lifestyle.component';
import { ProgramComponent } from '../../common/program/program.component';
import { ServicesComponent } from '../../common/services/services.component';
import { HealthExperienceComponent } from './health-experience/health-experience.component';
import { HealthCoursesComponent } from './health-courses/health-courses.component';
import { HealthFeedbackComponent } from './health-feedback/health-feedback.component';
import { HealthEventsComponent } from './health-events/health-events.component';
import { HealthBlogComponent } from './health-blog/health-blog.component';
import { SubscribeStyleThreeComponent } from '../../common/subscribe-style-three/subscribe-style-three.component';

@Component({
    selector: 'app-health-coaching',
    imports: [HealthCoachingBannerComponent, LifestyleComponent, ProgramComponent, ServicesComponent, HealthExperienceComponent, HealthCoursesComponent, HealthFeedbackComponent, HealthEventsComponent, HealthBlogComponent, SubscribeStyleThreeComponent],
    templateUrl: './health-coaching.component.html',
    styleUrls: ['./health-coaching.component.scss']
})
export class HealthCoachingComponent {}