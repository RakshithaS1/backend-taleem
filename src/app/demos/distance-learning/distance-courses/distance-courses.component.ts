import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-distance-courses',
    imports: [RouterLink, NgClass, NgIf],
    templateUrl: './distance-courses.component.html',
    styleUrls: ['./distance-courses.component.scss']
})
export class DistanceCoursesComponent {

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}