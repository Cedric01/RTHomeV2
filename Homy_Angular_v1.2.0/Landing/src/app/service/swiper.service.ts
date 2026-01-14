import { Injectable } from '@angular/core';
import Swiper from 'swiper';

@Injectable({
  providedIn: 'root' 
})
export class SwiperService {

  constructor() { }

  initSwiper(container: string, slidesPerView: number, spaceBetween: number, autoplayDelay: number, small: number, medium: number, large: number) {
    new Swiper(container, {
      slidesPerView,
      spaceBetween,
      loop: true,
      autoplay: {
        delay: autoplayDelay,
        disableOnInteraction: false
      },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      pagination: { el: '.swiper-pagination', clickable: true },
      breakpoints: {
        576: { slidesPerView: small },
        768: { slidesPerView: medium },
        1024: { slidesPerView: large }
      }
    });
  }
}
