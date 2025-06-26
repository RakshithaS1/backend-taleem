import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-distance-banner',
    imports: [RouterLink],
    templateUrl: './distance-banner.component.html',
    styleUrls: ['./distance-banner.component.scss']
})
export class DistanceBannerComponent {}