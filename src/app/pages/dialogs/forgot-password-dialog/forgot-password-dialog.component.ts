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
  selector: 'app-forgot-password-dialog',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule],
  templateUrl: './forgot-password-dialog.component.html',
  styleUrl: './forgot-password-dialog.component.scss'
})
export class ForgotPasswordDialogComponent {
  forgotStep = 1;
  form: FormGroup;
  hideNew = true;
  hideConfirm = true;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<ForgotPasswordDialogComponent>, private api: ApiServices, private commmon: CommonServices, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      otp: [''],
      newPassword: [''],
      confirmPassword: ['']
    });
  }

  onForgotPasswordSubmit() {
    switch (this.forgotStep) {
      case 1:
        if (this.form.get('email')?.valid) {
          const email = this.form.get('email')?.value;
          console.log('Send OTP to:', email);
          const type = 'email'
          this.api.post('users/send-otp', { identifier: email, type, otp_type: 'forgot_password' }).subscribe((resp) => {
            console.log(resp);
            if (resp.status) {
               this.commmon.notification(resp.message, true);
              // this.commmon.logout();
              // this.dialogRef.close();
              // this.router.navigate(['/profile-authentication']);
              // this.form.reset();

              // // TODO: Call API to send OTP
              this.forgotStep = 2;
              this.form.get('otp')?.setValidators([Validators.required]);
              this.form.get('otp')?.updateValueAndValidity();
            } else {
              this.forgotStep = 1;
              this.commmon.notification(resp.message, true)
            }
          })

        }
        break;

      case 2:
        if (this.form.get('otp')?.valid) {
          const otp = this.form.get('otp')?.value;
          console.log('Verifying OTP:', otp);
          // TODO: Call API to verify OTP
          const email = this.form.get('email')?.value;
          const type = 'email'; // Determine type
          this.api.post('users/verify-otp', { identifier: email, otp: otp, type, otp_type: 'forgot_password' }).subscribe((resp) => {
            if (resp.success) {
              this.forgotStep = 3;
              this.form.get('newPassword')?.setValidators([Validators.required, Validators.minLength(6)]);
              this.form.get('confirmPassword')?.setValidators([Validators.required]);
              this.form.get('newPassword')?.updateValueAndValidity();
              this.form.get('confirmPassword')?.updateValueAndValidity();
            } else {
              this.forgotStep = 2;
              this.commmon.notification(resp.message, true)

            }
          });
        }
        break;

      case 3:
        const pass = this.form.get('newPassword')?.value;
        const confirm = this.form.get('confirmPassword')?.value;
        if (pass !== confirm) {
          alert("Passwords do not match");
          return;
        }
        console.log('Resetting password to:', pass);
        // TODO: Call API to reset password
        const email = this.form.get('email')?.value;
        const type = 'email';
        this.api.post('users/reset-password', { identifier: email, newPassword: pass, type }).subscribe((resp) => {
          // alert('Password Reset Successfully!');
          if (resp.success) {
            this.forgotStep = 1;
            this.form.reset();
            this.close();
            this.commmon.notification(resp.message, false);
            this.router.navigate(['/profile-authentication']);
          } else {
            this.forgotStep = 3;
            this.commmon.notification(resp.message, true);
          }
        });
        break;
    }
  }

  handleSubmit() {
    if (this.form.invalid) {
      console.log('Form is invalid');
      return;
    }

    const formData = this.form.value;
    if (formData.newPassword !== formData.confirmPassword) {
      alert('New password and confirm password do not match');
      return;
    }

    console.log('Reset Password Payload:', formData);
  }

  close() {
    this.dialogRef.close();
  }

    resendOtp() {
      const email = this.form.get('email')?.value;
      const type = 'email' // emailPattern.test(this.identifier) ? 'email' : 'mobile'; // Determine type
      this.api.post('users/send-otp', { identifier: email, type, otp_type: 'forgot_password' }).subscribe((resp) => {
        if (resp.status) {
          this.forgotStep = 2;
          this.commmon.notification(resp.message, false);
        } else {
          this.forgotStep = 1;
          this.commmon.notification(resp.message, true);
        }
      });
    
  }
}
