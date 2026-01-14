import { Component } from '@angular/core';
import { DashboardNavbarComponent } from "../../../components/dashboard-navbar/dashboard-navbar.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
    selector: 'app-account-settings',
    imports: [DashboardNavbarComponent, FormsModule, CommonModule, RouterModule, RouterLink],
    templateUrl: './account-settings.component.html'
})
export class AccountSettingsComponent {
  user = {
    firstName: 'Rashed',
    lastName: 'Kabir',
    email: 'rshakbair365@gmal.com',
    phone: '+810 321 889 021',
    password: ''
  };

  onSave(): void {
    console.log('Form data saved:', this.user);
  }
  onCancel(): void {
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: ''
    };
  }

  resetForm(): void {
    this.user = {
      firstName: 'Rashed',
      lastName: 'Kabir',
      email: 'rshakbair365@gmal.com',
      phone: '+810 321 889 021',
      password: ''
    };
  }
  isClicked = false; 

  
  onButtonClick(): void {
    this.isClicked = true; 
    setTimeout(() => {
      this.isClicked = false; 
    }, 500); 
  }
}
