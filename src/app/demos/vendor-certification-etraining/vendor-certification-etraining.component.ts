import { Component } from '@angular/core';
import { VendorBannerComponent } from './vendor-banner/vendor-banner.component';
import { PartnerComponent } from '../../common/partner/partner.component';
import { SloganComponent } from '../../common/slogan/slogan.component';
import { VendorCoursesComponent } from './vendor-courses/vendor-courses.component';
import { VendorAboutComponent } from './vendor-about/vendor-about.component';
import { FunfactsStyleOneComponent } from '../../common/funfacts-style-one/funfacts-style-one.component';
import { VendorPopularCoursesComponent } from './vendor-popular-courses/vendor-popular-courses.component';
import { InstructorComponent } from '../../common/instructor/instructor.component';
import { PremiumAccessTwoComponent } from '../../common/premium-access-two/premium-access-two.component';
import { TestimonialsComponent } from '../../common/testimonials/testimonials.component';
import { ViewAllCoursesTwoComponent } from '../../common/view-all-courses-two/view-all-courses-two.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';

@Component({
    selector: 'app-vendor-certification-etraining',
    imports: [VendorBannerComponent, PartnerComponent, SloganComponent, VendorCoursesComponent, VendorAboutComponent, FunfactsStyleOneComponent, VendorPopularCoursesComponent, InstructorComponent, PremiumAccessTwoComponent, TestimonialsComponent, ViewAllCoursesTwoComponent, BlogComponent, SubscribeComponent],
    templateUrl: './vendor-certification-etraining.component.html',
    styleUrls: ['./vendor-certification-etraining.component.scss']
})
export class VendorCertificationEtrainingComponent {}