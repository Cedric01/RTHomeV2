import AOS from 'aos';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject, Input, PLATFORM_ID } from '@angular/core';
import { Navbar7Component } from "../../../../layout/navbar-7/navbar-7.component";
import { FancyBannerOneComponent } from "../../../../components/fancy-banner-one/fancy-banner-one.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { SwiperService } from '../../../../service/swiper.service';
import { GoogleMapsModule } from '@angular/google-maps';
import { RouterLink } from '@angular/router';
import { AdvanceFilterModalComponent } from "../../../../components/advance-filter-modal/advance-filter-modal.component";
declare const Fancybox: any;

interface MarkerProperties {
  position: {
    lat: number;
    lng: number;
  };
}
@Component({
    selector: 'app-index-7',
    imports: [Navbar7Component, FancyBannerOneComponent, Footer5Component, CommonModule, NgSelectModule, GoogleMapsModule, RouterLink, AdvanceFilterModalComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './index-7.component.html'
})
export class Index7Component {
  longitude = -77.028333;
  latitude = -12.043333;
  zoom: number = 9;

  @Input() pitch: number = 10;
  @Input() scrollwheel: boolean = false;
  center: any;

  mapOptions: google.maps.MapOptions = {
    center: { lat: 48.8588548, lng: 2.347035 },
    zoom: 13,
  };

  markers: MarkerProperties[] = [
    { position: { lat: 48.8584, lng: 2.2945 } },
    { position: { lat: 48.8606, lng: 2.3376 } },
    { position: { lat: 48.853, lng: 2.3499 } },
  ];

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

  cardList = [
    { icon: 'assets/images/icon/icon_01.svg', title: 'Buy a home', description: "Explore homy’s 2 million+ homes and uncover your ideal living space.", delay: '0s' },
    { icon: 'assets/images/icon/icon_02.svg', title: 'Rent a home', description: "Discover a rental you'll love on homy, thanks to 35+ filters and tailored keywords.", delay: '0.1s' },
    { icon: 'assets/images/icon/icon_03.svg', title: 'Sell property', description: "List, sell, thrive – with our top-notch real estate agency. It’s super easy & fun.", delay: '0.2s' }
  ];

  cities = [
    { imageUrl: 'assets/images/media/img_05.jpg', name: 'Kelowna', properties: 1230 },
    { imageUrl: 'assets/images/media/img_06.jpg', name: 'California', properties: 1190 },
    { imageUrl: 'assets/images/media/img_07.jpg', name: 'New York', properties: 1710 },
    { imageUrl: 'assets/images/media/img_08.jpg', name: 'Miami', properties: 670 },
    { imageUrl: 'assets/images/media/img_09.jpg', name: 'Dhaka', properties: 1670 },
  ];

  listings = [
    {
      status: 'FOR RENT',
      imageUrl: 'assets/images/listing/img_13.jpg',
      title: 'Blueberry villa.',
      address: 'Mirpur 10, Stadium dhaka 1208',
      sqft: 1780,
      beds: 3,
      baths: 2,
      price: 34900,
      imageGallery: [
        'assets/images/listing/img_large_01.jpg',
        'assets/images/listing/img_large_02.jpg',
        'assets/images/listing/img_large_03.jpg',
      ]
    },
    {
      status: 'FOR SELL',
      imageUrl: 'assets/images/listing/img_14.jpg',
      title: 'White House villa',
      address: 'California link road, ca, usa',
      sqft: 2340,
      beds: 4,
      baths: 3,
      price: 28100,
      imageGallery: [
        'assets/images/listing/img_large_04.jpg',
        'assets/images/listing/img_large_05.jpg',
        'assets/images/listing/img_large_06.jpg',
      ]
    },
    {
      status: 'FOR SELL',
      imageUrl: 'assets/images/listing/img_15.jpg',
      title: 'Luxury villa in Dal lake.',
      address: 'Mirpur 10, Stadium',
      sqft: 1857,
      beds: 3,
      baths: 1,
      price: 42500,
      imageGallery: [
        'assets/images/listing/img_large_01.jpg',
        'assets/images/listing/img_large_02.jpg',
        'assets/images/listing/img_large_03.jpg',
        'assets/images/listing/img_large_04.jpg',
      ]
    },
    {
      status: 'FOR SELL',
      imageUrl: 'assets/images/listing/img_16.jpg',
      title: 'South Sun House',
      address: 'Mirpur 10, Stadium',
      sqft: 2450,
      beds: 4,
      baths: 3,
      price: 55500,
      imageGallery: [
        'assets/images/listing/img_large_04.jpg',
        'assets/images/listing/img_large_06.jpg',
        'assets/images/listing/img_large_03.jpg',
        'assets/images/listing/img_large_02.jpg',
      ]
    },
    {
      status: 'FOR SELL',
      imageUrl: 'assets/images/listing/img_14.jpg',
      title: 'White House villa',
      address: 'California link road, ca, usa',
      sqft: 2340,
      beds: 4,
      baths: 3,
      price: 28100,
      imageGallery: [
        'assets/images/listing/img_large_04.jpg',
        'assets/images/listing/img_large_05.jpg',
        'assets/images/listing/img_large_06.jpg',
      ]
    },
  ];

  feedbackList = [
    {
      name: 'Rashed Kabir',
      location: 'Milan, Italy',
      feedback: 'Efficient and friendly service, guided us perfectly. Satisfied with our new home. Thank you!',
      imageUrl: 'assets/images/media/img_01.jpg',
      rating: 5
    },
    {
      name: 'Jannat Ferdu',
      location: 'London, UK',
      feedback: 'Found our dream home. Great Business with them. Thank you for excellent service.',
      imageUrl: 'assets/images/media/img_02.jpg',
      rating: 5
    },
    {
      name: 'Jubayer Hasan',
      location: 'Miami, USA',
      feedback: 'Efficient and friendly service, guided us perfectly. Satisfied with our new home. Thank you!',
      imageUrl: 'assets/images/media/img_03.jpg',
      rating: 5
    },
    {
      name: 'Jannat Ferdu',
      location: 'London, UK',
      feedback: 'Found our dream home. Great Business with them. Thank you for excellent service.',
      imageUrl: 'assets/images/media/img_02.jpg',
      rating: 5
    }, {
      name: 'Jannat Ferdu',
      location: 'London, UK',
      feedback: 'Found our dream home. Great Business with them. Thank you for excellent service.',
      imageUrl: 'assets/images/media/img_02.jpg',
      rating: 5
    },
    {
      name: 'Jubayer Hasan',
      location: 'Miami, USA',
      feedback: 'Efficient and friendly service, guided us perfectly. Satisfied with our new home. Thank you!',
      imageUrl: 'assets/images/media/img_03.jpg',
      rating: 5
    },
  ];
  blogPosts = [
    {
      date: '09 FEB',
      imageUrl: 'assets/images/blog/blog_img_01.jpg',
      author: 'Rashed Ka',
      timeToRead: '6 min',
      title: 'Spending Habits, 13 Tips for Grow Your Money.',
      link: '/blog_details'
    },
    {
      date: '12 AUG',
      imageUrl: 'assets/images/blog/blog_img_02.jpg',
      author: 'Jubayer Hasan',
      timeToRead: '7 min',
      title: 'Designer’s Checklist for Every UX/UI Project.',
      link: '/blog_details'
    }
  ];
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private swiperService: SwiperService) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) AOS.init({ duration: 800, easing: 'ease', once: true, mirror: false });
  }
  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.swiper-container', 1, 20, 3000, 1, 2, 4);
    Fancybox.bind('[data-fancybox]');
  }

}
