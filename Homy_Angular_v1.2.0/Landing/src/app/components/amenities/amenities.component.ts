import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SwiperService } from '../../service/swiper.service';
import { ModalService } from '../../service/modal.service';
declare const Fancybox: any;

@Component({
    selector: 'app-amenities',
    imports: [CommonModule, RouterLink],
    templateUrl: './amenities.component.html'
})
export class AmenitiesComponent {
  amenities: string[] = [
    'A/C & Heating',
    'Garages',
    'Swimming Pool',
    'Parking',
    'Garden',
    'Disabled Access',
    'Pet Friendly',
    'Ceiling Height',
    'Refrigerator',
    'Fireplace',
    'Elevator',
    'Wifi'
  ];
  images = [
    { src: 'assets/images/listing/floor_1.jpg', alt: 'Floor 1' },
    { src: 'assets/images/listing/floor_2.jpg', alt: 'Floor 2' },
    { src: 'assets/images/listing/floor_1.jpg', alt: 'Floor 1' },
  ];
  nearbyPlaces = [
    { name: 'School & College', distance: '0.9km' },
    { name: 'Grocery Center', distance: '0.2km' },
    { name: 'Metro Station', distance: '0.7km' },
    { name: 'Gym', distance: '2.3km' },
    { name: 'University', distance: '2.7km' },
    { name: 'Hospital', distance: '1.7km' },
    { name: 'Shopping Mall', distance: '1.1m' },
    { name: 'Police Station', distance: '1.2m' },
    { name: 'Bus Station', distance: '1.1m' },
    { name: 'River', distance: '3.1km' },
    { name: 'Market', distance: '3.4m' }
  ];
  properties = [
    {
      id: '01',
      type: 'FOR RENT',
      image: 'assets/images/listing/img_13.jpg',
      name: 'Blueberry villa',
      address: 'Mirpur 10, Stadium dhaka',
      price: '$34,900',
      detailsLink: '/listing_details_06',
      images: [
        'assets/images/listing/img_large_01.jpg',
        'assets/images/listing/img_large_02.jpg',
        'assets/images/listing/img_large_03.jpg'
      ]
    },
    {
      id: '02',
      type: 'FOR SELL',
      image: 'assets/images/listing/img_14.jpg',
      name: 'Blueberry villa',
      address: 'California link road, ca, usa',
      price: '$28,100',
      detailsLink: '/listing_details_06',
      images: [
        'assets/images/listing/img_large_04.jpg',
        'assets/images/listing/img_large_05.jpg',
        'assets/images/listing/img_large_06.jpg'
      ]
    },
    {
      id: '03',
      type: 'FOR SELL',
      image: 'assets/images/listing/img_15.jpg',
      name: 'Luxury villa in Dal lake.',
      address: 'Mirpur 10, Stadium',
      price: '$42,500',
      detailsLink: '/listing_details_06',
      images: [
        'assets/images/listing/img_large_01.jpg',
        'assets/images/listing/img_large_05.jpg',
        'assets/images/listing/img_large_03.jpg',
        'assets/images/listing/img_large_02.jpg'
      ]
    },
    {
      id: '04',
      type: 'FOR SELL',
      image: 'assets/images/listing/img_16.jpg',
      name: 'South Sun House',
      address: 'Mirpur 10, Stadium',
      price: '$55,500',
      detailsLink: '/listing_details_06',
      images: [
        'assets/images/listing/img_large_04.jpg',
        'assets/images/listing/img_large_06.jpg',
        'assets/images/listing/img_large_03.jpg',
        'assets/images/listing/img_large_02.jpg'
      ]
    },
    {
      id: '05',
      type: 'FOR SELL',
      image: 'assets/images/listing/img_14.jpg',
      name: 'White House villa',
      address: 'California link road, ca, usa',
      price: '$28,100',
      detailsLink: '/listing_details_06',
      images: [
        'assets/images/listing/img_large_04.jpg',
        'assets/images/listing/img_large_05.jpg',
        'assets/images/listing/img_large_06.jpg'
      ]
    }
  ];
  scores = [
    {
      label: 'Transit Score',
      value: 63,
      description: 'Moderate Distance Walkable',
      icon: 'assets/images/icon/icon_52.svg'
    },
    {
      label: 'School Score',
      value: 70,
      description: 'Short Distance Walkable',
      icon: 'assets/images/icon/icon_53.svg'
    },
    {
      label: 'Medical Score',
      value: 77,
      description: 'Short Distance Walkable',
      icon: 'assets/images/icon/icon_54.svg'
    },
    {
      label: 'Shopping Mall Score',
      value: 42,
      description: 'Long Distance Walkable',
      icon: 'assets/images/icon/icon_55.svg'
    }
  ];

  openModal() {
    this.modalService.openModal();
  }
  constructor(private swiperService: SwiperService, private modalService: ModalService) { }
  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.swiper-container', 1, 20, 3000, 3, 6, 3);
    Fancybox.bind('[data-fancybox]');
  }

}
