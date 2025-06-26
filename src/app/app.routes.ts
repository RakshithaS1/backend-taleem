import { Routes } from '@angular/router';
import { ElearningSchoolComponent } from './demos/elearning-school/elearning-school.component';
import { VendorCertificationEtrainingComponent } from './demos/vendor-certification-etraining/vendor-certification-etraining.component';
import { OnlineTrainingSchoolComponent } from './demos/online-training-school/online-training-school.component';
import { DistanceLearningComponent } from './demos/distance-learning/distance-learning.component';
import { LanguageSchoolComponent } from './demos/language-school/language-school.component';
import { ModernSchoolingComponent } from './demos/modern-schooling/modern-schooling.component';
import { YogaTrainingComponent } from './demos/yoga-training/yoga-training.component';
import { HealthCoachingComponent } from './demos/health-coaching/health-coaching.component';
import { KindergartenComponent } from './demos/kindergarten/kindergarten.component';
import { GymCoachingComponent } from './demos/gym-coaching/gym-coaching.component';
import { LearningManagementComponent } from './demos/learning-management/learning-management.component';
import { BusinessCoachingComponent } from './demos/business-coaching/business-coaching.component';
import { MotivationalCoachingComponent } from './demos/motivational-coaching/motivational-coaching.component';
import { KitchenCoachingComponent } from './demos/kitchen-coaching/kitchen-coaching.component';
import { OnlineArtComponent } from './demos/online-art/online-art.component';
import { SingleInstructorComponent } from './demos/single-instructor/single-instructor.component';
import { AboutStyleOneComponent } from './pages/about-style-one/about-style-one.component';
import { AboutStyleTwoComponent } from './pages/about-style-two/about-style-two.component';
import { AboutStyleThreeComponent } from './pages/about-style-three/about-style-three.component';
import { AboutStyleFourComponent } from './pages/about-style-four/about-style-four.component';
import { SuccessStoryComponent } from './pages/success-story/success-story.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { ProfileAuthenticationComponent } from './pages/profile-authentication/profile-authentication.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { PurchaseGuideComponent } from './pages/purchase-guide/purchase-guide.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './pages/terms-of-service/terms-of-service.component';
import { CoursesStyleOneComponent } from './pages/courses-style-one/courses-style-one.component';
import { CoursesStyleTwoComponent } from './pages/courses-style-two/courses-style-two.component';
import { CoursesStyleThreeComponent } from './pages/courses-style-three/courses-style-three.component';
import { CoursesStyleFourComponent } from './pages/courses-style-four/courses-style-four.component';
import { CoursesStyleFiveComponent } from './pages/courses-style-five/courses-style-five.component';
import { CoursesStyleSixComponent } from './pages/courses-style-six/courses-style-six.component';
import { CoursesStyleSevenComponent } from './pages/courses-style-seven/courses-style-seven.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileQuizComponent } from './pages/profile-quiz/profile-quiz.component';
import { MembershipLevelsComponent } from './pages/membership-levels/membership-levels.component';
import { BecomeATeacherComponent } from './pages/become-a-teacher/become-a-teacher.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { EventsComponent } from './pages/events/events.component';
import { ProductsListStyleOneComponent } from './pages/products-list-style-one/products-list-style-one.component';
import { ProductsListStyleTwoComponent } from './pages/products-list-style-two/products-list-style-two.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { BlogStyleOneComponent } from './pages/blog-style-one/blog-style-one.component';
import { BlogStyleTwoComponent } from './pages/blog-style-two/blog-style-two.component';
import { BlogStyleThreeComponent } from './pages/blog-style-three/blog-style-three.component';
import { BlogStyleFourComponent } from './pages/blog-style-four/blog-style-four.component';
import { BlogDetailsStyleOneComponent } from './pages/blog-details-style-one/blog-details-style-one.component';
import { BlogDetailsStyleTwoComponent } from './pages/blog-details-style-two/blog-details-style-two.component';
import { BlogDetailsStyleThreeComponent } from './pages/blog-details-style-three/blog-details-style-three.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ErrorComponent } from './pages/error/error.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CourseDetailsStyleOneComponent } from './pages/course-details-style-one/course-details-style-one.component';
import { CourseDetailsStyleTwoComponent } from './pages/course-details-style-two/course-details-style-two.component';

