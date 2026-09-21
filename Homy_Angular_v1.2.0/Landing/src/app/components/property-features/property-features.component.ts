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

  description = '';

  ngOnChanges(_changes: SimpleChanges): void {
    if (!this.property) return;
    const p = this.property;

    this.description = p.description?.trim() || '';

    const set = (sectionIndex: number, label: string, value: string) => {
      const item = this.accordionSections[sectionIndex].items.find(d => d.label === label);
      if (item) item.value = value;
    };

    // Property Details
    set(0, 'Bedrooms',       p.bedrooms?.toString()    ?? '—');
    set(0, 'Bathrooms',      p.bathrooms?.toString()   ?? '—');
    set(0, 'Area (sqft)',    p.squareFeet?.toString()  ?? '—');
    set(0, 'Furnishing',     p.furnishing              ?? '—');
    set(0, 'Year Built',     p.yearBuilt?.toString()   ?? '—');
    set(0, 'Floor',          p.floor                   ?? '—');
    set(0, 'Garage',         p.garage?.toString()      ?? '—');
    set(0, 'Ceiling Height', p.ceilingHeight           ?? '—');
    set(0, 'Renovation',     p.renovation              ?? '—');
    set(0, 'Property Type',  p.isForRent ? 'Rental' : 'For Sale');
    set(0, 'Status',         p.status                  ?? '—');

    // Utility Details
    set(1, 'Heating',        p.heating     ?? '—');
    set(1, 'Intercom',       this.yesNo(p.hasIntercom));
    set(1, 'Air Condition',  this.yesNo(p.hasAirCondition));
    set(1, 'Window Type',    p.windowType  ?? '—');
    set(1, 'Fireplace',      this.yesNo(p.hasFireplace));
    set(1, 'Cable TV',       this.yesNo(p.hasCableTv));
    set(1, 'Elevator',       this.yesNo(p.hasElevator));
    set(1, 'WiFi',           this.yesNo(p.hasWifi));
    set(1, 'Ventilation',    this.yesNo(p.hasVentilation));

    // Outdoor Features
    set(2, 'Parking',        p.parkingSpots != null ? p.parkingSpots + ' spot(s)' : '—');
    set(2, 'Garden',         p.gardenSize          ?? '—');
    set(2, 'Disabled Access',p.disabledAccess      ?? '—');
    set(2, 'Swimming Pool',  this.yesNo(p.hasSwimmingPool));
    set(2, 'Fence',          this.yesNo(p.hasFence));
    set(2, 'Security',       p.security            ?? '—');
    set(2, 'Pet Friendly',   this.yesNo(p.isPetFriendly));
  }

  private yesNo(val: boolean | undefined): string {
    if (val == null) return '—';
    return val ? 'Yes' : 'No';
  }

  accordionSections = [
    {
      id: 'collapseOneA',
      title: 'Property Details',
      isExpanded: true,
      items: [
        { label: 'Bedrooms',      value: '—' },
        { label: 'Bathrooms',     value: '—' },
        { label: 'Area (sqft)',   value: '—' },
        { label: 'Furnishing',    value: '—' },
        { label: 'Year Built',    value: '—' },
        { label: 'Floor',         value: '—' },
        { label: 'Garage',        value: '—' },
        { label: 'Ceiling Height',value: '—' },
        { label: 'Renovation',    value: '—' },
        { label: 'Property Type', value: '—' },
        { label: 'Status',        value: '—' }
      ]
    },
    {
      id: 'collapseTwoA',
      title: 'Utility Details',
      isExpanded: false,
      items: [
        { label: 'Heating',       value: '—' },
        { label: 'Intercom',      value: '—' },
        { label: 'Air Condition', value: '—' },
        { label: 'Window Type',   value: '—' },
        { label: 'Fireplace',     value: '—' },
        { label: 'Cable TV',      value: '—' },
        { label: 'Elevator',      value: '—' },
        { label: 'WiFi',          value: '—' },
        { label: 'Ventilation',   value: '—' }
      ]
    },
    {
      id: 'collapseThreeA',
      title: 'Outdoor Features',
      isExpanded: false,
      items: [
        { label: 'Parking',        value: '—' },
        { label: 'Garden',         value: '—' },
        { label: 'Disabled Access',value: '—' },
        { label: 'Swimming Pool',  value: '—' },
        { label: 'Fence',          value: '—' },
        { label: 'Security',       value: '—' },
        { label: 'Pet Friendly',   value: '—' }
      ]
    }
  ];
}
