import AOS from 'aos';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject, Input, PLATFORM_ID } from '@angular/core';
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule, isPlatformBrowser } from '@angular/common'; import { NgSelectModule } from '@ng-select/ng-select';
import { Navbar7Component } from "../../../../layout/navbar-7/navbar-7.component";
import { RouterLink } from '@angular/router';
import { AdvanceFilterModalComponent } from "../../../../components/advance-filter-modal/advance-filter-modal.component";
declare const Fancybox: any;
interface MarkerProperties {
  position: {
    lat: number;
    lng: number;
  };
}

@Component({
    selector: 'app-listing-14',
    imports: [Footer5Component, NgSelectModule, GoogleMapsModule, Navbar7Component, CommonModule, RouterLink, AdvanceFilterModalComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './listing-14.component.html'
})
export class Listing14Component {
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
    { position: { lat: 48.8584, lng: 2.2945 } }, // Eiffel Tower
    { position: { lat: 48.8606, lng: 2.3376 } }, // Louvre Museum
    { position: { lat: 48.853, lng: 2.3499 } }, // Cathédrale Notre-Dame de Paris
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

  properties = [
    {
      tag: 'FOR RENT',
      image: 'assets/images/listing/img_39.jpg',
      routerLink: '/listing_details_06',
      sliderImages: [
        { src: 'assets/images/listing/img_large_01.jpg', caption: 'Blueberry villa' },
        { src: 'assets/images/listing/img_large_02.jpg', caption: 'Blueberry villa' },
        { src: 'assets/images/listing/img_large_03.jpg', caption: 'Blueberry villa' }
      ],
      title: 'Blueberry villa.',
      address: 'Mirpur 10, Stadium dhaka 1208',
      price: '$34,900',
      delay: 0
    },
    {
      tag: 'FOR SELL',
      image: 'assets/images/listing/img_40.jpg',
      routerLink: '/listing_details_06',
      sliderImages: [
        { src: 'assets/images/listing/img_large_04.jpg', caption: 'White House villa' },
        { src: 'assets/images/listing/img_large_05.jpg', caption: 'White House villa' },
        { src: 'assets/images/listing/img_large_06.jpg', caption: 'White House villa' }
      ],
      title: 'White House villa',
      address: 'California link road, ca, usa',
      price: '$28,100',
      delay: 100
    },
    {
      tag: 'FOR SELL',
      image: 'assets/images/listing/img_41.jpg',
      routerLink: '/listing_details_06',
      sliderImages: [
        { src: 'assets/images/listing/img_large_01.jpg', caption: 'Orkit Villa' },
        { src: 'assets/images/listing/img_large_05.jpg', caption: 'Orkit Villa' },
        { src: 'assets/images/listing/img_large_03.jpg', caption: 'Orkit Villa' },
        { src: 'assets/images/listing/img_large_02.jpg', caption: 'Orkit Villa' }
      ],
      title: 'Orkit Villa',
      address: 'Mirpur 10, Stadium',
      price: '$42,500',
      delay: 0
    },
    {
      tag: 'FOR SELL',
      image: 'assets/images/listing/img_42.jpg',
      routerLink: '/listing_details_06',
      sliderImages: [
        { src: 'assets/images/listing/img_large_04.jpg', caption: 'South Sun House' },
        { src: 'assets/images/listing/img_large_06.jpg', caption: 'South Sun House' },
        { src: 'assets/images/listing/img_large_03.jpg', caption: 'South Sun House' },
        { src: 'assets/images/listing/img_large_02.jpg', caption: 'South Sun House' }
      ],
      title: 'South Sun House',
      address: 'Mirpur 10, Stadium',
      price: '$55,500',
      delay: 100
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
