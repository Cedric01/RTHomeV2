import AOS from 'aos';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterLink } from '@angular/router';
import { LoginModalComponent } from '../../../../components/login-modal/login-modal.component';
import { Navbar4Component } from '../../../../layout/navbar-4/navbar-4.component';
import { Footer4Component } from '../../../../layout/footer-4/footer-4.component';
import { SwiperService } from '../../../../service/swiper.service';

@Component({
    selector: 'app-index-4',
    imports: [LoginModalComponent, Navbar4Component, Footer4Component, NgSelectModule, CommonModule, RouterLink],
    templateUrl: './index-4.component.html'
})
export class Index4Component {
  options = [{ value: '1', label: 'Buy Apartments' }, { value: '2', label: 'Rent Condos' }, { value: '3', label: 'Sell Houses' }, { value: '4', label: 'Rent Industrial' }, { value: '6', label: 'Sell Villas' }];
  location = [{ value: '1', label: 'Dhanmondi, Dhaka' }, { value: '2', label: 'Acapulco, Mexico' }, { value: '3', label: 'Berlin, Germany' }, { value: '4', label: 'Cannes, France' }, { value: '6', label: 'Delhi, India' }, { value: '6', label: 'Giza, Egypt' }, { value: '6', label: 'Havana, Cuba' }];
  range = [{ value: '1', label: '$10,000 - $200,000' }, { value: '2', label: '$200,000 - $300,000' }, { value: '3', label: '$300,000 - $400,000' }];
  renthome = [{ value: '1', label: 'Rent Apartments' }, { value: '2', label: 'Rent Condos' }, { value: '3', label: 'Rent Houses' }, { value: '4', label: 'Rent Industrial' }, { value: '5', label: 'Rent Villas' }];
  sellhome = [{ value: '1', label: 'Sell Apartments' }, { value: '2', label: 'Sell Condos' }, { value: '3', label: 'Sell Houses' }, { value: '4', label: 'Sell Industrial' }, { value: '5', label: 'Sell Villas' }];
  rentLocation = [
    { value: '1', label: 'Acapulco, Mexico' }, { value: '2', label: 'Dhanmondi, Dhaka' }, { value: '3', label: 'Berlin, Germany' },
    { value: '4', label: 'Cannes, France' }, { value: '5', label: 'Delhi, India' }, { value: '6', label: 'Giza, Egypt' }, { value: '7', label: 'Havana, Cuba' }
  ];

  sellLocation = [
    { value: '1', label: 'Acapulco, Mexico' }, { value: '2', label: 'Dhanmondi, Dhaka' }, { value: '3', label: 'Berlin, Germany' },
    { value: '4', label: 'Cannes, France' }, { value: '5', label: 'Delhi, India' }, { value: '6', label: 'Giza, Egypt' }, { value: '7', label: 'Havana, Cuba' }
  ];

  rentPrice = [
    { value: '1', label: '$10,000 - $200,000' }, { value: '2', label: '$200,000 - $300,000' }, { value: '3', label: '$300,000 - $400,000' }
  ];

  sellPrice = [
    { value: '1', label: '$10,000 - $200,000' }, { value: '2', label: '$200,000 - $300,000' }, { value: '3', label: '$300,000 - $400,000' }
  ];

