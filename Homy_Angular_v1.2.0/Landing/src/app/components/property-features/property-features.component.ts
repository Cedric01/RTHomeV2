import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Property } from '../../models/property';

@Component({
    selector: 'app-property-features',
    imports: [CommonModule],
    templateUrl: './property-features.component.html'
})
export class PropertyFeaturesComponent implements OnChanges {
  @Input() property: Property | null = null;

  ngOnChanges(_changes: SimpleChanges): void {
    if (!this.property) return;
    const p = this.property;
    const details = this.accordionSections[0].items;
    const set = (label: string, value: string) => {
      const item = details.find(d => d.label === label);
      if (item) item.value = value;
    };
    set('Bedrooms', p.bedrooms?.toString() ?? '—');
    set('Bathrooms', p.bathrooms?.toString() ?? '—');
    set('Property Type', p.isForRent ? 'Rental' : 'For Sale');
    set('Status', p.status ?? '—');
  }

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
