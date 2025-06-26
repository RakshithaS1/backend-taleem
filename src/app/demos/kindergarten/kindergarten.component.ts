import { Component } from '@angular/core';
import { KindergartenBannerComponent } from './kindergarten-banner/kindergarten-banner.component';
import { KindergartenAboutComponent } from './kindergarten-about/kindergarten-about.component';
import { KindergartenServicesComponent } from './kindergarten-services/kindergarten-services.component';
import { KindergartenCoursesComponent } from './kindergarten-courses/kindergarten-courses.component';
import { KindergartenFeedbackComponent } from './kindergarten-feedback/kindergarten-feedback.component';
import { SelectedAgesComponent } from '../../common/selected-ages/selected-ages.component';
import { KindergartenEventsComponent } from './kindergarten-events/kindergarten-events.component';
import { KindergartenBlogComponent } from './kindergarten-blog/kindergarten-blog.component';
import { SubscribeStyleFourComponent } from '../../common/subscribe-style-four/subscribe-style-four.component';

@Component({
    selector: 'app-kindergarten',
    imports: [KindergartenBannerComponent, KindergartenAboutComponent, KindergartenServicesComponent, KindergartenCoursesComponent, KindergartenFeedbackComponent, SelectedAgesComponent, KindergartenEventsComponent, KindergartenBlogComponent, SubscribeStyleFourComponent],
    templateUrl: './kindergarten.component.html',
    styleUrls: ['./kindergarten.component.scss']
})
export class KindergartenComponent {}