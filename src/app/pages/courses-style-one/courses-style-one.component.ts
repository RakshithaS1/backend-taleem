import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServices } from '../../../shared/services/api-services.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-courses-style-one',
    templateUrl: './courses-style-one.component.html',
    styleUrls: ['./courses-style-one.component.scss'],
    imports: [CommonModule]
})
export class CoursesStyleOneComponent implements OnInit {
  mainCourses: any[] = [];
  selectedMainCourseId: string = '';
  subCourses: any[] = [];
  loading: boolean = false;
  courseDetailsIds: Set<string> = new Set();

  constructor(private api: ApiServices, private router: Router) {}

  ngOnInit() {
    this.fetchCourseDetailsIds();
    this.fetchMainCourses();
  }

  fetchCourseDetailsIds() {
    this.api.get('course-details').subscribe((res: any) => {
      if (Array.isArray(res)) {
        this.courseDetailsIds = new Set(res.map((cd: any) => cd.CourseID?.toString() || cd.id?.toString()));
      }
    });
  }

  fetchMainCourses() {
    this.api.getMainCourses().subscribe({
      next: (res: any) => {
        console.log('Main courses response:', res);
        this.mainCourses = res;
        if (res && res.length > 0) {
          this.selectedMainCourseId = res[0].id;
          this.fetchSubCourses(this.selectedMainCourseId);
        }
      },
      error: (err) => {
        console.error('Failed to fetch main courses:', err);
        this.mainCourses = [];
      }
    });
  }

  onMainCourseChange(event: any) {
    this.selectedMainCourseId = event.target.value;
    this.fetchSubCourses(this.selectedMainCourseId);
  }

  fetchSubCourses(mainCourseId: string) {
    this.loading = true;
    this.api.getSubCourses(mainCourseId).subscribe((res: any) => {
      this.subCourses = res || [];
      this.loading = false;
    }, () => { this.loading = false; });
  }

  goToDetails(subCourse: any) {
    this.router.navigate(['/course-details-style-one', subCourse.id]);
  }
}