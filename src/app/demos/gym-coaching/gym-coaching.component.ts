import { Component } from '@angular/core';
import { GymCoachingBannerComponent } from './gym-coaching-banner/gym-coaching-banner.component';
import { FeaturedComponent } from '../../common/featured/featured.component';
import { WhyChooseUsComponent } from '../../common/why-choose-us/why-choose-us.component';
import { GymCoursesComponent } from './gym-courses/gym-courses.component';
import { FunfactsStyleThreeComponent } from '../../common/funfacts-style-three/funfacts-style-three.component';
import { FeedbackStyleThreeComponent } from '../../common/feedback-style-three/feedback-style-three.component';
import { ExpertTrainerComponent } from '../../common/expert-trainer/expert-trainer.component';
import { AppDownloadComponent } from '../../common/app-download/app-download.component';
import { GymBlogComponent } from './gym-blog/gym-blog.component';
import { OnlinePlatformComponent } from '../../common/online-platform/online-platform.component';

@Component({
    selector: 'app-gym-coaching',
    imports: [GymCoachingBannerComponent, FeaturedComponent, WhyChooseUsComponent, GymCoursesComponent, FunfactsStyleThreeComponent, FeedbackStyleThreeComponent, ExpertTrainerComponent, AppDownloadComponent, GymBlogComponent, OnlinePlatformComponent],
    templateUrl: './gym-coaching.component.html',
    styleUrls: ['./gym-coaching.component.scss']
})
export class GymCoachingComponent {}