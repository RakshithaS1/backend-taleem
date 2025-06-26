import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OurStoryComponent } from './our-story/our-story.component';
import { SuccessPeopleComponent } from '../../common/success-people/success-people.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-success-story',
    imports: [RouterLink, NgIf, OurStoryComponent, SuccessPeopleComponent],
    templateUrl: './success-story.component.html',
    styleUrls: ['./success-story.component.scss']
})
export class SuccessStoryComponent {

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}