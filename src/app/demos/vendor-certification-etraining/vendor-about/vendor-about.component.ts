import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-vendor-about',
    imports: [RouterLink, NgIf],
    templateUrl: './vendor-about.component.html',
    styleUrls: ['./vendor-about.component.scss']
})
export class VendorAboutComponent {

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}