export const routes: Routes = [
    {path: '', component: ElearningSchoolComponent},
    {path: 'vendor-certification-etraining', component: VendorCertificationEtrainingComponent},
    {path: 'online-training-school', component: OnlineTrainingSchoolComponent},
    {path: 'distance-learning', component: DistanceLearningComponent},
    {path: 'language-school', component: LanguageSchoolComponent},
    {path: 'modern-schooling', component: ModernSchoolingComponent},
    {path: 'yoga-training', component: YogaTrainingComponent},
    {path: 'health-coaching', component: HealthCoachingComponent},
    {path: 'kindergarten', component: KindergartenComponent},
    {path: 'gym-coaching', component: GymCoachingComponent},
    {path: 'learning-management', component: LearningManagementComponent},
    {path: 'business-coaching', component: BusinessCoachingComponent},
    {path: 'motivational-coaching', component: MotivationalCoachingComponent},
    {path: 'kitchen-coaching', component: KitchenCoachingComponent},
    {path: 'online-art', component: OnlineArtComponent},
    {path: 'single-instructor', component: SingleInstructorComponent},
    {path: 'about-1', component: AboutStyleOneComponent},
    {path: 'about-2', component: AboutStyleTwoComponent},
    {path: 'about-3', component: AboutStyleThreeComponent},
    {path: 'about-4', component: AboutStyleFourComponent},
    {path: 'success-story', component: SuccessStoryComponent},
    {path: 'teacher', component: TeacherComponent},
    {path: 'profile-authentication', component: ProfileAuthenticationComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'coming-soon', component: ComingSoonComponent},
    {path: 'purchase-guide', component: PurchaseGuideComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'terms-of-service', component: TermsOfServiceComponent},
    {path: 'courses-1', component: CoursesStyleOneComponent},
    {path: 'courses-2', component: CoursesStyleTwoComponent},
    {path: 'courses-3', component: CoursesStyleThreeComponent},
    {path: 'courses-4', component: CoursesStyleFourComponent},
    {path: 'courses-5', component: CoursesStyleFiveComponent},
    {path: 'courses-6', component: CoursesStyleSixComponent},
    {path: 'courses-7', component: CoursesStyleSevenComponent},
    {path: 'single-course-1', component: CourseDetailsStyleOneComponent},
    {path: 'single-course-2', component: CourseDetailsStyleTwoComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'profile-quiz', component: ProfileQuizComponent},
    {path: 'membership-levels', component: MembershipLevelsComponent},
    {path: 'become-a-teacher', component: BecomeATeacherComponent},
    {path: 'categories', component: CategoriesComponent},
    {path: 'events', component: EventsComponent},
    {path: 'event-details', component: EventDetailsComponent},
    {path: 'products-list-1', component: ProductsListStyleOneComponent},
    {path: 'products-list-2', component: ProductsListStyleTwoComponent},
    {path: 'cart', component: CartComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: 'product-details', component: ProductDetailsComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'blog-1', component: BlogStyleOneComponent},
    {path: 'blog-2', component: BlogStyleTwoComponent},
    {path: 'blog-3', component: BlogStyleThreeComponent},
    {path: 'blog-4', component: BlogStyleFourComponent},
    {path: 'single-blog-1', component: BlogDetailsStyleOneComponent},
    {path: 'single-blog-2', component: BlogDetailsStyleTwoComponent},
    {path: 'single-blog-3', component: BlogDetailsStyleThreeComponent},
    {path: 'contact', component: ContactUsComponent},
    // Here add new pages component

    {path: '**', component: ErrorComponent}, // This line will remain down from the whole pages component list
];