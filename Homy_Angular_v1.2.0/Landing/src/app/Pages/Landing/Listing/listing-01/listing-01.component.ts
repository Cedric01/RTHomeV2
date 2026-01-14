import AOS from 'aos';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Navbar7Component } from '../../../../layout/navbar-7/navbar-7.component';
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-listing-01',
    imports: [Navbar7Component, FancyBannerTwoComponent, Footer5Component, FormsModule, NgxSliderModule, CommonModule, NgSelectModule, RouterLink],
    templateUrl: './listing-01.component.html'
})
export class Listing01Component {
  minValue = 2500; maxValue = 35000;
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
  priceRanges = [{ value: '1', label: '3+' }, { value: '2', label: '4+' }, { value: '3', label: '2+' }, { value: '2', label: '1+' }];
  bathRanges = [{ value: '1', label: '2+' }, { value: '2', label: '4+' }, { value: '3', label: '3+' }, { value: '2', label: '1+' }];
  amenities = [
    { id: '01', name: 'A/C & Heating' }, { id: '02', name: 'Garages' }, { id: '03', name: 'Garden' }, { id: '04', name: 'Disabled Access' },
    { id: '05', name: 'Swimming Pool' }, { id: '06', name: 'Parking' }, { id: '07', name: 'Wifi' }, { id: '08', name: 'Pet Friendly' },
    { id: '09', name: 'Ceiling Height' }, { id: '10', name: 'Fireplace' }, { id: '11', name: 'Play Ground' }, { id: '12', name: 'Elevator' }
  ];
  listings = [
    { id: 'carousel1', tag: 'FOR RENT', images: ['assets/images/listing/img_18.jpg', 'assets/images/listing/img_17.jpg', 'assets/images/listing/img_19.jpg'], title: 'Blueberry villa', address: 'Mirpur 10, Stadium dhaka 1208', features: [{ icon: 'icon_04.svg', label: '1370 sqft' }, { icon: 'icon_05.svg', label: '03 bed' }, { icon: 'icon_06.svg', label: '02 bath' }], price: '$3,280/<sub>m</sub>', rent: true },
    { id: 'carousel2', tag: 'FOR SELL', images: ['assets/images/listing/img_18.jpg', 'assets/images/listing/img_19.jpg', 'assets/images/listing/img_17.jpg'], title: 'White House villa', address: 'Muza link road, ca, usa', features: [{ icon: 'icon_04.svg', label: '1270 sqft' }, { icon: 'icon_05.svg', label: '02 bed' }, { icon: 'icon_06.svg', label: '02 bath' }], price: '$28,100.00', rent: false },
    { id: 'carousel3', tag: 'FOR SELL', images: ['assets/images/listing/img_19.jpg', 'assets/images/listing/img_18.jpg', 'assets/images/listing/img_17.jpg'], title: 'Luxury villa in Dal lake.', address: 'Mirpur 10, Stadium', features: [{ icon: 'icon_04.svg', label: '1270 sqft' }, { icon: 'icon_05.svg', label: '02 bed' }, { icon: 'icon_06.svg', label: '02 bath' }], price: '$42,500.00', rent: false },
    { id: 'carousel4', tag: 'FOR RENT', images: ['assets/images/listing/img_32.jpg', 'assets/images/listing/img_18.jpg', 'assets/images/listing/img_17.jpg'], title: 'Blueberry villa', address: 'Mirpur 10, Stadium dhaka 1208', features: [{ icon: 'icon_04.svg', label: '1370 sqft' }, { icon: 'icon_05.svg', label: '03 bed' }, { icon: 'icon_06.svg', label: '02 bath' }], price: '$3,280/<sub>m</sub>', rent: true },
    { id: 'carousel5', tag: 'FOR RENT', images: ['assets/images/listing/img_33.jpg', 'assets/images/listing/img_18.jpg', 'assets/images/listing/img_17.jpg'], title: 'Blueberry villa', address: 'Mirpur 10, Stadium dhaka 1208', features: [{ icon: 'icon_04.svg', label: '1370 sqft' }, { icon: 'icon_05.svg', label: '03 bed' }, { icon: 'icon_06.svg', label: '02 bath' }], price: '$3,280/<sub>m</sub>', rent: true },
    { id: 'carousel6', tag: 'FOR SELL', images: ['assets/images/listing/img_34.jpg', 'assets/images/listing/img_18.jpg', 'assets/images/listing/img_17.jpg'], title: 'Blueberry villa', address: 'Mirpur 10, Stadium dhaka 1208', features: [{ icon: 'icon_04.svg', label: '1370 sqft' }, { icon: 'icon_05.svg', label: '03 bed' }, { icon: 'icon_06.svg', label: '02 bath' }], price: '$3,280/<sub>m</sub>', rent: true }
  ];
  sliderOptions: Options = { floor: 0, ceil: 50000, step: 100 };
  onSliderChange() { console.log('Min Value:', this.minValue); console.log('Max Value:', this.maxValue); }
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) AOS.init({ duration: 800, easing: 'ease', once: true, mirror: false });
  }
  sliderValue = 50;
}
