import AOS from 'aos';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Navbar1Component } from "../../../../layout/navbar-1/navbar-1.component";
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import Swiper from 'swiper';
declare const Fancybox: any;
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";

@Component({
    selector: 'app-about-us-1',
    imports: [Navbar1Component, FancyBannerTwoComponent, Footer5Component, CommonModule, RouterLink, Footer5Component],
    templateUrl: './about-us-1.component.html'
})
export class AboutUs1Component {

  agents = [
    { name: 'Mark Filo', imageUrl: 'assets/images/agent/img_01.jpg', designation: 'CEO & Founder', link: '/agent_details' },
    { name: 'Chris Matial', imageUrl: 'assets/images/agent/img_02.jpg', designation: 'Retailer', link: '/agent_details' },
    { name: 'Jubayer Al Hasan', imageUrl: 'assets/images/agent/img_03.jpg', designation: 'Marketing Expert', link: '/agent_details' },
    { name: 'Jannatul Ferdaus', imageUrl: 'assets/images/agent/img_04.jpg', designation: 'Broker', link: '/agent_details' },
    { name: 'Chris Matial', imageUrl: 'assets/images/agent/img_05.jpg', designation: 'Broker', link: '/agent_details' }
  ];

  logoImages = [
    'assets/images/logo/p_logo_07.png', 'assets/images/logo/p_logo_08.png', 'assets/images/logo/p_logo_09.png',
    'assets/images/logo/p_logo_10.png', 'assets/images/logo/p_logo_11.png', 'assets/images/logo/p_logo_12.png'
  ];

  aboutUs = {
    title: 'About usE',
    description: 'Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering.',
    whoWeAre: 'Our founders Dustin Moskovitz & Justin Rosenstein met leading Engineering teams at Facebook. As operations scaled, they grew frustrated by how difficult it was to coordinate.',
    mission: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore aliqua.'
  };

  counters = [
    { value: '1.2%', label: 'Low interest rate' },
    { value: '$1.3b+', label: 'Cumulative trading volume' }
  ];

  cards = [
    { icon: 'assets/images/icon/icon_07.svg', title: 'Create Account', description: "It’s very easy to open an account and start your journey.", hasArrow: false, delay: '' },
    { icon: 'assets/images/icon/icon_08.svg', title: 'Find Home', description: 'Complete your profile with all the info to get attention of client.', hasArrow: true, delay: '0.1s' },
    { icon: 'assets/images/icon/icon_09.svg', title: 'Quick Process', description: 'Apply & get your preferable jobs with all the requirements and get it.', hasArrow: false, delay: '0.2s' }
  ];

  feedbacks = [
    { rating: 5, name: 'Rashed Kabir', location: 'California', feedback: 'Game-changer! Boosted efficiency, simplified tasks, and saved time. Highly recommended!', avatar: 'assets/images/media/img_01.jpg', icon: 'assets/images/icon/icon_29.svg' },
    { rating: 5, name: 'Jannat Ferdu', location: 'California', feedback: 'Found our dream home. Great Business with them. simplified tasks, and saved time. Thank You', avatar: 'assets/images/media/img_02.jpg', icon: 'assets/images/icon/icon_29.svg' },
    { rating: 5, name: 'Jubayer Hasan', location: 'California', feedback: 'Efficient and friendly service, guided us perfectly. Satisfied with our new home. Thank you!', avatar: 'assets/images/media/img_03.jpg', icon: 'assets/images/icon/icon_29.svg' }
  ];

  ngAfterViewInit(): void {
    this.initSwiper('.swiper-container', 1, 20, 3000, 3, 6, 4);
    this.initSwiper('#carousel1', 1, 20, 3000, 2, 3, 6);
    this.initSwiper('#feedback-slider', 1, 20, 3000, 2, 3, 2);

    Fancybox.bind('[data-fancybox]');
  }

  private initSwiper(container: string, slidesPerView: number, spaceBetween: number, autoplayDelay: number, small: number, medium: number, large: number) {
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
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) AOS.init({ duration: 800, easing: 'ease', once: true, mirror: false });
  }
}
