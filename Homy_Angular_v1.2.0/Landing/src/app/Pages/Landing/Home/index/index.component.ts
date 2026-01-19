import { SwiperService } from './../../../../service/swiper.service';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import AOS from 'aos';
import Swiper from 'swiper';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Footer1Component } from '../../../../layout/footer-1/footer-1.component';
import { Navbar1Component } from '../../../../layout/navbar-1/navbar-1.component';
import { FeedbackSectionOneComponent } from '../../../../components/feedback-section-one/feedback-section-one.component';
import { BLockFeatureOneComponent } from '../../../../components/block-feature-one/block-feature-one.component';
import { BLockFeatureThreeComponent } from '../../../../components/block-feature-three/block-feature-three.component';
import { FancyBannerOneComponent } from '../../../../components/fancy-banner-one/fancy-banner-one.component';
import { FancyBannerTwoComponent } from '../../../../components/fancy-banner-two/fancy-banner-two.component';
import { ModalService } from '../../../../service/modal.service';
import { MenuListComponent } from "../../../../components/menu-list/menu-list.component";

@Component({
    selector: 'app-index',
    imports: [
        Footer1Component, RouterLink, CommonModule, FormsModule,
        FeedbackSectionOneComponent, BLockFeatureOneComponent, BLockFeatureThreeComponent,
        FancyBannerOneComponent, NgSelectModule, FancyBannerTwoComponent,
        MenuListComponent
    ],
    templateUrl: './index.component.html'
})
export class IndexComponent {
  headerClass = 'theme-main-menu menu-overlay menu-style-one sticky-menu';
 
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

  listings = [
    {
      id: 1, tag: 'FOR RENT', imageUrls: ['assets/images/listing/img_01.jpg'], title: 'Blueberry villa',
      address: 'Mirpur 10, Stadium dhaka 1208', sqft: '1370 sqft', bed: '03 bed', bath: '02 bath', price: '$3,280/m'
    },
    {
      id: 1, tag: 'FOR SELL', imageUrls: ['assets/images/listing/img_02.jpg'], title: 'White House villa',
      address: 'Muza link road, ca, usa', sqft: '1270 sqft', bed: '02 bed', bath: '02 bath', price: '$28,100.00'
    },
    {
      id: 1, tag: 'FOR SELL', imageUrls: ['assets/images/listing/img_03.jpg'], title: 'Luxury villa in Dal lake.',
      address: 'Mirpur 10, Stadium', sqft: '1270 sqft', bed: '02 bed', bath: '02 bath', price: '$42,500.00'
    },
    {
      id: 1, tag: 'FOR RENT', imageUrls: ['assets/images/listing/img_04.jpg'], title: 'Blueberry villa',
      address: 'Mirpur 10, Stadium dhaka 1208', sqft: '1370 sqft', bed: '03 bed', bath: '02 bath', price: '$3,280/m'
    },
    {
      id: 1, tag: 'FOR SELL', imageUrls: ['assets/images/listing/img_05.jpg'], title: 'White House villa',
      address: 'Muza link road, ca, usa', sqft: '1270 sqft', bed: '02 bed', bath: '02 bath', price: '$28,100.00'
    },
    {
      id: 1, tag: 'FOR RENT', imageUrls: ['assets/images/listing/img_06.jpg'], title: 'Luxury villa in Dal lake.',
      address: 'Mirpur 10, Stadium', sqft: '1270 sqft', bed: '02 bed', bath: '02 bath', price: '$3,280/m'
    }
  ];

  agents = [
    { name: 'Mark Filo', imageUrl: 'assets/images/agent/img_01.jpg', designation: 'CEO & Founder', link: '/agent_details' },
    { name: 'Chris Matial', imageUrl: 'assets/images/agent/img_02.jpg', designation: 'Retailer', link: '/agent_details' },
    { name: 'Jubayer Al Hasan', imageUrl: 'assets/images/agent/img_03.jpg', designation: 'Marketing Expert', link: '/agent_details' },
    { name: 'Jannatul Ferdaus', imageUrl: 'assets/images/agent/img_04.jpg', designation: 'Broker', link: '/agent_details' },
    { name: 'Chris Matial', imageUrl: 'assets/images/agent/img_05.jpg', designation: 'Broker', link: '/agent_details' }
  ];

