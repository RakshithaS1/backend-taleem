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
@Component({
  selector: 'app-change-password-dialog',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule],
  templateUrl: './change-password-dialog.component.html',
  styleUrl: './change-password-dialog.component.scss'
})
export class ChangePasswordDialogComponent {
  form: FormGroup;
  hideOld = true;
  hideNew = true;
  hideConfirm = true;
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<ChangePasswordDialogComponent>, private api: ApiServices, private commmon: CommonServices, private router: Router) {
    this.form = this.fb.group({
      old_password: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  submit() {
    const { password, confirmPassword } = this.form.value;
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log("Change Password Payload:", this.form.value);
    // TODO: Call API here

          console.log('Password change request:', this.form.value);
      // Call API here
      this.api.put('users/change/password', this.form.value).subscribe((resp) => {
        console.log(resp);
        if (resp.success) {
          this.commmon.notification(resp.message, true);
          this.commmon.logout();
          this.dialogRef.close();
          this.router.navigate(['/profile-authentication']);
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
