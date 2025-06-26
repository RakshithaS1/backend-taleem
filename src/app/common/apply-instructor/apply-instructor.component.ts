import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-apply-instructor',
    imports: [NgClass, NgIf],
    templateUrl: './apply-instructor.component.html',
    styleUrls: ['./apply-instructor.component.scss']
})
export class ApplyInstructorComponent {

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}