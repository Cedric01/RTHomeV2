import AOS from 'aos';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject, Input, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common'; import { NgSelectModule } from '@ng-select/ng-select';
import { RouterLink } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
import { Navbar6Component } from "../../../../layout/navbar-6/navbar-6.component";
import { AdvanceFilterModalComponent } from "../../../../components/advance-filter-modal/advance-filter-modal.component";
declare const Fancybox: any;
interface MarkerProperties {
  position: {
    lat: number;
    lng: number;
  };
}

@Component({
    selector: 'app-listing-17',
    imports: [NgSelectModule, CommonModule, RouterLink, GoogleMapsModule, Navbar6Component, AdvanceFilterModalComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './listing-17.component.html'
})
export class Listing17Component {
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
  properties = [
    {
      type: 'FOR SELL',
      background: 'assets/images/listing/img_28.jpg',
      images: [
        { src: 'assets/images/listing/img_large_04.jpg', caption: 'Marbel Apartments' },
        { src: 'assets/images/listing/img_large_06.jpg', caption: 'Marbel Apartments' },
        { src: 'assets/images/listing/img_large_03.jpg', caption: 'Marbel Apartments' }
      ],
      title: 'Marbel Apartments',
      address: '3891 Ranchview, California 62639',
      features: [
        { label: '2137', value: 'sqft' },
        { label: '03', value: 'bed' },
        { label: '02', value: 'bath' },
        { label: '01', value: 'Kitchen' }
      ],
      price: '$24,000',
      link: '/listing_details_02'
    },
    {
      type: 'FOR RENT',
      background: 'assets/images/listing/img_29.jpg',
      images: [
        { src: 'assets/images/listing/img_large_01.jpg', caption: 'Duplex orkit villa.' },
        { src: 'assets/images/listing/img_large_02.jpg', caption: 'Duplex orkit villa.' },
        { src: 'assets/images/listing/img_large_03.jpg', caption: 'Duplex orkit villa.' }
      ],
      title: 'Duplex orkit villa.',
      address: '3891 Ranchview, California 62639',
      features: [
        { label: '2137', value: 'sqft' },
        { label: '03', value: 'bed' },
        { label: '02', value: 'bath' },
        { label: '01', value: 'Kitchen' }
      ],
      price: '$2,370/<sub>m</sub>',
      link: '/listing_details_02'
    },
    {
      type: 'FOR SELL',
      background: 'assets/images/listing/img_37.jpg',
      images: [
        { src: 'assets/images/listing/img_large_06.jpg', caption: 'Oepn Villa' },
        { src: 'assets/images/listing/img_large_05.jpg', caption: 'Oepn Villa' },
        { src: 'assets/images/listing/img_large_01.jpg', caption: 'Oepn Villa' }
      ],
      title: 'Oepn Villa',
      address: '3891 Ranchview, California 62639',
      features: [
        { label: '2137', value: 'sqft' },
        { label: '03', value: 'bed' },
        { label: '02', value: 'bath' },
        { label: '01', value: 'Kitchen' }
      ],
      price: '$43,000',
      link: '/listing_details_02'
    }
  ];
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) AOS.init({ duration: 800, easing: 'ease', once: true, mirror: false });
  }
  ngAfterViewInit(): void {
    Fancybox.bind('[data-fancybox]');
  }
}
