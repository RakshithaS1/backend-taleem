import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-instructor-quote',
    imports: [NgClass],
    templateUrl: './instructor-quote.component.html',
    styleUrls: ['./instructor-quote.component.scss']
})
export class InstructorQuoteComponent {

    constructor(
        public router: Router
    ) { }

}