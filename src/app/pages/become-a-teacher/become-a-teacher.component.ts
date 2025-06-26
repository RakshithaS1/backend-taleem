import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApplyInstructorComponent } from '../../common/apply-instructor/apply-instructor.component';
import { TeacherRegisterComponent } from '../../common/teacher-register/teacher-register.component';

@Component({
    selector: 'app-become-a-teacher',
    imports: [RouterLink, ApplyInstructorComponent, TeacherRegisterComponent],
    templateUrl: './become-a-teacher.component.html',
    styleUrls: ['./become-a-teacher.component.scss']
})
export class BecomeATeacherComponent {}