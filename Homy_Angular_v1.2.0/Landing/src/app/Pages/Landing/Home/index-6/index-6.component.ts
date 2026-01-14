import AOS from 'aos';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Navbar6Component } from "../../../../layout/navbar-6/navbar-6.component";
import { RouterLink } from '@angular/router';
import { SwiperService } from '../../../../service/swiper.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { Footer6Component } from "../../../../layout/footer-6/footer-6.component";
import { AdvanceFilterModalComponent } from "../../../../components/advance-filter-modal/advance-filter-modal.component";

@Component({
    selector: 'app-index-6',
    imports: [Navbar6Component, RouterLink, CommonModule, NgSelectModule, Footer6Component, AdvanceFilterModalComponent],
    templateUrl: './index-6.component.html'
})
export class Index6Component {


  ngAfterViewInit() {
    this.swiperService.initSwiper('.swiper-container', 1, 20, 3000, 2, 3, 1);
    this.swiperService.initSwiper('#carousel1', 1, 20, 3000, 2, 3, 5);
  }
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
  sellhome = [{ value: '1', label: 'Sell Apartments' }, { value: '2', label: 'Sell Condos' }, { value: '3', label: 'Sell Houses' }, { value: '4', label: 'Sell Industrial' }, { value: '5', label: 'Sell Villas' }];

  sellLocation = [
    { value: '1', label: 'Acapulco, Mexico' }, { value: '2', label: 'Dhanmondi, Dhaka' }, { value: '3', label: 'Berlin, Germany' },
    { value: '4', label: 'Cannes, France' }, { value: '5', label: 'Delhi, India' }, { value: '6', label: 'Giza, Egypt' }, { value: '7', label: 'Havana, Cuba' }
  ];

  sellPrice = [
    { value: '1', label: '$10,000 - $200,000' }, { value: '2', label: '$200,000 - $300,000' }, { value: '3', label: '$300,000 - $400,000' }
  ];

  propertyList = [
    { name: 'Shopping Mall', icon: 'assets/images/icon/icon_15.svg', link: '/listing_01' },
    { name: 'Apartments', icon: 'assets/images/icon/icon_16.svg', link: '/listing_01' },
    { name: 'Villa', icon: 'assets/images/icon/icon_17.svg', link: '/listing_01' },
    { name: 'Industry', icon: 'assets/images/icon/icon_18.svg', link: '/listing_01' },
    { name: 'Office', icon: 'assets/images/icon/icon_19.svg', link: '/listing_01' },
    { name: 'Medical', icon: 'assets/images/icon/icon_20.svg', link: '/listing_01' },
    { name: 'House', icon: 'assets/images/icon/icon_21.svg', link: '/listing_01' },
    { name: 'Loft', icon: 'assets/images/icon/icon_22.svg', link: '/listing_01' },
  ];

  cities = [
    {
      name: 'California',
      listings: 1230,
      image: 'assets/images/media/img_38.jpg',
      link: '/listing_04',
      delay: 0
    },
    {
      name: 'Miami',
      listings: 1140,
      image: 'assets/images/media/img_39.jpg',
      link: '/listing_04',
      delay: 100
    },
    {
      name: 'New York',
      listings: 1740,
      image: 'assets/images/media/img_40.jpg',
      link: '/listing_04',
      delay: 200
    },
    {
      name: 'Washington DC',
      listings: 720,
      image: 'assets/images/media/img_41.jpg',
      link: '/listing_04',
      delay: 300
    }
  ];

