import AOS from 'aos';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { SidenavComponent } from "../../../../components/sidenav/sidenav.component";
import { Navbar5Component } from "../../../../layout/navbar-5/navbar-5.component";
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { SwiperService } from '../../../../service/swiper.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-index-5',
    imports: [SidenavComponent, Navbar5Component, FancyBannerTwoComponent, Footer5Component, NgSelectModule, CommonModule, RouterLink],
    templateUrl: './index-5.component.html'
})
export class Index5Component {
  options = [
    { value: '1', label: 'Buy Apartments' }, { value: '2', label: 'Rent Condos' },
    { value: '3', label: 'Sell Houses' }, { value: '4', label: 'Rent Industrial' },
    { value: '6', label: 'Sell Villas' }
  ];

  locations = [
    { value: '1', label: 'Dhanmondi, Dhaka' }, { value: '2', label: 'Acapulco, Mexico' },
    { value: '3', label: 'Berlin, Germany' }, { value: '4', label: 'Cannes, France' },
    { value: '5', label: 'Delhi, India' }, { value: '6', label: 'Giza, Egypt' },
    { value: '7', label: 'Havana, Cuba' }
  ];

  priceRanges = [
    { value: '1', label: '$10,000 - $200,000' }, { value: '2', label: '$200,000 - $300,000' },
    { value: '3', label: '$300,000 - $400,000' }
  ];

  renthome = [
    { value: '1', label: 'Rent Apartments' }, { value: '2', label: 'Rent Condos' },
    { value: '3', label: 'Rent Houses' }, { value: '4', label: 'Rent Industrial' },
    { value: '5', label: 'Rent Villas' }
  ];

  rentLocation = [
    { value: '1', label: 'Acapulco, Mexico' }, { value: '2', label: 'Dhanmondi, Dhaka' },
    { value: '3', label: 'Berlin, Germany' }, { value: '4', label: 'Cannes, France' },
    { value: '5', label: 'Delhi, India' }, { value: '6', label: 'Giza, Egypt' },
    { value: '7', label: 'Havana, Cuba' }
  ];

  rentPrice = [
    { value: '1', label: '$10,000 - $200,000' }, { value: '2', label: '$200,000 - $300,000' },
    { value: '3', label: '$300,000 - $400,000' }
  ];

  logoImages = [
    'assets/images/logo/p_logo_07.png', 'assets/images/logo/p_logo_08.png', 'assets/images/logo/p_logo_09.png',
    'assets/images/logo/p_logo_10.png', 'assets/images/logo/p_logo_11.png', 'assets/images/logo/p_logo_12.png'
  ];

  listings = [
    { id: 'carousel1', tag: 'FOR RENT', images: ['assets/images/listing/img_18.jpg', 'assets/images/listing/img_17.jpg', 'assets/images/listing/img_19.jpg'], title: 'Blueberry villa', address: 'Mirpur 10, Stadium dhaka 1208', features: [{ icon: 'icon_04.svg', label: '1370 sqft' }, { icon: 'icon_05.svg', label: '03 bed' }, { icon: 'icon_06.svg', label: '02 bath' }], price: '$3,280/<sub>m</sub>', rent: true },
    { id: 'carousel2', tag: 'FOR SELL', images: ['assets/images/listing/img_18.jpg', 'assets/images/listing/img_19.jpg', 'assets/images/listing/img_17.jpg'], title: 'White House villa', address: 'Muza link road, ca, usa', features: [{ icon: 'icon_04.svg', label: '1270 sqft' }, { icon: 'icon_05.svg', label: '02 bed' }, { icon: 'icon_06.svg', label: '02 bath' }], price: '$28,100.00', rent: false },
    { id: 'carousel3', tag: 'FOR SELL', images: ['assets/images/listing/img_19.jpg', 'assets/images/listing/img_18.jpg', 'assets/images/listing/img_17.jpg'], title: 'Luxury villa in Dal lake.', address: 'Mirpur 10, Stadium', features: [{ icon: 'icon_04.svg', label: '1270 sqft' }, { icon: 'icon_05.svg', label: '02 bed' }, { icon: 'icon_06.svg', label: '02 bath' }], price: '$42,500.00', rent: false },
  ];

