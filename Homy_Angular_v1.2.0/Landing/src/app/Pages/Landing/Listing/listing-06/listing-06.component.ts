import AOS from 'aos';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select'; import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { Navbar6Component } from "../../../../layout/navbar-6/navbar-6.component";
import { RouterLink } from '@angular/router';
declare const Fancybox: any;

@Component({
    selector: 'app-listing-06',
    imports: [Navbar6Component, FancyBannerTwoComponent, Footer5Component, CommonModule, NgSelectModule, NgxSliderModule, Navbar6Component, RouterLink],
    templateUrl: './listing-06.component.html'
})
export class Listing06Component {
  minValue = 2500; maxValue = 35000;
  amenities = [
    { id: '01', name: 'A/C & Heating' },
    { id: '02', name: 'Garages' },
    { id: '03', name: 'Garden' },
    { id: '04', name: 'Disabled Access' },
    { id: '05', name: 'Swimming Pool' },
    { id: '06', name: 'Parking' },
    { id: '07', name: 'Wifi' },
    { id: '08', name: 'Pet Friendly' },
    { id: '09', name: 'Ceiling Height' },
    { id: '10', name: 'Fireplace' },
    { id: '11', name: 'Play Ground' },
    { id: '12', name: 'Elevator' },
  ];
  options = [
    { value: '1', label: 'Buy Apartments' }, { value: '2', label: 'Rent Condos' },
    { value: '3', label: 'Sell Houses' }, { value: '4', label: 'Rent Industrial' },
    { value: '6', label: 'Sell Villas' }
  ];

  locations = [
    { value: '1', label: 'Dhanmondi, Dhaka' }, { value: '2', label: 'Acapulco, Mexico' },
    { value: '3', label: 'Berlin, Germany' }, { value: '4', label: 'Cannes, France' },
    { value: '5', label: 'Delhi, India' }, { value: '6', label: 'Giza, Egypt' },
    { value: '7', label: 'Havana, Cuba' }
  ];

  priceRanges = [
    { value: '1', label: '3+' }, { value: '2', label: '4+' },
    { value: '3', label: '2+' }, { value: '2', label: '1+' },
  ];
  bathRanges = [
    { value: '1', label: '2+' }, { value: '2', label: '4+' },
    { value: '3', label: '3+' }, { value: '2', label: '1+' },
  ];
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  short = [
    { value: '1', label: 'Newest' }, { value: '2', label: 'Best Seller' }, { value: '3', label: 'Best Match' },
    { value: '4', label: 'Price Low' }, { value: '6', label: 'Price High' }
  ];
  properties = [
    {
      title: 'Marbel Apartments',
      address: 'Mirpur 10, National Stadium, 1210, Dhaka, BD',
      type: 'FOR SELL',
      price: '$24,000',
      images: [
        'assets/images/listing/img_large_04.jpg',
        'assets/images/listing/img_large_06.jpg',
        'assets/images/listing/img_large_03.jpg',
      ],
      size: '2137',
      beds: '03',
      baths: '02',
      kitchen: '01',
      route: '/listing_details_06'
    },
    {
      title: 'Duplex Orkit Villa',
      address: 'Mirpur 10, National Stadium, 1210, Dhaka, BD',
      type: 'FOR RENT',
      price: '$2,370/m',
      images: [
        'assets/images/listing/img_large_01.jpg',
        'assets/images/listing/img_large_02.jpg',
        'assets/images/listing/img_large_03.jpg',
      ],
      size: '2137',
      beds: '03',
      baths: '02',
      kitchen: '01',
      route: '/listing_details_06'
    },
    {
      title: 'Oepn Villa',
      address: 'Mirpur 10, National Stadium, 1210, Dhaka, BD',
      type: 'FOR SELL',
      price: '$43,000',
      images: [
        'assets/images/listing/img_large_06.jpg',
        'assets/images/listing/img_large_05.jpg',
        'assets/images/listing/img_large_01.jpg',
      ],
      size: '2137',
      beds: '03',
      baths: '02',
      kitchen: '01',
      route: '/listing_details_06'
    },
    {
      title: 'Shite House',
      address: 'Mirpur 10, National Stadium, 1210, Dhaka, BD',
      type: 'FOR RENT',
      price: '$1,820/m',
      images: [
        'assets/images/listing/img_large_01.jpg',
        'assets/images/listing/img_large_03.jpg',
        'assets/images/listing/img_large_06.jpg',
      ],
      size: '2137',
      beds: '03',
      baths: '02',
      kitchen: '01',
      route: '/listing_details_06'
    },
    {
      title: 'Modern Flat',
      address: 'Mirpur 10, National Stadium, 1210, Dhaka, BD',
      type: 'FOR SELL',
      price: '$27,100',
      images: [
        'assets/images/listing/img_large_01.jpg',
        'assets/images/listing/img_large_05.jpg',
        'assets/images/listing/img_large_04.jpg',
      ],
      size: '2137',
      beds: '03',
      baths: '02',
      kitchen: '01',
      route: '/listing_details_06'
    }
  ];
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) AOS.init({ duration: 800, easing: 'ease', once: true, mirror: false });
  }

  sliderOptions: Options = { floor: 0, ceil: 50000, step: 100 };
  onSliderChange() { console.log('Min Value:', this.minValue); console.log('Max Value:', this.maxValue); }
  ngAfterViewInit(): void {
    Fancybox.bind('[data-fancybox]');
  }
}
