import { Component } from '@angular/core';
import { Navbar7Component } from "../../../../layout/navbar-7/navbar-7.component";
declare const Fancybox: any;
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { SwiperService } from '../../../../service/swiper.service';
import { CommonModule } from '@angular/common';
import { PropertyFeaturesComponent } from "../../../../components/property-features/property-features.component";
import { AmenitiesComponent } from "../../../../components/amenities/amenities.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-listing-details-02',
    imports: [Navbar7Component, FancyBannerTwoComponent, Footer5Component, CommonModule, PropertyFeaturesComponent, AmenitiesComponent, RouterLink],
    templateUrl: './listing-details-02.component.html'
})
export class ListingDetails02Component {
  constructor(private swiperService: SwiperService) { }
  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.swiper-container', 1, 20, 3000, 3, 6, 3);
    Fancybox.bind('[data-fancybox]');
  }
  propertyDetails = [
    { icon: 'assets/images/icon/icon_47.svg', label: 'Sqft', value: '3,720' },
    { icon: 'assets/images/icon/icon_48.svg', label: 'Bed', value: '03' },
    { icon: 'assets/images/icon/icon_49.svg', label: 'Bath', value: '2' },
    { icon: 'assets/images/icon/icon_50.svg', label: 'Kitchen', value: '01' },
    { icon: 'assets/images/icon/icon_51.svg', label: 'Type', value: 'Apartment' }
  ];
  carouselItems = [
    {
      image: 'assets/images/listing/img_13.jpg',
      largeImages: [
        'assets/images/listing/img_large_01.jpg',
        'assets/images/listing/img_large_02.jpg',
        'assets/images/listing/img_large_03.jpg',
      ],
      price: '$1,23,710',
      address: '120 Elgin St. Celina, Delaware',
      tag: 'FOR RENT',
    },
    {
      image: 'assets/images/listing/img_14.jpg',
      largeImages: [
        'assets/images/listing/img_large_04.jpg',
        'assets/images/listing/img_large_05.jpg',
        'assets/images/listing/img_large_06.jpg',
      ],
      price: '$2,11,536',
      address: '120 Elgin St. Celina, Delaware',
      tag: 'FOR RENT',
    },
    {
      image: 'assets/images/listing/img_15.jpg',
      largeImages: [
        'assets/images/listing/img_large_04.jpg',
        'assets/images/listing/img_large_05.jpg',
        'assets/images/listing/img_large_06.jpg',
      ],
      price: '$3,05,958',
      address: '120 Elgin St. Celina, Delaware',
      tag: 'FOR RENT',
    },
  ];
}
