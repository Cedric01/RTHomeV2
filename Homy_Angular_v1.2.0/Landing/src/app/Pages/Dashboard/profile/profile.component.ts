import { Component } from '@angular/core';
import { DashboardNavbarComponent } from "../../../components/dashboard-navbar/dashboard-navbar.component";
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-profile',
    imports: [DashboardNavbarComponent, NgSelectModule, FormsModule, CommonModule],
    templateUrl: './profile.component.html'
})
export class ProfileComponent {
  countries = [
    { name: 'Afghanistan' },
    { name: 'Albania' },
    { name: 'Algeria' },
    { name: 'Andorra' },
    { name: 'Angola' },
    { name: 'Antigua and Barbuda' },
    { name: 'Argentina' },
    { name: 'Armenia' },
    { name: 'Australia' },
    { name: 'Austria' },
    { name: 'Azerbaijan' },
    { name: 'Bahamas' },
    { name: 'Bahrain' },
    { name: 'Bangladesh' },
    { name: 'Barbados' },
    { name: 'Belarus' },
    { name: 'Belgium' },
    { name: 'Belize' },
    { name: 'Benin' },
    { name: 'Bhutan' }
  ];
  cities = [
    { name: 'Boston' },
    { name: 'Tokyo' },
    { name: 'Delhi' },
    { name: 'Shanghai' },
    { name: 'Mumbai' },
    { name: 'Bangalore' }
  ];
  onthercities = [
    { name: 'Maine' },
    { name: 'Tokyo' },
    { name: 'Delhi' },
    { name: 'Shanghai' },
    { name: 'Mumbai' },
    { name: 'Bangalore' }
  ];
  positions = [
    { name: 'Agent', value: 'Agent' },
    { name: 'Agency', value: 'Agency' }
  ];
  user = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    position: '',
    phoneNumber: '',
    website: '',
    about: ''
  };

  // Clear all the data in the form
  clearForm() {
    this.user = {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      position: '',
      phoneNumber: '',
      website: '',
      about: ''
    };
  }
  imageSrc: string | ArrayBuffer | null = null;  // This holds the current image source

  // Method to handle the file input change
  onFileChange(event: any): void {
    const file = event.target.files[0]; // Get the uploaded file
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result;  // Set the imageSrc to the result of the file reader
      };
      reader.readAsDataURL(file);  // Convert the file to a data URL
    }
  }
  networks = [
    { link: 'https://www.facebook.com/zubayer0145' },
    { link: 'https://twitter.com/FIFAcom' }
  ];

  // Method to add a new network link input field
  addNetwork(): void {
    this.networks.push({ link: '' }); // Adds a new empty object to the array
  }
}
