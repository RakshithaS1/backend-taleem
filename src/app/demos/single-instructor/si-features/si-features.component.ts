import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-si-features',
    imports: [NgIf],
    templateUrl: './si-features.component.html',
    styleUrls: ['./si-features.component.scss']
})
export class SiFeaturesComponent {

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}