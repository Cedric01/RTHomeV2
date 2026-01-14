import AOS from 'aos';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject, Input, PLATFORM_ID } from '@angular/core';
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { CommonModule, isPlatformBrowser } from '@angular/common'; import { NgSelectModule } from '@ng-select/ng-select';
import { Navbar7Component } from "../../../../layout/navbar-7/navbar-7.component";
import { RouterLink } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
declare const Fancybox: any;
interface MarkerProperties {
  position: {
    lat: number;
    lng: number;
  };
}

@Component({
    selector: 'app-listing-15',
    imports: [Footer5Component, NgSelectModule, GoogleMapsModule, Navbar7Component, CommonModule, RouterLink],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './listing-15.component.html'
})
export class Listing15Component {
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
  locations = [
    { value: '1', label: 'Dhanmondi, Dhaka' }, { value: '2', label: 'Acapulco, Mexico' },
    { value: '3', label: 'Berlin, Germany' }, { value: '4', label: 'Cannes, France' },
    { value: '5', label: 'Delhi, India' }, { value: '6', label: 'Giza, Egypt' }, { value: '7', label: 'Havana, Cuba' }
  ];
  short = [
    { value: '1', label: 'Newest' }, { value: '2', label: 'Best Seller' }, { value: '3', label: 'Best Match' },
    { value: '4', label: 'Price Low' }, { value: '6', label: 'Price High' }
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
  propertyTypes = [
    'All',
    'Apartments',
    'Villa',
    'Mortgage',
    'Loft',
    'Home',
    'Flat',
    'Building',
    'Office',
    'Factory',
    'Industry'
  ];
  listings = [
    {
      id: 1,
      image: 'assets/images/listing/img_28.jpg',
      tag: 'FOR SELL',
      address: '3891 Ranchview, California 62639',
      features: [
        { icon: 'assets/images/icon/icon_04.svg', text: '1370 sqft' },
        { icon: 'assets/images/icon/icon_05.svg', text: '03 bed' },
        { icon: 'assets/images/icon/icon_06.svg', text: '02 bath' },
      ],
      price: '$32,800',
      route: '/listing_details_05',
      gallery: [
        { image: 'assets/images/listing/img_large_04.jpg', caption: 'Marbel Apartments' },
        { image: 'assets/images/listing/img_large_06.jpg', caption: 'Marbel Apartments' },
        { image: 'assets/images/listing/img_large_03.jpg', caption: 'Marbel Apartments' },
      ],
    },
    {
      id: 2,
      image: 'assets/images/listing/img_29.jpg',
      tag: 'FOR RENT',
      address: '3891 Ranchview, California 62639',
      features: [
        { icon: 'assets/images/icon/icon_04.svg', text: '1370 sqft' },
        { icon: 'assets/images/icon/icon_05.svg', text: '03 bed' },
        { icon: 'assets/images/icon/icon_06.svg', text: '02 bath' },
      ],
      price: '$2,370/<sub>m</sub>',
      route: '/listing_details_05',
      gallery: [
        { image: 'assets/images/listing/img_large_01.jpg', caption: 'Duplex orkit villa.' },
        { image: 'assets/images/listing/img_large_02.jpg', caption: 'Duplex orkit villa.' },
        { image: 'assets/images/listing/img_large_03.jpg', caption: 'Duplex orkit villa.' },
      ],
    },
    {
      id: 3,
      image: 'assets/images/listing/img_37.jpg',
      tag: 'FOR SELL',
      address: '3891 Ranchview, California 62639',
      features: [
        { icon: 'assets/images/icon/icon_04.svg', text: '1370 sqft' },
        { icon: 'assets/images/icon/icon_05.svg', text: '03 bed' },
        { icon: 'assets/images/icon/icon_06.svg', text: '02 bath' },
      ],
      price: '$24,000',
      route: '/listing_details_05',
      gallery: [
        { image: 'assets/images/listing/img_large_06.jpg', caption: 'Open Villa' },
        { image: 'assets/images/listing/img_large_05.jpg', caption: 'Open Villa' },
        { image: 'assets/images/listing/img_large_01.jpg', caption: 'Open Villa' },
      ],
    },
  ];
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) AOS.init({ duration: 800, easing: 'ease', once: true, mirror: false });
  }
  ngAfterViewInit(): void {
    Fancybox.bind('[data-fancybox]');
  }
}
