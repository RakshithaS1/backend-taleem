import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FunfactsStyleTwoComponent } from '../../common/funfacts-style-two/funfacts-style-two.component';

@Component({
    selector: 'app-about-style-one',
    imports: [RouterLink, FunfactsStyleTwoComponent],
    templateUrl: './about-style-one.component.html',
    styleUrls: ['./about-style-one.component.scss']
})
export class AboutStyleOneComponent {

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}