import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-funfacts-style-one',
    imports: [NgClass],
    templateUrl: './funfacts-style-one.component.html',
    styleUrls: ['./funfacts-style-one.component.scss']
})
export class FunfactsStyleOneComponent {

    constructor(
        public router: Router
    ) { }

}