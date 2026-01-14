import { NgSelectModule } from '@ng-select/ng-select';
import AOS from 'aos';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Navbar7Component } from "../../../../layout/navbar-7/navbar-7.component";
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
declare const Fancybox: any;
import { RouterLink } from '@angular/router';
import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';

@Component({
    selector: 'app-listing-02',
    imports: [Navbar7Component, FancyBannerTwoComponent, Footer5Component, CommonModule, NgSelectModule, RouterLink, NgxSliderModule],
    templateUrl: './listing-02.component.html'
})
export class Listing02Component {
  minValue = 2500; maxValue = 35000;
  listings = [
    { title: "Marbel Apartments", type: "sell", address: "Mirpur 10, National Stadium, 1210, Dhaka, BD", area: 2137, beds: 3, baths: 2, kitchen: 1, price: "$24,000", imageUrl: "assets/images/listing/img_28.jpg", images: [{ large: "assets/images/listing/img_large_04.jpg" }, { large: "assets/images/listing/img_large_06.jpg" }, { large: "assets/images/listing/img_large_03.jpg" }] },
    { title: "Duplex orkit villa.", type: "rent", address: "Mirpur 10, National Stadium, 1210, Dhaka, BD", area: 2137, beds: 3, baths: 2, kitchen: 1, price: "$2,370/m", imageUrl: "assets/images/listing/img_29.jpg", images: [{ large: "assets/images/listing/img_large_01.jpg" }, { large: "assets/images/listing/img_large_02.jpg" }, { large: "assets/images/listing/img_large_03.jpg" }] },
    { title: "Luxury villa Dal lake", type: "sell", address: "Mirpur 10, National Stadium, 1210, Dhaka, BD", area: 3200, beds: 4, baths: 3, kitchen: 1, price: "$43,000", imageUrl: "assets/images/listing/img_23.jpg", images: [{ large: "assets/images/listing/img_large_06.jpg" }, { large: "assets/images/listing/img_large_05.jpg" }, { large: "assets/images/listing/img_large_01.jpg" }] },
    { title: "Galaxy Touch Flat", type: "rent", address: "Mirpur 10, National Stadium, 1210, Dhaka, BD", area: 1800, beds: 2, baths: 2, kitchen: 1, price: "$1,820/m", imageUrl: "assets/images/listing/img_24.jpg", images: [{ large: "assets/images/listing/img_large_01.jpg" }, { large: "assets/images/listing/img_large_03.jpg" }, { large: "assets/images/listing/img_large_06.jpg" }] },
    { title: "Morpho House", type: "sell", address: "Mirpur 10, National Stadium, 1210, Dhaka, BD", area: 2800, beds: 4, baths: 3, kitchen: 1, price: "$27,100", imageUrl: "assets/images/listing/img_21.jpg", images: [{ large: "assets/images/listing/img_large_01.jpg" }, { large: "assets/images/listing/img_large_05.jpg" }, { large: "assets/images/listing/img_large_04.jpg" }] }
  ];

  amenities = [{ id: '01', name: 'A/C & Heating' }, { id: '02', name: 'Garages' }, { id: '03', name: 'Garden' }, { id: '04', name: 'Disabled Access' }, { id: '05', name: 'Swimming Pool' }, { id: '06', name: 'Parking' }, { id: '07', name: 'Wifi' }, { id: '08', name: 'Pet Friendly' }, { id: '09', name: 'Ceiling Height' }, { id: '10', name: 'Fireplace' }, { id: '11', name: 'Play Ground' }, { id: '12', name: 'Elevator' }];
  options = [{ value: '1', label: 'Buy Apartments' }, { value: '2', label: 'Rent Condos' }, { value: '3', label: 'Sell Houses' }, { value: '4', label: 'Rent Industrial' }, { value: '6', label: 'Sell Villas' }];
  locations = [{ value: '1', label: 'Dhanmondi, Dhaka' }, { value: '2', label: 'Acapulco, Mexico' }, { value: '3', label: 'Berlin, Germany' }, { value: '4', label: 'Cannes, France' }, { value: '5', label: 'Delhi, India' }, { value: '6', label: 'Giza, Egypt' }, { value: '7', label: 'Havana, Cuba' }];
  priceRanges = [{ value: '1', label: '3+' }, { value: '2', label: '4+' }, { value: '3', label: '2+' }, { value: '2', label: '1+' }];
  bathRanges = [{ value: '1', label: '2+' }, { value: '2', label: '4+' }, { value: '3', label: '3+' }, { value: '2', label: '1+' }];
  short = [{ value: '1', label: 'Newest' }, { value: '2', label: 'Best Seller' }, { value: '3', label: 'Best Match' }, { value: '4', label: 'Price Low' }, { value: '6', label: 'Price High' }];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  
  sliderOptions: Options = { floor: 0, ceil: 50000, step: 100 };
  
  onSliderChange() {
    console.log('Min Value:', this.minValue); console.log('Max Value:', this.maxValue);
  }
  
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) AOS.init({ duration: 800, easing: 'ease', once: true, mirror: false });
  }

  ngAfterViewInit(): void {
    Fancybox.bind('[data-fancybox]');
  }
}
