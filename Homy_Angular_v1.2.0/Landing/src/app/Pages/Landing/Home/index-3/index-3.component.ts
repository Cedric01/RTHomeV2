import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Lightbox, LightboxModule } from 'ngx-lightbox';
import { RouterLink } from '@angular/router';
import Swiper from 'swiper';
import { NgSelectModule } from '@ng-select/ng-select';
import AOS from 'aos';
import { Navbar3Component } from '../../../../layout/navbar-3/navbar-3.component';
import { Footer2Component } from '../../../../layout/footer-2/footer-2.component';
import { SwiperService } from '../../../../service/swiper.service';
import { SidenavComponent } from "../../../../components/sidenav/sidenav.component";

@Component({
    selector: 'app-index-3',
    imports: [Navbar3Component, Footer2Component, LightboxModule, CommonModule, RouterLink, NgSelectModule, SidenavComponent],
    templateUrl: './index-3.component.html'
})
export class Index3Component {
  albums = [
    { src: 'assets/images/listing/img_large_01.jpg', caption: 'Blueberry villa', thumb: '' },
    { src: 'assets/images/listing/img_large_02.jpg', caption: 'Blueberry villa', thumb: '' },
    { src: 'assets/images/listing/img_large_03.jpg', caption: 'Blueberry villa', thumb: '' },
    { src: 'assets/images/listing/img_large_04.jpg', caption: 'Blueberry villa', thumb: '' },
    { src: 'assets/images/listing/img_large_05.jpg', caption: 'Blueberry villa', thumb: '' },
    { src: 'assets/images/listing/img_large_06.jpg', caption: 'Blueberry villa', thumb: '' },
  ];

  properties = [
    { title: 'Blueberry villa', position: 'FOR RENT', address: 'Mirpur 10, Stadium dhaka 1208', sqft: 1780, beds: 3, baths: 2, price: 34900, link: '/listing_details_04', image: 'assets/images/listing/img_13.jpg' },
    { title: 'White House villa', position: 'FOR SELL', address: 'California link road, ca, usa', sqft: 2340, beds: 4, baths: 3, price: 28100, link: '/listing_details_04', image: 'assets/images/listing/img_14.jpg' },
    { title: 'Luxury villa in Dal lake', position: 'FOR SELL', address: 'Mirpur 10, Stadium', sqft: 1857, beds: 3, baths: 1, price: 42500, link: '/listing_details_04', image: 'assets/images/listing/img_15.jpg' },
    { title: 'South Sun House', position: 'FOR RENT', address: 'Mirpur 10, Stadium', sqft: 2340, beds: 4, baths: 3, price: 55500, link: '/listing_details_04', image: 'assets/images/listing/img_16.jpg' },
    { title: 'Blueberry villa', position: 'FOR RENT', address: 'Mirpur 10, Stadium dhaka 1208', sqft: 1780, beds: 3, baths: 2, price: 34900, link: '/listing_details_04', image: 'assets/images/listing/img_14.jpg' },
    { title: 'White House villa', position: 'FOR SELL', address: 'California link road, ca, usa', sqft: 2340, beds: 4, baths: 3, price: 28100, link: '/listing_details_04', image: 'assets/images/listing/img_15.jpg' },
    { title: 'Luxury villa in Dal lake', position: 'FOR RENT', address: 'Mirpur 10, Stadium', sqft: 1857, beds: 3, baths: 1, price: 42500, link: '/listing_details_04', image: 'assets/images/listing/img_16.jpg' },
    { title: 'South Sun House', position: 'FOR SELL', address: 'Mirpur 10, Stadium', sqft: 2340, beds: 4, baths: 3, price: 55500, link: '/listing_details_04', image: 'assets/images/listing/img_14.jpg' },
  ];

  feedbacks = [
    { name: 'Rashed Kabir', location: 'Milan, Italy', image: 'assets/images/media/img_01.jpg', message: '"Efficient and friendly service, guided us perfectly. Satisfied with our new home. Thank you!"', stars: [1, 1, 1, 1, 1], icon: 'assets/images/icon/icon_29.svg' },
    { name: 'Jannat Ferdu', location: 'London, UK', image: 'assets/images/media/img_02.jpg', message: '"Found our dream home. Great Business with them. Thank you for excellent service."', stars: [1, 1, 1, 1, 1], icon: 'assets/images/icon/icon_29.svg' },
    { name: 'Jubayer Hasan', location: 'Miami, USA', image: 'assets/images/media/img_03.jpg', message: '"Efficient and friendly service, guided us perfectly. Satisfied with our new home. Thank you!"', stars: [1, 1, 1, 1, 1], icon: 'assets/images/icon/icon_29.svg' },
    { name: 'Jubayer Hasan', location: 'Miami, USA', image: 'assets/images/media/img_02.jpg', message: '"Found our dream home. Great Business with them. Thank you for excellent service."', stars: [1, 1, 1, 1, 1], icon: 'assets/images/icon/icon_29.svg' },
  ];

