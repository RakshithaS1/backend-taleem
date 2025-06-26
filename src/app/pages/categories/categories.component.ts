import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';

@Component({
    selector: 'app-categories',
    imports: [RouterLink, SubscribeComponent],
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {}