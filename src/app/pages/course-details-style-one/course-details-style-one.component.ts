import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiServices } from '../../../shared/services/api-services.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-course-details-style-one',
    imports: [RouterLink, NgClass, NgIf, CommonModule],
    templateUrl: './course-details-style-one.component.html',
    styleUrls: ['./course-details-style-one.component.scss']
})
export class CourseDetailsStyleOneComponent implements OnInit {
    currentTab = 'tab1';
    isOpen = false;
    subCourseDetails: any = null;
    loading: boolean = false;

    constructor(private route: ActivatedRoute, private api: ApiServices) {}

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.loading = true;
            this.api.getSubCourseDetails(id).subscribe((res: any) => {
                this.subCourseDetails = res;
                this.loading = false;
            }, () => { this.loading = false; });
        }
    }

    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

    openPreview(url: string): void {
        // You can implement a modal or redirect here
        window.open(url, '_blank');
    }
}