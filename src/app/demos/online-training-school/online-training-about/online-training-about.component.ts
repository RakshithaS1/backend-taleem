import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-online-training-about',
    imports: [RouterLink, NgIf],
    templateUrl: './online-training-about.component.html',
    styleUrls: ['./online-training-about.component.scss']
})
export class OnlineTrainingAboutComponent {

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}