import { Component } from '@angular/core';
import { KitchenCoachingBannerComponent } from './kitchen-coaching-banner/kitchen-coaching-banner.component';
import { FeaturesStyleFiveComponent } from '../../common/features-style-five/features-style-five.component';
import { KitchenCoachingAboutComponent } from './kitchen-coaching-about/kitchen-coaching-about.component';
import { PartnerComponent } from '../../common/partner/partner.component';
import { DownloadBookComponent } from '../../common/download-book/download-book.component';
import { KitchenCoachingCoursesComponent } from './kitchen-coaching-courses/kitchen-coaching-courses.component';
import { KitchenFeedbackFunfactsComponent } from '../../common/kitchen-feedback-funfacts/kitchen-feedback-funfacts.component';
import { KitchenCoachingEventsComponent } from './kitchen-coaching-events/kitchen-coaching-events.component';
import { MyNewsletterComponent } from '../../common/my-newsletter/my-newsletter.component';
import { GetStartedComponent } from '../../common/get-started/get-started.component';

@Component({
    selector: 'app-kitchen-coaching',
    imports: [KitchenCoachingBannerComponent, FeaturesStyleFiveComponent, KitchenCoachingAboutComponent, PartnerComponent, DownloadBookComponent, KitchenCoachingCoursesComponent, KitchenFeedbackFunfactsComponent, KitchenCoachingEventsComponent, MyNewsletterComponent, GetStartedComponent],
    templateUrl: './kitchen-coaching.component.html',
    styleUrls: ['./kitchen-coaching.component.scss']
})
export class KitchenCoachingComponent {}