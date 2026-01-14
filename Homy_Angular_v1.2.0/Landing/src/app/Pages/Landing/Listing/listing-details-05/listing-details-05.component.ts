import { Component } from '@angular/core';
import { Navbar6Component } from "../../../../layout/navbar-6/navbar-6.component";
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { CommonModule } from '@angular/common';
import { ModalService } from '../../../../service/modal.service';
import { RouterLink } from '@angular/router';
declare const Fancybox: any;

@Component({
    selector: 'app-listing-details-05',
    imports: [Navbar6Component, FancyBannerTwoComponent, Footer5Component, CommonModule, RouterLink],
    templateUrl: './listing-details-05.component.html'
})
export class ListingDetails05Component {
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
  ngAfterViewInit(): void {
    Fancybox.bind('[data-fancybox]');
  }

  constructor(private modalService: ModalService) { }

  openModal() {
    this.modalService.openModal();
  }
}
