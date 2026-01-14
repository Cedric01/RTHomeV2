import AOS from 'aos';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterLink } from '@angular/router';
import { Navbar6Component } from "../../../../layout/navbar-6/navbar-6.component";
import { AdvanceFilterModalComponent } from "../../../../components/advance-filter-modal/advance-filter-modal.component";
declare const Fancybox: any;

@Component({
    selector: 'app-listing-10',
    imports: [FancyBannerTwoComponent, Footer5Component, NgSelectModule, RouterLink, CommonModule, Navbar6Component, AdvanceFilterModalComponent],
    templateUrl: './listing-10.component.html'
})
export class Listing10Component {
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
  selllocations = [
    { value: '1', label: 'Sell Apartments' }, { value: '2', label: 'Sell Condos' }, { value: '3', label: 'Sell Houses' },
    { value: '4', label: 'Sell Industrial' }, { value: '6', label: 'Sell Villas' }
  ];
  rentlocations = [
    { value: '1', label: 'Rent Apartments' }, { value: '2', label: 'Rent Condos' }, { value: '3', label: 'Rent Houses' },
    { value: '4', label: 'Rent Industrial' }, { value: '6', label: 'Rent Villas' }
  ];
  listings = [
    {
      imgUrl: 'assets/images/listing/img_28.jpg',
      title: 'Marbel Apartments',
      address: 'Mirpur 10, National Stadium, 1210, Dhaka, BD',
      price: '$24,000',
      type: 'FOR SELL',
      features: {
        sqft: 2137,
        beds: 3,
        baths: 2,
        kitchen: 1,
        parking: 1,
        garden: 2
      },
      images: [
        'assets/images/listing/img_large_04.jpg',
        'assets/images/listing/img_large_06.jpg',
        'assets/images/listing/img_large_03.jpg'
      ]
    },
    {
      imgUrl: 'assets/images/listing/img_29.jpg',
      title: 'Duplex orkit villa.',
      address: 'Mirpur 10, National Stadium, 1210, Dhaka, BD',
      price: '$2,370',
      type: 'FOR RENT',
      features: {
        sqft: 2137,
        beds: 3,
        baths: 2,
        kitchen: 1,
        parking: 1,
        garden: 2
      },
      images: [
        'assets/images/listing/img_large_01.jpg',
        'assets/images/listing/img_large_02.jpg',
        'assets/images/listing/img_large_03.jpg'
      ]
    },
    {
      imgUrl: 'assets/images/listing/img_37.jpg',
      title: 'Oepn Villa',
      address: 'Mirpur 10, National Stadium, 1210, Dhaka, BD',
      price: '$43,000',
      type: 'FOR SELL',
      features: {
        sqft: 2137,
        beds: 3,
        baths: 2,
        kitchen: 1,
        parking: 1,
        garden: 2
      },
      images: [
        'assets/images/listing/img_large_06.jpg',
        'assets/images/listing/img_large_05.jpg',
        'assets/images/listing/img_large_01.jpg'
      ]
    },
    {
      imgUrl: 'assets/images/listing/img_36.jpg',
      title: 'Shite House',
      address: 'Mirpur 10, National Stadium, 1210, Dhaka, BD',
      price: '$1,820/m',
      type: 'FOR RENT',
      features: {
        sqft: 2137,
        beds: 3,
        baths: 2,
        kitchen: 1,
        parking: 1,
        garden: 2
      },
      images: [
        'assets/images/listing/img_large_01.jpg',
        'assets/images/listing/img_large_03.jpg',
        'assets/images/listing/img_large_06.jpg'
      ]
    },
    {
      imgUrl: 'assets/images/listing/img_35.jpg',
      title: 'Modern Flat',
      address: 'Mirpur 10, National Stadium, 1210, Dhaka, BD',
      price: '$27,100',
      type: 'FOR SELL',
      features: {
        sqft: 2137,
        beds: 3,
        baths: 2,
        kitchen: 1,
        parking: 1,
        garden: 2
      },
      images: [
        'assets/images/listing/img_large_01.jpg',
        'assets/images/listing/img_large_05.jpg',
        'assets/images/listing/img_large_04.jpg'
      ]
    },
    {
      imgUrl: 'assets/images/listing/img_38.jpg',
      title: 'Duplex orkit villa',
      address: 'Mirpur 10, National Stadium, 1210, Dhaka, BD',
      price: '$24,000',
      type: 'FOR SELL',
      features: {
        sqft: 2137,
        beds: 3,
        baths: 2,
        kitchen: 1,
        parking: 1,
        garden: 2
      },
      images: [
        'assets/images/listing/img_large_01.jpg',
        'assets/images/listing/img_large_05.jpg',
        'assets/images/listing/img_large_04.jpg'
      ]
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