  mapPins = [
    { country: 'United States', address: '32 link road, Mega Mall. California, USA', flag: 'assets/images/logo/flag_01.png' },
    { country: 'Brazil', address: '32 link road, Mega Mall. California, USA', flag: 'assets/images/logo/flag_02.png' },
    { country: 'Russia', address: '32 link road, Mega Mall. California, USA', flag: 'assets/images/logo/flag_03.png' },
  ];

  countryLists = [
    { title: 'Asia Pacific', countries: ['Australia', 'Dubai', 'India', 'Singapore', 'Hong Kong'] },
    { title: 'South America', countries: ['United States', 'Canada', 'Argentina'] },
    { title: 'European', countries: ['Germany', 'France', 'Italy', 'Netherlands', 'Switzerland', 'Spain'] },
  ];

  categories = [
    { link: '/listing_01', icon: 'assets/images/icon/icon_15.svg', label: 'Shopping Mall' },
    { link: '/listing_01', icon: 'assets/images/icon/icon_16.svg', label: 'Apartments' },
    { link: '/listing_01', icon: 'assets/images/icon/icon_17.svg', label: 'Villa' },
    { link: '/listing_01', icon: 'assets/images/icon/icon_18.svg', label: 'Industry' },
    { link: '/listing_01', icon: 'assets/images/icon/icon_19.svg', label: 'Office' },
    { link: '/listing_01', icon: 'assets/images/icon/icon_20.svg', label: 'Medical' },
    { link: '/listing_01', icon: 'assets/images/icon/icon_21.svg', label: 'House' },
    { link: '/listing_01', icon: 'assets/images/icon/icon_22.svg', label: 'Loft' },
  ];

  logoImages = [
    'assets/images/logo/p_logo_07.png', 'assets/images/logo/p_logo_08.png', 'assets/images/logo/p_logo_09.png',
    'assets/images/logo/p_logo_10.png', 'assets/images/logo/p_logo_11.png', 'assets/images/logo/p_logo_12.png',
  ];

  cards = [
    { icon: 'assets/images/icon/icon_23.svg', title: 'Buy a home', description: 'Explore homy’s 2 million+ homes...', link: '/listing_10', buttonText: 'Find Home', aosDelay: 0 },
    { icon: 'assets/images/icon/icon_24.svg', title: 'Rent a home', description: 'Discover a rental you\'ll love...', link: '/listing_10', buttonText: 'Rent Home', aosDelay: 100 },
    { icon: 'assets/images/icon/icon_25.svg', title: 'Sell property', description: 'List, sell, thrive – with our top-notch...', link: '/listing_10', buttonText: 'Sell Property', aosDelay: 200 },
  ];

  features = [
    { icon: 'assets/images/icon/icon_26.svg', title: 'Property Insurance', description: 'Elit esse cillum dolo fugiat...' },
    { icon: 'assets/images/icon/icon_27.svg', title: 'Easy Payments', description: 'Quis nostrud exerct ullamo...' },
    { icon: 'assets/images/icon/icon_28.svg', title: 'Quick Process', description: 'Duis aute irure dolor...' },
  ];

  marqueeText = 'Dubai . America . Canada .';

  options = [
    { value: '1', label: 'Buy Apartments' }, { value: '2', label: 'Rent Condos' }, { value: '3', label: 'Sell Houses' },
  ];

  location = [
    { value: '1', label: 'Dhanmondi, Dhaka' }, { value: '2', label: 'Acapulco, Mexico' }, { value: '3', label: 'Berlin, Germany' },
  ];

  range = [
    { value: '1', label: '$10,000 - $200,000' }, { value: '2', label: '$200,000 - $300,000' }, { value: '3', label: '$300,000 - $400,000' },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private lightbox: Lightbox, private swiperService: SwiperService) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) AOS.init({ duration: 800, easing: 'ease', once: true });
  }

  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.swiper-container', 1, 20, 3000, 1, 2, 3);
  }

  openLightbox(): void { this.lightbox.open(this.albums); }
  closeLightbox(): void { this.lightbox.close(); }
}