  steps = [
    { icon: 'assets/images/icon/icon_07.svg', title: 'Create Account', description: 'It’s very easy to open an account and start your journey.', delay: 0 },
    { icon: 'assets/images/icon/icon_08.svg', title: 'Find Home', description: 'Complete your profile with all the info to get attention of client.', delay: 100 },
    { icon: 'assets/images/icon/icon_09.svg', title: 'Quick Process', description: 'Apply & get your preferable jobs with all the requirements and get it.', delay: 200 }
  ];

  listingsAll = [
    { id: 'carousel1', tag: 'FOR RENT', images: ['assets/images/listing/img_18.jpg', 'assets/images/listing/img_17.jpg', 'assets/images/listing/img_19.jpg'], title: 'Blueberry villa', address: 'Mirpur 10, Stadium dhaka 1208', features: [{ icon: 'icon_04.svg', label: '1370 sqft' }, { icon: 'icon_05.svg', label: '03 bed' }, { icon: 'icon_06.svg', label: '02 bath' }], price: '$3,280/<sub>m</sub>', rent: true },
    { id: 'carousel2', tag: 'FOR SELL', images: ['assets/images/listing/img_18.jpg', 'assets/images/listing/img_19.jpg', 'assets/images/listing/img_17.jpg'], title: 'White House villa', address: 'Muza link road, ca, usa', features: [{ icon: 'icon_04.svg', label: '1270 sqft' }, { icon: 'icon_05.svg', label: '02 bed' }, { icon: 'icon_06.svg', label: '02 bath' }], price: '$28,100.00', rent: false },
    { id: 'carousel3', tag: 'FOR SELL', images: ['assets/images/listing/img_19.jpg', 'assets/images/listing/img_18.jpg', 'assets/images/listing/img_17.jpg'], title: 'Luxury villa in Dal lake.', address: 'Mirpur 10, Stadium', features: [{ icon: 'icon_04.svg', label: '1270 sqft' }, { icon: 'icon_05.svg', label: '02 bed' }, { icon: 'icon_06.svg', label: '02 bath' }], price: '$42,500.00', rent: false },
    { id: 'carousel4', tag: 'FOR RENT', images: ['assets/images/listing/img_32.jpg', 'assets/images/listing/img_18.jpg', 'assets/images/listing/img_17.jpg'], title: 'Blueberry villa', address: 'Mirpur 10, Stadium dhaka 1208', features: [{ icon: 'icon_04.svg', label: '1370 sqft' }, { icon: 'icon_05.svg', label: '03 bed' }, { icon: 'icon_06.svg', label: '02 bath' }], price: '$3,280/<sub>m</sub>', rent: true },
    { id: 'carousel5', tag: 'FOR RENT', images: ['assets/images/listing/img_33.jpg', 'assets/images/listing/img_18.jpg', 'assets/images/listing/img_17.jpg'], title: 'Blueberry villa', address: 'Mirpur 10, Stadium dhaka 1208', features: [{ icon: 'icon_04.svg', label: '1370 sqft' }, { icon: 'icon_05.svg', label: '03 bed' }, { icon: 'icon_06.svg', label: '02 bath' }], price: '$3,280/<sub>m</sub>', rent: true },
    { id: 'carousel6', tag: 'FOR SELL', images: ['assets/images/listing/img_34.jpg', 'assets/images/listing/img_18.jpg', 'assets/images/listing/img_17.jpg'], title: 'Blueberry villa', address: 'Mirpur 10, Stadium dhaka 1208', features: [{ icon: 'icon_04.svg', label: '1370 sqft' }, { icon: 'icon_05.svg', label: '03 bed' }, { icon: 'icon_06.svg', label: '02 bath' }], price: '$3,280/<sub>m</sub>', rent: true }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private swiperService: SwiperService, private modalService: ModalService) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) AOS.init({ duration: 800, easing: 'ease', once: true, mirror: false });
  }

  ngAfterViewInit() {
    this.swiperService.initSwiper('.swiper-container', 1, 20, 3000, 3, 6, 4);
    this.swiperService.initSwiper('#carousel1', 1, 20, 3000, 3, 6, 1);

  }

  initializeSwiper(selector: string, options: any) {
    new Swiper(selector, { ...options, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' } });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.pageYOffset > 100) {
      this.headerClass = 'theme-main-menu menu-overlay menu-style-one sticky-menu fixed';
    } else {
      this.headerClass = 'theme-main-menu menu-overlay menu-style-one sticky-menu';
    }
  }
  openModal() {
    this.modalService.openModal();
  }
}
