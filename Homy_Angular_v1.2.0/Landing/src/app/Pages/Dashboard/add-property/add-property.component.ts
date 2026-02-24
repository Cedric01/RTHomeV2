import { Component } from '@angular/core';
import { DashboardNavbarComponent } from "../../../components/dashboard-navbar/dashboard-navbar.component";
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PropertyService } from '../../../service/property.service';
import { LocationService } from '../../../service/location.service';
import { ListingTypeService } from '../../../service/listingType.service';
import { SelectOptionListing } from '../../../models/selectoptionlisting';

@Component({
    selector: 'app-add-property',
    imports: [DashboardNavbarComponent, NgSelectModule, FormsModule, CommonModule],
    templateUrl: './add-property.component.html'
})
export class AddPropertyComponent {
  options = [
    { value: '1', label: 'Apartments' },
    { value: '2', label: 'Condos' },
    { value: '3', label: 'Houses' },
    { value: '4', label: 'Industrial' },
    { value: '6', label: 'Villas' }
  ];
  listed = [
    { label: 'All Listing', value: 'all' },
    { label: 'Buy', value: 'buy' },
    { label: 'Sell', value: 'sell' },
    { label: 'Rent', value: 'rent' }
  ];
  selectedOption = null;
  garageOptions = [
    { label: '0', value: 0 },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 }
  ];
  selectedGarage = null;
  bathroomOptions = [
    { label: '0', value: 0 },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 }
  ];
  selectedBathrooms = null;
  kitchenOptions = [
    { label: '0', value: 0 },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 }
  ];
  selectedKitchens = null;
  floorsOptions = [
    { label: 'Ground', value: 0 },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 }
  ];
  selectedFloor = null;
  uploadedFiles: Array<{ name: string }> = [];
  listingTypes: SelectOptionListing[] = [];

  constructor(
  private propertyService: PropertyService,
  private locationService: LocationService,
  private listingTypeService: ListingTypeService) {}

  ngOnInit(): void {
  this.loadLookups();
}

private loadLookups(): void {
  this.listingTypeService.getListingTypes().subscribe(types => {
    this.listingTypes = types;
  });
}
  


  onFileChange(event: any): void {
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
      this.uploadedFiles.push({ name: files[i].name });
    }
  }

  removeFile(fileToRemove: { name: string }): void {
    this.uploadedFiles = this.uploadedFiles.filter(file => file !== fileToRemove);
  }
  amenities = [
    { value: '01', label: 'A/C & Heating', selected: false },
    { value: '02', label: 'Garages', selected: false },
    { value: '03', label: 'Swimming Pool', selected: false },
    { value: '04', label: 'Parking', selected: false },
    { value: '05', label: 'Lake View', selected: false },
    { value: '06', label: 'Garden', selected: false },
    { value: '07', label: 'Disabled Access', selected: false },
    { value: '08', label: 'Pet Friendly', selected: false },
    { value: '09', label: 'Ceiling Height', selected: false },
    { value: '10', label: 'Outdoor Shower', selected: false },
    { value: '11', label: 'Refrigerator', selected: false },
    { value: '12', label: 'Fireplace', selected: false },
    { value: '13', label: 'Wifi', selected: false },
    { value: '14', label: 'TV Cable', selected: false },
    { value: '15', label: 'Barbeque', selected: false },
    { value: '16', label: 'Laundry', selected: false },
    { value: '17', label: 'Dryer', selected: false },
    { value: '18', label: 'Lawn', selected: false },
    { value: '19', label: 'Elevator', selected: false },
  ];
  countries = [
    { value: '0', label: 'Select Country' },
    { value: 'AF', label: 'Afghanistan' },
    { value: 'AL', label: 'Albania' },
    { value: 'DZ', label: 'Algeria' },
    { value: 'AD', label: 'Andorra' },
    { value: 'AO', label: 'Angola' },
    { value: 'AG', label: 'Antigua and Barbuda' },
    { value: 'AR', label: 'Argentina' },
    { value: 'AM', label: 'Armenia' },
    { value: 'AU', label: 'Australia' },
    { value: 'AT', label: 'Austria' },
    { value: 'AZ', label: 'Azerbaijan' },
    { value: 'BS', label: 'Bahamas' },
    { value: 'BH', label: 'Bahrain' },
    { value: 'BD', label: 'Bangladesh' },
    { value: 'BB', label: 'Barbados' },
    { value: 'BY', label: 'Belarus' },
    { value: 'BE', label: 'Belgium' },
    { value: 'BZ', label: 'Belize' },
    { value: 'BJ', label: 'Benin' },
    { value: 'BT', label: 'Bhutan' }
  ];

  selectedCuntry = null;
  cities = [
    { value: '0', name: 'Select City' },
    { value: '1', name: 'Dhaka' },
    { value: '2', name: 'Tokyo' },
    { value: '3', name: 'Delhi' },
    { value: '4', name: 'Shanghai' },
    { value: '5', name: 'Mumbai' },
    { value: '6', name: 'Bangalore' }
  ];

  selectedCty = null;
  states = [
    { value: '0', name: 'Select State' },
    { value: '1', name: 'Dhaka' },
    { value: '2', name: 'Tokyo' },
    { value: '3', name: 'Delhi' },
    { value: '4', name: 'Shanghai' },
    { value: '5', name: 'Mumbai' },
    { value: '6', name: 'Bangalore' }
  ];

  selectedState = null;
}
