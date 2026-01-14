import AOS from 'aos';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject, Input, PLATFORM_ID } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { Navbar6Component } from "../../../../layout/navbar-6/navbar-6.component";
import { RouterLink } from '@angular/router';
import { AdvanceFilterModalComponent } from "../../../../components/advance-filter-modal/advance-filter-modal.component";
interface MarkerProperties {
  position: {
    lat: number;
    lng: number;
  };
}

@Component({
    selector: 'app-listing-16',
    imports: [NgSelectModule, CommonModule, GoogleMapsModule, Navbar6Component, RouterLink, AdvanceFilterModalComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './listing-16.component.html'
})
export class Listing16Component {
  longitude = -77.028333;
  latitude = -12.043333;
  zoom: number = 9;

  @Input() pitch: number = 10;
  @Input() scrollwheel: boolean = false;
  center: any;

  mapOptions: google.maps.MapOptions = {
    center: { lat: 48.8588548, lng: 2.347035 },
    zoom: 13,
  };

  markers: MarkerProperties[] = [
    { position: { lat: 48.8584, lng: 2.2945 } },
    { position: { lat: 48.8606, lng: 2.3376 } },
    { position: { lat: 48.853, lng: 2.3499 } },
  ];
  options = [
    { value: '1', label: 'Buy Apartments' }, { value: '2', label: 'Rent Condos' }, { value: '3', label: 'Sell Houses' },
    { value: '4', label: 'Rent Industrial' }, { value: '6', label: 'Sell Villas' }
  ];
  short = [
    { value: '1', label: 'Newest' }, { value: '2', label: 'Best Seller' }, { value: '3', label: 'Best Match' },
    { value: '4', label: 'Price Low' }, { value: '6', label: 'Price High' }
  ];
  locations = [
    { value: '1', label: 'Dhanmondi, Dhaka' }, { value: '2', label: 'Acapulco, Mexico' },
    { value: '3', label: 'Berlin, Germany' }, { value: '4', label: 'Cannes, France' },
    { value: '5', label: 'Delhi, India' }, { value: '6', label: 'Giza, Egypt' }, { value: '7', label: 'Havana, Cuba' }
  ];

  priceRanges = [
    { value: '1', label: '$10,000 - $200,000' }, { value: '2', label: '$200,000 - $300,000' },
    { value: '3', label: '$300,000 - $400,000' }
  ];
  bath = [
    { value: '1', label: 'Any' }, { value: '2', label: '3+' }, { value: '3', label: '1+' }
  ];
  bed = [
    { value: '1', label: 'Any' }, { value: '2', label: '1+' }, { value: '3', label: '4+' }
  ];
  propertyTypes = ['All', 'Apartments', 'Villa', 'Mortgage', 'Loft', 'Home'];
  selectedType = 'All';
  listings = [
    { id: 'carousel1', tag: 'FOR RENT', images: ['assets/images/listing/img_18.jpg', 'assets/images/listing/img_17.jpg', 'assets/images/listing/img_19.jpg'], title: 'Blueberry villa', address: 'Mirpur 10, Stadium dhaka 1208', features: [{ icon: 'icon_04.svg', label: '1370 sqft' }, { icon: 'icon_05.svg', label: '03 bed' }, { icon: 'icon_06.svg', label: '02 bath' }], price: '$3,280/<sub>m</sub>', rent: true },
    { id: 'carousel2', tag: 'FOR SELL', images: ['assets/images/listing/img_18.jpg', 'assets/images/listing/img_19.jpg', 'assets/images/listing/img_17.jpg'], title: 'White House villa', address: 'Muza link road, ca, usa', features: [{ icon: 'icon_04.svg', label: '1270 sqft' }, { icon: 'icon_05.svg', label: '02 bed' }, { icon: 'icon_06.svg', label: '02 bath' }], price: '$28,100.00', rent: false },
    { id: 'carousel3', tag: 'FOR SELL', images: ['assets/images/listing/img_19.jpg', 'assets/images/listing/img_18.jpg', 'assets/images/listing/img_17.jpg'], title: 'Luxury villa in Dal lake.', address: 'Mirpur 10, Stadium', features: [{ icon: 'icon_04.svg', label: '1270 sqft' }, { icon: 'icon_05.svg', label: '02 bed' }, { icon: 'icon_06.svg', label: '02 bath' }], price: '$42,500.00', rent: false },
    { id: 'carousel4', tag: 'FOR RENT', images: ['assets/images/listing/img_32.jpg', 'assets/images/listing/img_18.jpg', 'assets/images/listing/img_17.jpg'], title: 'Blueberry villa', address: 'Mirpur 10, Stadium dhaka 1208', features: [{ icon: 'icon_04.svg', label: '1370 sqft' }, { icon: 'icon_05.svg', label: '03 bed' }, { icon: 'icon_06.svg', label: '02 bath' }], price: '$3,280/<sub>m</sub>', rent: true },
  ];
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) AOS.init({ duration: 800, easing: 'ease', once: true, mirror: false });
  }
}
