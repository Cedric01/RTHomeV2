import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-property-features',
    imports: [CommonModule],
    templateUrl: './property-features.component.html'
})
export class PropertyFeaturesComponent {
  accordionSections = [
    {
      id: 'collapseOneA',
      title: 'Property Details',
      isExpanded: true,
      items: [
        { label: 'Bedrooms', value: '03' },
        { label: 'Furnishing', value: 'Semi furnished' },
        { label: 'Bathrooms', value: '02' },
        { label: 'Year Built', value: '2010' },
        { label: 'Floor', value: 'Ground' },
        { label: 'Garage', value: '03' },
        { label: 'Ceiling Height', value: '3.2m' },
        { label: 'Property Type', value: 'Apartment' },
        { label: 'Renovation', value: '3.2m' },
        { label: 'Status', value: 'For Sale' }
      ]
    },
    {
      id: 'collapseTwoA',
      title: 'Utility Details',
      isExpanded: false,
      items: [
        { label: 'Heating', value: 'Natural gas' },
        { label: 'Intercom', value: 'Yes' },
        { label: 'Air Condition', value: 'Yes' },
        { label: 'Window Type', value: 'Aluminum frame' },
        { label: 'Fireplace', value: '--' },
        { label: 'Cable TV', value: '--' },
        { label: 'Elevator', value: 'Yes' },
        { label: 'WiFi', value: 'Yes' },
        { label: 'Ventilation', value: 'Yes' }
      ]
    },
    {
      id: 'collapseThreeA',
      title: 'Outdoor Features',
      isExpanded: false,
      items: [
        { label: 'Garage', value: 'Yes' },
        { label: 'Parking', value: 'Yes' },
        { label: 'Garden', value: '30m2' },
        { label: 'Disabled Access', value: 'Ramp' },
        { label: 'Swimming Pool', value: '--' },
        { label: 'Fence', value: '--' },
        { label: 'Security', value: '3 Cameras' },
        { label: 'Pet Friendly', value: 'Yes' }
      ]
    }
  ];
}
