import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-profile-quiz',
    imports: [RouterLink, NgClass, NgIf],
    templateUrl: './profile-quiz.component.html',
    styleUrls: ['./profile-quiz.component.scss']
})
export class ProfileQuizComponent {

    // Tabs
    currentTab = 'tab1';
    currentTab2 = 'tab-pane1';
    currentTab3 = 'tab-pane-pane1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }
    switchTab2(event: MouseEvent, tabPane: string) {
        event.preventDefault();
        this.currentTab2 = tabPane;
    }
    switchTab3(event: MouseEvent, tabPane1: string) {
        event.preventDefault();
        this.currentTab3 = tabPane1;
    }

}