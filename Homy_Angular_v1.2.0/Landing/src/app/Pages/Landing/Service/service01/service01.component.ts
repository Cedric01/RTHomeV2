import AOS from 'aos';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Navbar7Component } from "../../../../layout/navbar-7/navbar-7.component";
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer1Component } from "../../../../layout/footer-1/footer-1.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ModalService } from '../../../../service/modal.service';
import { SwiperService } from '../../../../service/swiper.service';

@Component({
    selector: 'app-service01',
    imports: [Navbar7Component, FancyBannerTwoComponent, Footer1Component, CommonModule, RouterLink],
    templateUrl: './service01.component.html'
})
export class Service01Component {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private swiperService: SwiperService, private modalService: ModalService) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) AOS.init({ duration: 800, easing: 'ease', once: true, mirror: false });
  }

  cardItems = [
    { img: 'assets/images/icon/icon_01.svg', title: 'Buy a home', description: "Explore homy’s 2 million+ homes.", aosDelay: 0 },
    { img: 'assets/images/icon/icon_02.svg', title: 'Rent a home', description: "Discover a rental you'll love.", aosDelay: 100 },
    { img: 'assets/images/icon/icon_03.svg', title: 'Sell property', description: "List, sell, thrive – with our top-notch agency.", aosDelay: 200 },
  ];

  services = [
    { img: 'assets/images/icon/icon_69.svg', title: 'Buy a home', description: 'Explore 2 million+ homes.', buttonText: 'Buy Home', routerLink: '/service_details', aosDelay: 0 },
    { img: 'assets/images/icon/icon_70.svg', title: 'Rent a Home', description: "Discover a rental you'll love.", buttonText: 'Rent Home', routerLink: '/service_details', aosDelay: 100 },
    { img: 'assets/images/icon/icon_71.svg', title: 'Sell Home', description: 'Top-notch real estate agency.', buttonText: 'Sell Home', routerLink: '/service_details', aosDelay: 200 },
    { img: 'assets/images/icon/icon_69.svg', title: 'Mortgage', description: 'Explore homes and find your ideal living space.', buttonText: 'Buy Home', routerLink: '/service_details', aosDelay: 0 },
    { img: 'assets/images/icon/icon_70.svg', title: 'Consulting', description: "Find a rental you'll love.", buttonText: 'Rent Home', routerLink: '/service_details', aosDelay: 100 },
    { img: 'assets/images/icon/icon_71.svg', title: 'Property Managements', description: 'List, sell, thrive with real estate expertise.', buttonText: 'Sell Home', routerLink: '/service_details', aosDelay: 200 },
  ];

  ngAfterViewInit() {
    this.swiperService.initSwiper('.swiper-container', 1, 20, 3000, 1, 1, 1);
  }
}