  properties = [
    { imageUrl: 'assets/images/listing/img_20.jpg', type: 'RENT', title: 'Blueberry villa.', address: 'Mirpur 10, Stadium Dhaka', sqft: 2137, bed: 3, kitchen: 1, bath: 2, delay: 0 },
    { imageUrl: 'assets/images/listing/img_21.jpg', type: 'SELL', title: 'Swimming Pool Villa', address: '127 Green Road, California, USA', sqft: 2137, bed: 3, kitchen: 1, bath: 2, delay: 100 },
    { imageUrl: 'assets/images/listing/img_22.jpg', type: 'RENT', title: 'Modern Duplex', address: 'Twin Tower, 32 Street, Florida', sqft: 2137, bed: 3, kitchen: 1, bath: 2, delay: 200 }
  ];
  cards = [
    { icon: 'assets/images/icon/icon_35.svg', title: 'Buy a home', description: 'Explore homy’s 2 million+ homes.', buttonText: 'Buy Home', routerLink: '/listing_03', delay: 0 },
    { icon: 'assets/images/icon/icon_36.svg', title: 'Rent a home', description: 'Discover a rental you\'ll love.', buttonText: 'Rent Home', routerLink: '/listing_03', delay: 100 },
    { icon: 'assets/images/icon/icon_37.svg', title: 'Sell Home', description: 'List, sell, thrive – with our top-notch agency.', buttonText: 'Sell Home', routerLink: '/listing_03', delay: 200 }
  ];
  cardslist = [
    { image: 'assets/images/media/img_38.jpg', title: 'Apartments', delay: 0, link: '/listing_03' },
    { image: 'assets/images/media/img_39.jpg', title: 'House', delay: 100, link: '/listing_03' },
    { image: 'assets/images/media/img_40.jpg', title: 'Lofts', delay: 200, link: '/listing_03' },
    { image: 'assets/images/media/img_41.jpg', title: 'Villa', delay: 300, link: '/listing_03' }
  ];
  blogs = [
    { image: 'assets/images/blog/blog_img_03.jpg', date: '08 JAN', title: 'Print, publishing UX layout mockups.', author: 'Mark Quins', readTime: '7 min', link: '/blog_details' },
    { image: 'assets/images/blog/blog_img_01.jpg', date: '17 AUG', title: 'Designer’s Checklist for Every UX/UI Project.', author: 'Rashed Kabir', readTime: '7 min', link: '/blog_details' },
    { image: 'assets/images/blog/blog_img_04.jpg', date: '21 SEP', title: 'Spending Habits: 13 Tips for Your Money.', author: 'Jubayer Hasan', readTime: '8 min', link: '/blog_details' }
  ];
  logos = [
    'assets/images/logo/p_logo_07.png', 'assets/images/logo/p_logo_08.png', 'assets/images/logo/p_logo_09.png',
    'assets/images/logo/p_logo_10.png', 'assets/images/logo/p_logo_11.png', 'assets/images/logo/p_logo_12.png', 'assets/images/logo/p_logo_09.png'
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private swiperService: SwiperService) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) AOS.init({ duration: 800, easing: 'ease', once: true });
  }

  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.swiper-container', 1, 20, 3000, 2, 3, 1);
    this.swiperService.initSwiper('#partnerSlider', 1, 20, 3000, 2, 3, 5);
  }
  propertiesswiper = [
    {
      id: 1,
      type: 'FOR RENT',
      title: 'Blueberry villa',
      address: 'Mirpur 10, Stadium Dhaka 1208',
      sqft: 1370,
      bed: 3,
      bath: 2,
      price: 34900,
      images: ['assets/images/listing/img_17.jpg', 'assets/images/listing/img_18.jpg', 'assets/images/listing/img_19.jpg'],
      routeLink: '/listing_details_03'
    },
    {
      id: 2,
      type: 'FOR SELL',
      title: 'White House villa',
      address: 'Muza link road, CA, USA',
      sqft: 1270,
      bed: 2,
      bath: 2,
      price: 28100,
      images: ['assets/images/listing/img_18.jpg', 'assets/images/listing/img_19.jpg', 'assets/images/listing/img_17.jpg'],
      routeLink: '/listing_details_03'
    },
    {
      id: 3,
      type: 'FOR SELL',
      title: 'Luxury villa in Dal lake.',
      address: 'Mirpur 10, Stadium',
      sqft: 1270,
      bed: 2,
      bath: 2,
      price: 42500,
      images: ['assets/images/listing/img_19.jpg', 'assets/images/listing/img_18.jpg', 'assets/images/listing/img_17.jpg'],
      routeLink: '/listing_details_03'
    }
  ];
}
