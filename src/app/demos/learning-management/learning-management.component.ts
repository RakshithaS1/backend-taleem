import { Component } from '@angular/core';
import { LearningBannerComponent } from './learning-banner/learning-banner.component';
import { FeaturesStyleFourComponent } from '../../common/features-style-four/features-style-four.component';
import { LearningCoursesComponent } from './learning-courses/learning-courses.component';
import { LearningAboutComponent } from './learning-about/learning-about.component';
import { TestimonialsStyleTwoComponent } from '../../common/testimonials-style-two/testimonials-style-two.component';
import { GetInstantCoursesTwoComponent } from '../../common/get-instant-courses-two/get-instant-courses-two.component';
import { PartnerSliderComponent } from '../../common/partner-slider/partner-slider.component';
import { VideoStyleTwoComponent } from '../../common/video-style-two/video-style-two.component';
import { FunfactsStyleFourComponent } from '../../common/funfacts-style-four/funfacts-style-four.component';
import { LearningBlogComponent } from './learning-blog/learning-blog.component';
import { LearningViewCoursesComponent } from './learning-view-courses/learning-view-courses.component';
import { LearningPremiumAccessComponent } from './learning-premium-access/learning-premium-access.component';

@Component({
    selector: 'app-learning-management',
    imports: [LearningBannerComponent, FeaturesStyleFourComponent, LearningCoursesComponent, LearningAboutComponent, TestimonialsStyleTwoComponent, GetInstantCoursesTwoComponent, PartnerSliderComponent, VideoStyleTwoComponent, FunfactsStyleFourComponent, LearningBlogComponent, LearningViewCoursesComponent, LearningPremiumAccessComponent],
    templateUrl: './learning-management.component.html',
    styleUrls: ['./learning-management.component.scss']
})
export class LearningManagementComponent {}