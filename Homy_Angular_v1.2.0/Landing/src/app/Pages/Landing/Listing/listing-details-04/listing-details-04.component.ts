import AOS from 'aos';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Navbar6Component } from "../../../../layout/navbar-6/navbar-6.component";
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { PropertyFeaturesComponent } from "../../../../components/property-features/property-features.component";
import { AmenitiesComponent } from "../../../../components/amenities/amenities.component";
import { RouterLink } from '@angular/router';
import { SwiperService } from '../../../../service/swiper.service';
import { isPlatformBrowser } from '@angular/common';
declare const Fancybox: any;

@Component({
    selector: 'app-listing-details-04',
    imports: [Navbar6Component, FancyBannerTwoComponent, Footer5Component, PropertyFeaturesComponent, AmenitiesComponent, RouterLink],
    templateUrl: './listing-details-04.component.html'
})
export class ListingDetails04Component {
  constructor(private swiperService: SwiperService, @Inject(PLATFORM_ID) private platformId: Object,) { }

  ngOnInit() {
    AmenitiesComponent
    if (isPlatformBrowser(this.platformId)) AOS.init({ duration: 800, easing: 'ease', once: true, mirror: false });
  }
  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.swiper-container', 1, 20, 3000, 1, 1, 1);
    Fancybox.bind('[data-fancybox]');
  }
}
