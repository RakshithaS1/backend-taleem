import { Component } from '@angular/core';
import { OaBannerComponent } from './oa-banner/oa-banner.component';
import { InstructorQuoteComponent } from '../../common/instructor-quote/instructor-quote.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { OaCoursesComponent } from './oa-courses/oa-courses.component';
import { FunfactsFeedbackComponent } from '../../common/funfacts-feedback/funfacts-feedback.component';
import { OaEventsComponent } from './oa-events/oa-events.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { BlogComponent } from '../../common/blog/blog.component';

@Component({
    selector: 'app-online-art',
    imports: [OaBannerComponent, InstructorQuoteComponent, FeaturesComponent, OaCoursesComponent, FunfactsFeedbackComponent, OaEventsComponent, SubscribeComponent, BlogComponent],
    templateUrl: './online-art.component.html',
    styleUrls: ['./online-art.component.scss']
})
export class OnlineArtComponent {}