import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { ApiServices } from '../../../../shared/services/api-services.service';
import { CommonServices } from '../../../../shared/services/common-services.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-edit-profile',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss'
})
export class EditProfileComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<EditProfileComponent>, private api: ApiServices, private commmon: CommonServices, private router: Router) {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', [Validators.required]],
      mobile: ['', Validators.required],
      // country : ['', Validators.required]
      // email: ['', [Validators.required, Validators.email]],
      // otp : ['', [Validators.required]]
    });
    const profiledata = this.commmon.getLocalData(environment.AUTH_NAME + 'profile');
    this.form.patchValue({
      firstname: profiledata.firstname,
      lastname: profiledata.lastname,
      mobile: profiledata.mobile
    })
  }

  submit() {
    console.log("Change Password Payload:", this.form.value);
    this.api.put('users/profile', this.form.value).subscribe((resp) => {
      console.log(resp);
      if (resp.success) {
        this.commmon.notification(resp.message, true);
        // this.commmon.logout();
        this.dialogRef.close();
        this.router.navigate(['/']);
        this.form.reset();
      } else {
        this.commmon.notification(resp.message, true)
      }
    })
  }

  close() {
    this.dialogRef.close();
  }
}
