import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiServices } from '../../../shared/services/api-services.service';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-course-details-style-one',
    imports: [RouterLink, NgClass, NgIf, CommonModule],
    templateUrl: './course-details-style-one.component.html',
    styleUrls: ['./course-details-style-one.component.scss']
})
export class CourseDetailsStyleOneComponent implements OnInit {
    currentTab = 'tab1';
    isOpen = false;
    course: any = null;
    courseDetails: any = null;
    loading: boolean = false;
    error: string | null = null;
    safeUrl: SafeResourceUrl | null = null;
    isUserSubscribed: boolean = false;
    paymentData: any = null;
    showPayment: boolean = false;
    userDetail: any = null;
    showSubscribeMessage = false;
    imageUrl: string = '';
    iconImageUrl: string = '';
    averageRating: number = 0;
    showLoginToViewVideoMessage: boolean = false;
    curriculum: any[] = [];
    isCurriculumLoading = false;
    curriculumList: any[] = [];
    selectedSubCourse: any = null;
    reviews: any[] = [];

    constructor(private route: ActivatedRoute, private api: ApiServices, private sanitizer: DomSanitizer, private http: HttpClient) {}

    ngOnInit() {
        const courseId = this.route.snapshot.paramMap.get('id');
        if (courseId) {
            this.loading = true;
            this.error = null;
            
            console.log('Fetching course details for ID:', courseId);
            
            // Fetch course details using the backend API
            this.api.getSubCourseDetails(courseId).subscribe({
                next: (res) => {
                    console.log('Course Details Response:', res);
                    
                    if (res.success && res.data) {
                        const data = res.data;
                        
                        // Map the course data from backend response with safe defaults
                        this.course = {
                            id: data.id || null,
                            title: data.title || 'Untitled Course',
                            description: data.description || 'No description available',
                            price: data.price || null,
                            image: data.image || null,
                            isFree: data.isFree || false,
                            isPremium: data.isPremium || false,
                            educator: data.educator || null,
                            
                            // Instructor data
                            instructor: {
                                name: data.instructor || data.educator || 'Unknown Instructor',
                                bio: data.instructorBio || null,
                                image: data.image || null
                            },
                            
                            // Course details
                            duration: data.duration || null,
                            lessons: data.lessons || 0,
                            enrolled: data.enrolled || 0,
                            access: data.access || 'Lifetime',
                            
                            // Curriculum/subjects
                            SubjectMaster: data.subjects || [],
                            
                            // Reviews  
                            reviews :data.reviews,
                          
                            
                            // Additional fields
                            CourseCost: data.price || null,
                            IconImage: data.image || null,
                            StartDate: data.startDate || null,
                            Registration: {
                                Name: data.instructor || data.educator || 'Unknown Instructor'
                            }
                        };
                        console.log('Assigned course object:', this.course); // <-- Add this line
                        
                        // Set image URL
                        if (data.image) {
                            this.iconImageUrl = this.getImageUrl(data.image);
                        } else {
                            this.iconImageUrl = 'assets/default-image.jpg';
                        }
                        
                        // Calculate average rating
                        this.averageRating = this.calculateAverageRating(this.course.reviews || []);
                        
                        console.log("Processed course data:", this.course);
                    } else {
                        console.error('Invalid response format:', res);
                        this.error = 'Course not found or invalid response format';
                    }
                    
                    this.loading = false;
                },
                error: (error) => {
                    console.error('Error fetching course details:', error);
                    
                    // Handle different types of errors
                    if (error.status === 500) {
                        this.error = 'Backend server error. Please check if the server is running.';
                    } else if (error.status === 404) {
                        this.error = 'Course not found.';
                    } else if (error.status === 0) {
                        this.error = 'Cannot connect to server. Please check if the backend is running.';
                    } else {
                        this.error = `Failed to load course details. Error: ${error.message || 'Unknown error'}`;
                    }
                    
                    this.loading = false;
                }
            });
        } else {
            this.error = 'No course ID provided';
            this.loading = false;
        }
    }

    calculateAverageRating(reviews: any[]): number {
        if (!reviews || reviews.length === 0) return 0;
        const sum = reviews.reduce((acc, review) => acc + (review.rating || 0), 0);
        return sum / reviews.length;
    }

    switchTab(event: any, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
        if (tab === 'tab4' && this.course?.id) {
            this.api.getCourseReviews(this.course.id).subscribe({
                next: (res) => {
                    this.reviews = res.reviews || [];
                },
                error: (err) => {
                    this.reviews = [];
                }
            });
        }
    }

   
    openPopup(url?: string): void {
        // Show login message at top right
        this.showLoginToViewVideoMessage = true;
        setTimeout(() => {
            this.showLoginToViewVideoMessage = false;
        }, 2000);
        if (url && url.trim()) {
            this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        } else {
            // Provide a default video or set to null
            this.safeUrl = null;
        }
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
        this.safeUrl = null;
    }

    openPreview(url: string): void {
        window.open(url, '_blank');
    }

    subscribeCourse(): void {
        this.showSubscribeMessage = true;
        setTimeout(() => {
            this.showSubscribeMessage = false;
        }, 2000);
    }

    onImageError(event: Event) {
        (event.target as HTMLImageElement).src = '/assets/default-instructor.jpg';
    }

    getImageUrl(imagePath: string): string {
        if (!imagePath) {
            return 'assets/default-image.jpg'; // fallback image
        }
        // If the path is already absolute, return as is
        if (imagePath.startsWith('http')) {
            return imagePath;
        }
        // Otherwise, prepend your backend base URL
        return `http://localhost:3214${imagePath}`;
    }
    
    
}