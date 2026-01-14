import AOS from 'aos';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Navbar7Component } from "../../../../layout/navbar-7/navbar-7.component";
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterLink } from '@angular/router';
import { AdvanceFilterModalComponent } from "../../../../components/advance-filter-modal/advance-filter-modal.component";
declare const Fancybox: any;

@Component({
    selector: 'app-listing-04',
    imports: [Navbar7Component, FancyBannerTwoComponent, Footer5Component, NgSelectModule, CommonModule, RouterLink, AdvanceFilterModalComponent],
    templateUrl: './listing-04.component.html'
})
export class Listing04Component {
  options = [
    { value: '1', label: 'Buy Apartments' }, { value: '2', label: 'Rent Condos' }, { value: '3', label: 'Sell Houses' },
    { value: '4', label: 'Rent Industrial' }, { value: '6', label: 'Sell Villas' }
  ];
  locations = [
    { value: '1', label: 'Dhanmondi, Dhaka' }, { value: '2', label: 'Acapulco, Mexico' }, { value: '3', label: 'Berlin, Germany' },
    { value: '4', label: 'Cannes, France' }, { value: '5', label: 'Delhi, India' }, { value: '6', label: 'Giza, Egypt' },
    { value: '7', label: 'Havana, Cuba' }
  ];
  priceRanges = [
    { value: '1', label: '$10,000 - $200,000' }, { value: '2', label: '$200,000 - $300,000' }, { value: '3', label: '$300,000 - $400,000' }
  ];
  short = [
    { value: '1', label: 'Newest' }, { value: '2', label: 'Best Seller' }, { value: '3', label: 'Best Match' },
    { value: '4', label: 'Price Low' }, { value: '6', label: 'Price High' }
  ];
  listings = [
    {
      id: 1,
      type: 'FOR SELL',
      title: 'Marbel Apartments',
      address: 'Mirpur 10, National Stadium, 1210, Dhaka, BD',
      sqft: 2137,
      bed: 3,
      bath: 2,
      kitchen: 1,
      parkingLot: 1,
      garden: 2,
      price: '$24,000',
      imageUrl: 'assets/images/listing/img_28.jpg',
      imgLinks: [
        { src: 'assets/images/listing/img_large_04.jpg', caption: 'Marbel Apartments' },
        { src: 'assets/images/listing/img_large_06.jpg', caption: 'Marbel Apartments' },
        { src: 'assets/images/listing/img_large_03.jpg', caption: 'Marbel Apartments' }
      ]
    },
    {
      id: 2,
      type: 'FOR RENT',
      title: 'Duplex orkit villa.',
      address: 'Mirpur 10, National Stadium, 1210, Dhaka, BD',
      sqft: 2137,
      bed: 3,
      bath: 2,
      kitchen: 1,
      parkingLot: 1,
      garden: 2,
      price: '$2,370/m',
      imageUrl: 'assets/images/listing/img_29.jpg',
      imgLinks: [
        { src: 'assets/images/listing/img_large_01.jpg', caption: 'Duplex orkit villa.' },
        { src: 'assets/images/listing/img_large_02.jpg', caption: 'Duplex orkit villa.' },
        { src: 'assets/images/listing/img_large_03.jpg', caption: 'Duplex orkit villa.' }
      ]
    },
    {
      id: 3,
      type: 'FOR SELL',
      title: 'Luxury villa Dal lake',
      address: 'Mirpur 10, National Stadium, 1210, Dhaka, BD',
      sqft: 2137,
      bed: 3,
      bath: 2,
      kitchen: 1,
      parkingLot: 1,
      garden: 2,
      price: '$43,000',
      imageUrl: 'assets/images/listing/img_23.jpg',
      imgLinks: [
        { src: 'assets/images/listing/img_large_06.jpg', caption: 'Luxury villa Dal lake' },
        { src: 'assets/images/listing/img_large_05.jpg', caption: 'Luxury villa Dal lake' },
        { src: 'assets/images/listing/img_large_01.jpg', caption: 'Luxury villa Dal lake' }
      ]
    },
    {
      id: 4,
      type: 'FOR RENT',
      title: 'Galaxy Touch Flat',
      address: 'Mirpur 10, National Stadium, 1210, Dhaka, BD',
      sqft: 2137,
      bed: 3,
      bath: 2,
      kitchen: 1,
      parkingLot: 1,
      garden: 2,
      price: '$1,820/m',
      imageUrl: 'assets/images/listing/img_24.jpg',
      imgLinks: [
        { src: 'assets/images/listing/img_large_01.jpg', caption: 'Galaxy Touch Flat' },
        { src: 'assets/images/listing/img_large_03.jpg', caption: 'Galaxy Touch Flat' },
        { src: 'assets/images/listing/img_large_06.jpg', caption: 'Galaxy Touch Flat' }
      ]
    },
    {
      id: 5,
      type: 'FOR SELL',
      title: 'Morpho House',
      address: 'Mirpur 10, National Stadium, 1210, Dhaka, BD',
      sqft: 2137,
      bed: 3,
      bath: 2,
      kitchen: 1,
      parkingLot: 1,
      garden: 2,
      price: '$27,100',
      imageUrl: 'assets/images/listing/img_21.jpg',
      imgLinks: [
        { src: 'assets/images/listing/img_large_01.jpg', caption: 'Morpho House' },
        { src: 'assets/images/listing/img_large_05.jpg', caption: 'Morpho House' },
        { src: 'assets/images/listing/img_large_04.jpg', caption: 'Morpho House' }
      ]
    },
    {
      id: 6,
      type: 'FOR RENT',
      title: 'Oepn Villa',
      address: 'Mirpur 10, National Stadium, 1210, Dhaka, BD',
      sqft: 2137,
      bed: 3,
      bath: 2,
      kitchen: 1,
      parkingLot: 1,
      garden: 2,
      price: '$3,120/m',
      imageUrl: 'assets/images/listing/img_31.jpg',
      imgLinks: [
        { src: 'assets/images/listing/img_large_01.jpg', caption: 'Oepn Villa' },
        { src: 'assets/images/listing/img_large_05.jpg', caption: 'Oepn Villa' },
        { src: 'assets/images/listing/img_large_04.jpg', caption: 'Oepn Villa' }
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
