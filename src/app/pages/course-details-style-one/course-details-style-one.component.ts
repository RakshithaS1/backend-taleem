import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-course-details-style-one',
    imports: [RouterLink, NgClass, NgIf],
    templateUrl: './course-details-style-one.component.html',
    styleUrls: ['./course-details-style-one.component.scss']
})
export class CourseDetailsStyleOneComponent {

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}