  cities = [
    {
      name: 'California',
      imageUrl: 'assets/images/media/img_38.jpg',
      listings: '1,230',
      link: '/listing_04'
    },
    {
      name: 'Miami',
      imageUrl: 'assets/images/media/img_39.jpg',
      listings: '1,140',
      link: '/listing_04'
    },
    {
      name: 'New York',
      imageUrl: 'assets/images/media/img_40.jpg',
      listings: '1,740',
      link: '/listing_04'
    },
    {
      name: 'Washington DC',
      imageUrl: 'assets/images/media/img_41.jpg',
      listings: '720',
      link: '/listing_04'
    }
  ];

  homeActions = [
    {
      title: 'Buy a home',
      description: "Explore Homy's 2 million+ homes and uncover your ideal living space.",
      buttonText: 'Buy Home',
      buttonLink: '/listing_08',
      icon: 'assets/images/icon/icon_35.svg'
    },
    {
      title: 'Rent a home',
      description: "Discover a rental you'll love on Homy, thanks to 35+ filters.",
      buttonText: 'Rent Home',
      buttonLink: '/listing_08',
      icon: 'assets/images/icon/icon_36.svg'
    },
    {
      title: 'Sell Home',
      description: 'List, sell, thrive – with our top-notch real estate agency. It’s super easy.',
      buttonText: 'Sell Home',
      buttonLink: '/listing_08',
      icon: 'assets/images/icon/icon_37.svg'
    }
  ];
  agents = [
    { name: 'Mark Filo', imageUrl: 'assets/images/agent/img_01.jpg', designation: 'CEO & Founder', link: '/agent_details' },
    { name: 'Chris Matial', imageUrl: 'assets/images/agent/img_02.jpg', designation: 'Retailer', link: '/agent_details' },
    { name: 'Jubayer Al Hasan', imageUrl: 'assets/images/agent/img_03.jpg', designation: 'Marketing Expert', link: '/agent_details' },
    { name: 'Jannatul Ferdaus', imageUrl: 'assets/images/agent/img_04.jpg', designation: 'Broker', link: '/agent_details' },
    { name: 'Chris Matial', imageUrl: 'assets/images/agent/img_05.jpg', designation: 'Broker', link: '/agent_details' }
  ];

  feedbacks = [
    { rating: 5, name: 'Rashed Kabir', location: 'California', feedback: 'Game-changer! Boosted efficiency, simplified tasks, and saved time. Highly recommended!', avatar: 'assets/images/media/img_01.jpg', icon: 'assets/images/icon/icon_29.svg' },
    { rating: 5, name: 'Jannat Ferdu', location: 'California', feedback: 'Found our dream home. Great Business with them. simplified tasks, and saved time. Thank You', avatar: 'assets/images/media/img_02.jpg', icon: 'assets/images/icon/icon_29.svg' },
    { rating: 5, name: 'Jubayer Hasan', location: 'California', feedback: 'Efficient and friendly service, guided us perfectly. Satisfied with our new home. Thank you!', avatar: 'assets/images/media/img_03.jpg', icon: 'assets/images/icon/icon_29.svg' }
  ];
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private swiperService: SwiperService) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) AOS.init({ duration: 800, easing: 'ease', once: true, mirror: false });
  }

  ngAfterViewInit() {
    this.swiperService.initSwiper('.swiper-container', 1, 20, 3000, 2, 3, 5);
    this.swiperService.initSwiper('#agent', 1, 20, 3000, 2, 3, 4);
    this.swiperService.initSwiper('#feedback-slider', 1, 20, 3000, 1, 1, 2);
  }
}