  listings = [
    { id: 'carousel1', tag: 'FOR RENT', images: ['assets/images/listing/img_18.jpg', 'assets/images/listing/img_17.jpg', 'assets/images/listing/img_19.jpg'], title: 'Blueberry villa', address: 'Mirpur 10, Stadium dhaka 1208', features: [{ icon: 'icon_04.svg', label: '1370 sqft' }, { icon: 'icon_05.svg', label: '03 bed' }, { icon: 'icon_06.svg', label: '02 bath' }], price: '$3,280/<sub>m</sub>', rent: true },
    { id: 'carousel2', tag: 'FOR SELL', images: ['assets/images/listing/img_18.jpg', 'assets/images/listing/img_19.jpg', 'assets/images/listing/img_17.jpg'], title: 'White House villa', address: 'Muza link road, ca, usa', features: [{ icon: 'icon_04.svg', label: '1270 sqft' }, { icon: 'icon_05.svg', label: '02 bed' }, { icon: 'icon_06.svg', label: '02 bath' }], price: '$28,100.00', rent: false },
    { id: 'carousel3', tag: 'FOR SELL', images: ['assets/images/listing/img_19.jpg', 'assets/images/listing/img_18.jpg', 'assets/images/listing/img_17.jpg'], title: 'Luxury villa in Dal lake.', address: 'Mirpur 10, Stadium', features: [{ icon: 'icon_04.svg', label: '1270 sqft' }, { icon: 'icon_05.svg', label: '02 bed' }, { icon: 'icon_06.svg', label: '02 bath' }], price: '$42,500.00', rent: false },
  ];
  features = [
    {
      icon: 'assets/images/icon/icon_40.svg',
      title: 'Property Insurance',
      description: 'Elit esse cillum dol fug nulla tur nos ullamo.',
      paddingClass: 'pe-xxl-5'
    },
    {
      icon: 'assets/images/icon/icon_41.svg',
      title: 'Easy Payments',
      description: 'quis nostrud exerct ulla security finibus ne derived.',
      paddingClass: 'pe-xxl-2 ps-xxl-2'
    },
    {
      icon: 'assets/images/icon/icon_42.svg',
      title: 'Quick Process',
      description: "Duis aute irure do reprehe de Cicero's voluptat velit.",
      paddingClass: 'ps-xxl-5'
    }
  ];
  feedbacks = [
    {
      message: 'Efficient and friendly service, guided us <span>perfectly</span> I am satisfied with our new home. Give a try. Thank you!',
      image: 'assets/images/media/img_01.jpg',
      name: 'Musa Delimuza',
      location: 'Miami, USA'
    },
    {
      message: 'Found our dream home. Great <span>Business</span> with them. To thank you for excellent service. Will take again sure.',
      image: 'assets/images/media/img_02.jpg',
      name: 'Alina Cruse',
      location: 'Miami, Italy'
    },
    {
      message: 'Efficient and friendly service, guided us <span>perfectly</span> I am satisfied with our new home. Give a try. Thank you!',
      image: 'assets/images/media/img_03.jpg',
      name: 'Rashed Ka.',
      location: 'Miami, USA'
    }
  ];
  logoImages = [
    'assets/images/logo/p_logo_07.png', 'assets/images/logo/p_logo_08.png', 'assets/images/logo/p_logo_09.png',
    'assets/images/logo/p_logo_10.png', 'assets/images/logo/p_logo_11.png', 'assets/images/logo/p_logo_12.png'
  ];
  blogs = [
    {
      date: '08 JAN',
      image: 'assets/images/blog/blog_img_03.jpg',
      author: 'Mark Quins',
      readingTime: '7 min',
      title: 'Print, publishing qui visual ux layout mockups.',
      link: '/blog_details'
    },
    {
      date: '17 AUG',
      image: 'assets/images/blog/blog_img_01.jpg',
      author: 'Rashed Kabir',
      readingTime: '7 min',
      title: 'Designer’s Checklist for Every UX/UI Project.',
      link: '/blog_details'
    },
    {
      date: '21 SEP',
      image: 'assets/images/blog/blog_img_04.jpg',
      author: 'Jubayer Hasan',
      readingTime: '8 min',
      title: 'Spending Habits, 13 Tips for grow Your Money.',
      link: '/blog_details'
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private swiperService: SwiperService) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) AOS.init({ duration: 800, easing: 'ease', once: true, mirror: false });
  }
}
