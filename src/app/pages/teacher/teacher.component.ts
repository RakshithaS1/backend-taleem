import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PremiumAccessComponent } from '../../common/premium-access/premium-access.component';

@Component({
    selector: 'app-teacher',
    imports: [RouterLink, PremiumAccessComponent],
    templateUrl: './teacher.component.html',
    styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent {}