import AOS from 'aos';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { DashboardNavbarComponent } from "../../../components/dashboard-navbar/dashboard-navbar.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import Swiper from 'swiper';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-favourites',
    imports: [DashboardNavbarComponent, CommonModule, RouterLink],
    templateUrl: './favourites.component.html'
})
export class FavouritesComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        mirror: false,
      });
    }
  }
  ngAfterViewInit(): void {
    new Swiper('#carousel1', {
      loop: true,
      autoplay: {
        delay: 1000000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }
  listings = [
    {
      id: 1,
      tag: 'FOR RENT',
      imageUrls: [
        'assets/images/listing/img_01.jpg',
        'assets/images/listing/img_01.jpg',
        'assets/images/listing/img_01.jpg'
      ],
      title: 'Blueberry villa',
      address: 'Mirpur 10, Stadium dhaka 1208',
      sqft: '1370 sqft',
      bed: '03 bed',
      bath: '02 bath',
      price: '$3,280/m'
    }, {
      id: 1,
      tag: 'FOR SELL',
      imageUrls: [
        'assets/images/listing/img_02.jpg',
        'assets/images/listing/img_03.jpg',
        'assets/images/listing/img_01.jpg'
      ],
      title: 'White House villa',
      address: 'Muza link road, ca, usa',
      sqft: '1270 sqft',
      bed: '02 bed',
      bath: '02 bath',
      price: '$28,100.00'
    }, {
      id: 1,
      tag: 'FOR SELL',
      imageUrls: [
        'assets/images/listing/img_03.jpg',
        'assets/images/listing/img_02.jpg',
        'assets/images/listing/img_01.jpg'
      ],
      title: 'Luxury villa in Dal lake.',
      address: 'Mirpur 10, Stadium',
      sqft: '1270 sqft',
      bed: '02 bed',
      bath: '02 bath',
      price: '$42,500.00'
    }, {
      id: 1,
      tag: 'FOR RENT',
      imageUrls: [
        'assets/images/listing/img_04.jpg',
        'assets/images/listing/img_01.jpg',
        'assets/images/listing/img_02.jpg'
      ],
      title: 'Blueberry villa',
      address: 'Mirpur 10, Stadium dhaka 1208',
      sqft: '1370 sqft',
      bed: '03 bed',
      bath: '02 bath',
      price: '$3,280/m'
    }, {
      id: 1,
      tag: 'FOR SELL',
      imageUrls: [
        'assets/images/listing/img_05.jpg',
        'assets/images/listing/img_03.jpg',
        'assets/images/listing/img_01.jpg'
      ],
      title: 'White House villa',
      address: 'Muza link road, ca, usa',
      sqft: '1270 sqft',
      bed: '02 bed',
      bath: '02 bath',
      price: '$28,100.00'
    }, {
      id: 1,
      tag: 'FOR RENT',
      imageUrls: [
        'assets/images/listing/img_06.jpg',
        'assets/images/listing/img_04.jpg',
        'assets/images/listing/img_01.jpg'
      ],
      title: 'Luxury villa in Dal lake.',
      address: 'Mirpur 10, Stadium',
      sqft: '1270 sqft',
      bed: '02 bed',
      bath: '02 bath',
      price: '$3,280/m'
    }, {
      id: 1,
      tag: 'FOR RENT',
      imageUrls: [
        'assets/images/listing/img_01.jpg',
        'assets/images/listing/img_01.jpg',
        'assets/images/listing/img_01.jpg'
      ],
      title: 'Blueberry villa',
      address: 'Mirpur 10, Stadium dhaka 1208',
      sqft: '1370 sqft',
      bed: '03 bed',
      bath: '02 bath',
      price: '$3,280/m'
    }, {
      id: 1,
      tag: 'FOR SELL',
      imageUrls: [
        'assets/images/listing/img_02.jpg',
        'assets/images/listing/img_03.jpg',
        'assets/images/listing/img_01.jpg'
      ],
      title: 'White House villa',
      address: 'Muza link road, ca, usa',
      sqft: '1270 sqft',
      bed: '02 bed',
      bath: '02 bath',
      price: '$28,100.00'
    }, {
      id: 1,
      tag: 'FOR SELL',
      imageUrls: [
        'assets/images/listing/img_03.jpg',
        'assets/images/listing/img_02.jpg',
        'assets/images/listing/img_01.jpg'
      ],
      title: 'Luxury villa in Dal lake.',
      address: 'Mirpur 10, Stadium',
      sqft: '1270 sqft',
      bed: '02 bed',
      bath: '02 bath',
      price: '$42,500.00'
    },
  ];
}
