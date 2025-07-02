import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServices } from '../../../shared/services/api-services.service';
import { CommonServices } from '../../../shared/services/common-services.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordDialogComponent } from '../dialogs/change-password-dialog/change-password-dialog.component';
import { ForgotPasswordDialogComponent } from '../dialogs/forgot-password-dialog/forgot-password-dialog.component'

@Component({
  selector: 'app-profile-authentication',
  imports: [RouterLink, CommonModule, ReactiveFormsModule, FormsModule,

    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,],
  templateUrl: './profile-authentication.component.html',
  styleUrls: ['./profile-authentication.component.scss']
})
export class ProfileAuthenticationComponent {
  loginForm!: FormGroup;
  registerForm!: FormGroup;
  isLoggedIn = false;
  changePasswordForm!: FormGroup;
  forgotPasswordForm!: FormGroup;
  user: any;
  activeForm: 'change' | 'forgot' | null = null;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiServices,
    private commonService: CommonServices,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.loginForm = this.fb.group({
      MobileNumber: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.registerForm = this.fb.group({
      MobileNumber: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.commonService.setBreadCrumData({
      title: 'Profile Authentication',
      breadcrumb: [
        { name: 'Home', link: '/' },
        { name: 'Profile Authentication', link: '/profile-authentication' }
      ]
    });
  }
  ngOnInit(): void {
    this.commonService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
    });
    if (this.isLoggedIn) {
      this.router.navigate(['/my-profile']);      //this.getUserProfile();
    } else {
      this.initializeForm();
    }
  }

  initializeForm(): void {
    this.loginForm = this.fb.group({
      Email: ['', [Validators.required]],  // Validate for Email format
      Password: ['', [Validators.required, Validators.minLength(6)]],  // Ensure Password is at least 8 chars long
    });

    this.registerForm = this.fb.group({
        Name : ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],  // Validate for Name format
      MobileNumber: ['', [Validators.required, Validators.maxLength(10)]],  // Validate for Email format
      Email: ['', [Validators.required, Validators.minLength(8)]],  // Ensure Password is at least 8 chars long
      Password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.forgotPasswordForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      otp: [''],               // step 2
      newPassword: [''],       // step 3
      confirmPassword: ['']    // step 3
    });

    this.changePasswordForm = this.fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }


  updateProfileData(data: any) {
    this.apiService.put('profile', data).subscribe({
      next: (res: any) => {
        if (res.status) {
          this.commonService.setLocalData('profile', data);
        }
      },
      error: (err: any) => {
        console.error('Error updating profile data:', err);
      }
    });
  }
  changePassword(data: any) {
    this.apiService.put('profile/change-password', data).subscribe({
      next: (res: any) => {
        if (res.status) {
          // Handle successful password change
          console.log('Password changed successfully');
        }
      },
      error: (err: any) => {
        console.error('Error changing password:', err);
      }
    });
  }

