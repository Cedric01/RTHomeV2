import { Component } from '@angular/core';
import { DashboardNavbarComponent } from "../../../components/dashboard-navbar/dashboard-navbar.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-account-settings-pass-change',
    imports: [DashboardNavbarComponent, CommonModule, ReactiveFormsModule],
    templateUrl: './account-settings-pass-change.component.html'
})
export class AccountSettingsPassChangeComponent {
  changePasswordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.changePasswordForm = this.fb.group(
      {
        oldPassword: ['', Validators.required],
        newPassword: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: this.passwordMatchValidator('newPassword', 'confirmPassword')
      }
    );
  }
  passwordMatchValidator(newPassword: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const newPasswordControl = formGroup.controls[newPassword];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors['passwordMismatch']  
      ) {
        return;
      }

      if (newPasswordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  }


  
  onSubmit(): void {
    if (this.changePasswordForm.valid) {
      console.log('Password successfully changed.');
      
    } else {
      console.log('Form is invalid!');
    }
  }
}
