import { Component } from '@angular/core';
import { SiBannerComponent } from './si-banner/si-banner.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { InstructorQuoteComponent } from '../../common/instructor-quote/instructor-quote.component';
import { SiCoursesComponent } from './si-courses/si-courses.component';
import { FunfactsStyleOneComponent } from '../../common/funfacts-style-one/funfacts-style-one.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { SiFeaturesComponent } from './si-features/si-features.component';
import { SiEventsComponent } from './si-events/si-events.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';

@Component({
    selector: 'app-single-instructor',
    imports: [SiBannerComponent, FeaturesComponent, InstructorQuoteComponent, SiCoursesComponent, FunfactsStyleOneComponent, FeedbackComponent, SiFeaturesComponent, SiEventsComponent, BlogComponent, SubscribeComponent],
    templateUrl: './single-instructor.component.html',
    styleUrls: ['./single-instructor.component.scss']
})
export class SingleInstructorComponent {}