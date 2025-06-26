import { Component } from '@angular/core';
import { LanguageSchoolBannerComponent } from './language-school-banner/language-school-banner.component';
import { LanguageSchoolCoursesComponent } from './language-school-courses/language-school-courses.component';
import { LanguageSchoolAboutComponent } from './language-school-about/language-school-about.component';
import { FeedbackWithBgComponent } from '../../common/feedback-with-bg/feedback-with-bg.component';
import { LanguageSchoolTopCoursesComponent } from './language-school-top-courses/language-school-top-courses.component';
import { FunfactsStyleOneComponent } from '../../common/funfacts-style-one/funfacts-style-one.component';
import { HowToApplyComponent } from '../../common/how-to-apply/how-to-apply.component';
import { FreeTrialComponent } from '../../common/free-trial/free-trial.component';
import { UpcomingEventsComponent } from '../../common/upcoming-events/upcoming-events.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { PartnerComponent } from '../../common/partner/partner.component';

@Component({
    selector: 'app-language-school',
    imports: [LanguageSchoolBannerComponent, LanguageSchoolCoursesComponent, LanguageSchoolAboutComponent, FeedbackWithBgComponent, LanguageSchoolTopCoursesComponent, FunfactsStyleOneComponent, HowToApplyComponent, FreeTrialComponent, UpcomingEventsComponent, SubscribeComponent, PartnerComponent],
    templateUrl: './language-school.component.html',
    styleUrls: ['./language-school.component.scss']
})
export class LanguageSchoolComponent {}