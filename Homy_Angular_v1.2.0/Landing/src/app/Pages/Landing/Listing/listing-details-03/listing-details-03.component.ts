import { Component } from '@angular/core';
import { Navbar7Component } from "../../../../layout/navbar-7/navbar-7.component";
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
declare const Fancybox: any;
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SwiperService } from '../../../../service/swiper.service';
import { ModalService } from '../../../../service/modal.service';

@Component({
    selector: 'app-listing-details-03',
    imports: [Navbar7Component, FancyBannerTwoComponent, Footer5Component, RouterLink, CommonModule],
    templateUrl: './listing-details-03.component.html'
})
export class ListingDetails03Component {
  constructor(private swiperService: SwiperService, private modalService: ModalService) { }
  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.swiper-container', 1, 20, 3000, 3, 6, 3);
    Fancybox.bind('[data-fancybox]');
  }

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

  openModal() {
    this.modalService.openModal();
  }
}
