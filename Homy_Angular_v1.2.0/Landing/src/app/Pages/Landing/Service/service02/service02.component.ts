import AOS from 'aos';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Navbar6Component } from "../../../../layout/navbar-6/navbar-6.component";
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SwiperService } from '../../../../service/swiper.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-service02',
    imports: [Navbar6Component, FancyBannerTwoComponent, Footer5Component, CommonModule, RouterLink],
    templateUrl: './service02.component.html'
})
export class Service02Component {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private swiperService: SwiperService) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) AOS.init({ duration: 800, easing: 'ease', once: true });
  }

  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.swiper-container', 1, 20, 3000, 2, 3, 5);
  }

  propertyCards = [
    { img: 'assets/images/media/img_19.jpg', btnText: 'BUY PROPERTY', title: 'Explore Home & Buy', link: 'listing_02.html' },
    { img: 'assets/images/media/img_20.jpg', btnText: 'RENT PROPERTY', title: 'List & Sell Quickly', link: 'listing_02.html', wowDelay: '0.1s' },
    { img: 'assets/images/media/img_21.jpg', btnText: 'SELL PROPERTY', title: 'Discover & get Rental', link: 'listing_02.html', wowDelay: '0.2s' },
  ];

  cards = [
    { img: 'assets/images/icon/icon_69.svg', title: 'Buy a home', description: 'Explore homy’s 2 million+ homes...', link: 'service_details.html', btnText: 'Buy Home' },
    { img: 'assets/images/icon/icon_70.svg', title: 'Rent a Home', description: 'Discover a rental...', link: 'service_details.html', btnText: 'Rent Home', wowDelay: '0.1s' },
    { img: 'assets/images/icon/icon_71.svg', title: 'Sell Home', description: 'List, sell, thrive...', link: 'service_details.html', btnText: 'Sell Home', wowDelay: '0.2s' },
    { img: 'assets/images/icon/icon_69.svg', title: 'Mortgage', description: 'Explore homy’s 2 million+ homes...', link: 'service_details.html', btnText: 'Buy Home' },
    { img: 'assets/images/icon/icon_70.svg', title: 'Consulting', description: 'Discover a rental...', link: 'service_details.html', btnText: 'Rent Home', wowDelay: '0.1s' },
    { img: 'assets/images/icon/icon_71.svg', title: 'Property Managements', description: 'List, sell, thrive...', link: 'service_details.html', btnText: 'Sell Home', wowDelay: '0.2s' },
  ];

  logos = [
    'assets/images/logo/p_logo_07.png', 'assets/images/logo/p_logo_08.png', 'assets/images/logo/p_logo_09.png',
    'assets/images/logo/p_logo_10.png', 'assets/images/logo/p_logo_11.png', 'assets/images/logo/p_logo_12.png', 'assets/images/logo/p_logo_09.png'
  ];
}
