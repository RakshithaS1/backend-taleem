import { Component } from '@angular/core';
import { ModernSchoolingBannerComponent } from './modern-schooling-banner/modern-schooling-banner.component';
import { BoxesComponent } from '../../common/boxes/boxes.component';
import { ModernSchoolingAboutComponent } from './modern-schooling-about/modern-schooling-about.component';
import { ModernSchoolingCoursesComponent } from './modern-schooling-courses/modern-schooling-courses.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { TopCategoriesComponent } from '../../common/top-categories/top-categories.component';
import { FunfactsStyleOneComponent } from '../../common/funfacts-style-one/funfacts-style-one.component';
import { OverviewComponent } from '../../common/overview/overview.component';
import { ModernSchoolingEventsComponent } from './modern-schooling-events/modern-schooling-events.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { PartnerComponent } from '../../common/partner/partner.component';

@Component({
    selector: 'app-modern-schooling',
    imports: [ModernSchoolingBannerComponent, BoxesComponent, ModernSchoolingAboutComponent, ModernSchoolingCoursesComponent, FeedbackComponent, TopCategoriesComponent, FunfactsStyleOneComponent, OverviewComponent, ModernSchoolingEventsComponent, SubscribeComponent, PartnerComponent],
    templateUrl: './modern-schooling.component.html',
    styleUrls: ['./modern-schooling.component.scss']
})
export class ModernSchoolingComponent {}