  login(): void {
    if (this.loginForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    const formData = this.loginForm.value;
    this.apiService.post('website/login', {
      Email: formData.Email,
      Password: formData.Password
    }).subscribe({
      next: (res: any) => {
        if (res.success) {
          const data =  res.data;
          this.commonService.setLocalData(environment.AUTH_NAME + "token", data.token);
          console.log('Login successful');
          this.commonService.login(data.token);
          this.commonService.notification(res.message, false);
          this.router.navigate(['/']);
          // window.location.reload();


        } else {
          this.commonService.notification(res.message, true);
        }
      },
      error: (err: any) => {
        this.commonService.notification(err.message, true);
        console.error('Error during login:', err);
      }
    });
  }

  register(): void {
    if (this.registerForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    const formData = this.registerForm.value;
    this.apiService.post('website/register', {
      MobileNumber: formData.MobileNumber,
      Email: formData.Email,
      Password: formData.Password,
      Name: formData.Name
    }).subscribe({
      next: (res: any) => {
        if (res.success) {
          // const encryptedData = this.security.encrypt(this.commonService.getLocalData('starttime'), res.data);
          const data =  res.data ;
          this.commonService.setLocalData(environment.AUTH_NAME + "token", data.token);
          // this.commonService.setLocalData('token', encryptedData);
          console.log('Registration successfull.');
          // this.router.navigate(['/']);
          this.commonService.notification(res.message, false);
        } else {
          this.commonService.notification(res.message, true);
        }
      },
      error: (err: any) => {
        console.error('Error during login:', err);
        this.commonService.notification(err.message, true);

      }
    });
  }
  forgotStep: number = 1;
  onForgotPasswordSubmit() {
    switch (this.forgotStep) {
      case 1:
        if (this.forgotPasswordForm.get('Email')?.valid) {
          const Email = this.forgotPasswordForm.get('Email')?.value;
          console.log('Send OTP to:', Email);
          // TODO: Call API to send OTP
          this.forgotStep = 2;
          this.forgotPasswordForm.get('otp')?.setValidators([Validators.required]);
          this.forgotPasswordForm.get('otp')?.updateValueAndValidity();
        }
        break;

      case 2:
        if (this.forgotPasswordForm.get('otp')?.valid) {
          const otp = this.forgotPasswordForm.get('otp')?.value;
          console.log('Verifying OTP:', otp);
          // TODO: Call API to verify OTP
          this.forgotStep = 3;
          this.forgotPasswordForm.get('newPassword')?.setValidators([Validators.required, Validators.minLength(6)]);
          this.forgotPasswordForm.get('confirmPassword')?.setValidators([Validators.required]);
          this.forgotPasswordForm.get('newPassword')?.updateValueAndValidity();
          this.forgotPasswordForm.get('confirmPassword')?.updateValueAndValidity();
        }
        break;

      case 3:
        const pass = this.forgotPasswordForm.get('newPassword')?.value;
        const confirm = this.forgotPasswordForm.get('confirmPassword')?.value;
        if (pass !== confirm) {
          alert("Passwords do not match");
          return;
        }
        console.log('Resetting Password to:', pass);
        // TODO: Call API to reset Password
        alert("Password has been reset!");
        this.forgotStep = 1;
        this.forgotPasswordForm.reset();
        break;
    }
  }

  submitChangePassword() {
    if (this.changePasswordForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    const formData = this.changePasswordForm.value;
    if (formData.newPassword !== formData.confirmPassword) {
      this.commonService.notification('New Password and confirm Password do not match', true);
      return;
    }

    this.apiService.put('profile/change-password', {
      oldPassword: formData.oldPassword,
      newPassword: formData.newPassword
    }).subscribe({
      next: (res: any) => {
        if (res.status) {
          this.commonService.notification('Password changed successfully', false);
          this.changePasswordForm.reset();
        } else {
          this.commonService.notification(res.message, true);
        }
      },
      error: (err: any) => {
        console.error('Error changing password:', err);
        this.commonService.notification(err.message, true);
      }
    });
  }
  openChangePasswordDialog() {
    this.dialog.open(ChangePasswordDialogComponent, {
      width: '400px',
      panelClass: 'custom-dialog-container',
      disableClose: true // 🚫 Prevent click outside or ESC
    });
  }

  openForgotPasswordDialog() {
    this.dialog.open(ForgotPasswordDialogComponent, {
      width: '400px',
      panelClass: 'custom-dialog-container',
      disableClose: true // 🚫 Prevent click outside or ESC
    });

  }

  logout() {
    if (this.isLoggedIn) {
      this.commonService.logout();
      // this.common.removeLocalData(environment.AUTH_NAME + 'token');
      this.isLoggedIn = false;
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/profile-authentication']);
    }
  }

  getUserProfile() {
    this.apiService.get('users/profile').subscribe({
      next: (res: any) => {
        if (res.status) {
          this.user =  res.data;
          this.commonService.setLocalData('profile', this.user);
        } else {
          console.error('Failed to fetch user profile:', res.message);
        }
      },
      error: (err: any) => {
        console.error('Error fetching user profile:', err);
      }
    });
  }
}