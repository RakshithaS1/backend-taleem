import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-video-style-two',
    imports: [NgIf],
    templateUrl: './video-style-two.component.html',
    styleUrls: ['./video-style-two.component.scss']
})
export class VideoStyleTwoComponent {

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}