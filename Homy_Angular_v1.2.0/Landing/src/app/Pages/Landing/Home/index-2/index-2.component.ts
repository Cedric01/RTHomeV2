import { SwiperService } from './../../../../service/swiper.service';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import Swiper from 'swiper';
import AOS from 'aos';
import { Navbar2Component } from '../../../../layout/navbar-2/navbar-2.component';
import { SidenavComponent } from '../../../../components/sidenav/sidenav.component';

@Component({
    selector: 'app-index-2',
    imports: [Navbar2Component, CommonModule, RouterLink, NgSelectModule, SidenavComponent],
    templateUrl: './index-2.component.html'
})
export class Index2Component {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private swiperService: SwiperService) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({ duration: 800, easing: 'ease', once: true, mirror: false });
    }
  }

  ngAfterViewInit() {
    this.swiperService.initSwiper('.swiper-container', 1, 20, 3000, 2, 3, 1);
    this.swiperService.initSwiper('#partner-logos', 1, 20, 3000, 2, 4, 5);
  }


  options = [
    { value: '1', label: 'Buy Apartments' }, { value: '2', label: 'Rent Condos' },
    { value: '3', label: 'Sell Houses' }, { value: '4', label: 'Rent Industrial' },
    { value: '6', label: 'Sell Villas' }
  ];

  location = [
    { value: '1', label: 'Dhanmondi, Dhaka' }, { value: '2', label: 'Acapulco, Mexico' },
    { value: '3', label: 'Berlin, Germany' }, { value: '4', label: 'Cannes, France' },
    { value: '6', label: 'Delhi, India' }, { value: '6', label: 'Giza, Egypt' },
    { value: '6', label: 'Havana, Cuba' }
  ];

  range = [
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

  listings = [
    {
      id: 1, tag: 'FOR RENT', imageUrls: ['assets/images/listing/img_01.jpg', 'assets/images/listing/img_01.jpg', 'assets/images/listing/img_01.jpg'],
      title: 'Blueberry villa', address: 'Mirpur 10, Stadium dhaka 1208', sqft: '1370 sqft', bed: '03 bed', bath: '02 bath', price: '$3,280/m'
    },
    {
      id: 1, tag: 'FOR SELL', imageUrls: ['assets/images/listing/img_02.jpg', 'assets/images/listing/img_03.jpg', 'assets/images/listing/img_01.jpg'],
      title: 'White House villa', address: 'Muza link road, ca, usa', sqft: '1270 sqft', bed: '02 bed', bath: '02 bath', price: '$28,100.00'
    },
    {
      id: 1, tag: 'FOR SELL', imageUrls: ['assets/images/listing/img_03.jpg', 'assets/images/listing/img_02.jpg', 'assets/images/listing/img_01.jpg'],
      title: 'Luxury villa in Dal lake.', address: 'Mirpur 10, Stadium', sqft: '1270 sqft', bed: '02 bed', bath: '02 bath', price: '$42,500.00'
    }
  ];

  locations = [
    { name: 'Kelowna', image: 'assets/images/media/img_13.jpg', link: '/listing_05' },
    { name: 'West Kelowna', image: 'assets/images/media/img_14.jpg', link: '/listing_05' },
    { name: 'Lake Country', image: 'assets/images/media/img_15.jpg', link: '/listing_05' },
    { name: 'Vernon', image: 'assets/images/media/img_16.jpg', link: '/listing_05' },
    { name: 'Peachland', image: 'assets/images/media/img_17.jpg', link: '/listing_05' },
    { name: 'Penticton', image: 'assets/images/media/img_18.jpg', link: '/listing_05' }
  ];

  accordionItems = [
    { id: 1, title: 'Advance Search', content: 'It only takes 5 minutes. Set-up is smooth & simple, with fully customizable filter to the right one.' },
    { id: 2, title: 'Exert Agents for any help', content: 'It only takes 5 minutes. Set-up is smooth & simple, with fully customizable filter to the right one.' },
    { id: 3, title: 'Protected payments, every time', content: 'It only takes 5 minutes. Set-up is smooth & simple, with fully customizable filter to the right one.' }
  ];

  cardItems = [
    { image: 'assets/images/media/img_19.jpg', title: 'Explore & buy Home', buttonText: 'BUY HOME', link: '/listing_03' },
    { image: 'assets/images/media/img_20.jpg', title: 'List & Sell quickly', buttonText: 'Sell Now', link: '/listing_03' },
    { image: 'assets/images/media/img_21.jpg', title: 'Discover & get Rental', buttonText: 'RENT NOW', link: '/listing_03' }
  ];

  feedbacks = [
    { quote: "Excellent service, made my dream home real. <span>highly recommended</span> real estate agency!", name: "Musa Delimuza", location: "Milan, Italy", image: "assets/images/media/img_22.jpg" },
    { quote: "Excellent service, made my dream home real. <span>highly recommended</span> real estate agency!", name: "Zubayer Hasan", location: "Milan, Italy", image: "assets/images/media/img_23.jpg" },
    { quote: "Excellent service, made my dream home real. <span>highly recommended</span> real estate agency!", name: "Rashed Ka", location: "Milan, Italy", image: "assets/images/media/img_24.jpg" }
  ];

  logos = [
    "assets/images/logo/p_logo_01.png", "assets/images/logo/p_logo_02.png", "assets/images/logo/p_logo_03.png", "assets/images/logo/p_logo_04.png",
    "assets/images/logo/p_logo_05.png", "assets/images/logo/p_logo_06.png", "assets/images/logo/p_logo_03.png"
  ];

  blogPosts = [
    { date: "09 FEB", author: "Rashed Ka", time: "6 min", imageUrl: "assets/images/blog/blog_img_01.jpg", title: "Spending Habits, 13 Tips for grow Your Money", link: "/blog_details" },
    { date: "12 aug", author: "Jubayer Hasan", time: "7 min", imageUrl: "assets/images/blog/blog_img_02.jpg", title: "Designer’s Checklist for Every UX/UI Project", link: "/blog_details" }
  ];

  faqItems = [
    { question: "How does the free trial work?", answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat. Duis aute in voluptate nulla pariatur.", targetId: "collapseOneA" },
    { question: "How find different criteria in your process?", answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat. Duis aute in voluptate nulla pariatur.", targetId: "collapseTwoA" },
    { question: "What do you look for in a founding team?", answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat. Duis aute in voluptate nulla pariatur.", targetId: "collapseThreeA", isExpanded: true },
    { question: "Do you recommend Pay as you go or Pre pay?", answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat. Duis aute in voluptate nulla pariatur.", targetId: "collapseFourA" }
  ];

  onSearchClick() {
    console.log('Search button clicked');
  }
}
