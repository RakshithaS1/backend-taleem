import { Component } from '@angular/core';
import { YogaBannerComponent } from './yoga-banner/yoga-banner.component';
import { TrainingComponent } from '../../common/training/training.component';
import { YogaAboutComponent } from './yoga-about/yoga-about.component';
import { YogaCoursesComponent } from './yoga-courses/yoga-courses.component';
import { FeedbackStyleTwoComponent } from '../../common/feedback-style-two/feedback-style-two.component';
import { ExperienceComponent } from '../../common/experience/experience.component';
import { FunfactsStyleOneComponent } from '../../common/funfacts-style-one/funfacts-style-one.component';
import { DownloadSyllabusComponent } from '../../common/download-syllabus/download-syllabus.component';
import { FlexiblePricingComponent } from '../../common/flexible-pricing/flexible-pricing.component';
import { YogaBlogComponent } from './yoga-blog/yoga-blog.component';
import { SubscribeStyleTwoComponent } from '../../common/subscribe-style-two/subscribe-style-two.component';
import { PartnerComponent } from '../../common/partner/partner.component';

@Component({
    selector: 'app-yoga-training',
    imports: [YogaBannerComponent, TrainingComponent, YogaAboutComponent, YogaCoursesComponent, FeedbackStyleTwoComponent, ExperienceComponent, FunfactsStyleOneComponent, DownloadSyllabusComponent, FlexiblePricingComponent, YogaBlogComponent, SubscribeStyleTwoComponent, PartnerComponent],
    templateUrl: './yoga-training.component.html',
    styleUrls: ['./yoga-training.component.scss']
})
export class YogaTrainingComponent {}