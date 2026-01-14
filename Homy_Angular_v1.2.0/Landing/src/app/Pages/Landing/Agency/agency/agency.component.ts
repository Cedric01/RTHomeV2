import AOS from 'aos';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Navbar6Component } from "../../../../layout/navbar-6/navbar-6.component";
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-agency',
    imports: [Navbar6Component, FancyBannerTwoComponent, Footer5Component, NgSelectModule, CommonModule, RouterLink],
    templateUrl: './agency.component.html'
})
export class AgencyComponent {
  categories = [
    { value: '1', label: 'Apartments' }, { value: '2', label: 'Condos' },
    { value: '3', label: 'Houses' }, { value: '4', label: 'Industrial' },
    { value: '6', label: 'Villas' }
  ];

  location = [
    { value: '1', label: 'Dhanmondi, Dhaka' }, { value: '2', label: 'Acapulco, Mexico' },
    { value: '3', label: 'Berlin, Germany' }, { value: '4', label: 'Cannes, France' },
    { value: '6', label: 'Delhi, India' }, { value: '7', label: 'Giza, Egypt' },
    { value: '8', label: 'Havana, Cuba' }
  ];

  options = [
    { value: '1', label: 'Popular' }, { value: '2', label: 'Best Seller' },
    { value: '3', label: 'Price Low' }, { value: '4', label: 'Price High' }
  ];

  agencies = [
    { name: 'American Inc', listingCount: 27, logo: 'assets/images/logo/p_logo_13.png', address: '4517 Washington Ave. Manchester, Kentucky 39495' },
    { name: 'Amazon Build', listingCount: 31, logo: 'assets/images/logo/p_logo_14.png', address: '2118 Thornridge Cir. Syracuse, Connecticut 35624' },
    { name: 'Circle Kilo', listingCount: 22, logo: 'assets/images/logo/p_logo_15.png', address: '4140 Parker Rd. Allentown, New Mexico 31134' },
    { name: 'Payoneer State', listingCount: 12, logo: 'assets/images/logo/p_logo_16.png', address: '2715 Ash Dr. San Jose, South Dakota 83475' },
    { name: 'MegaZone', listingCount: 36, logo: 'assets/images/logo/p_logo_17.png', address: '8502 Preston Rd. Inglewood, Maine 98380' },
    { name: 'Muri Retailers Inc', listingCount: 16, logo: 'assets/images/logo/p_logo_18.png', address: '2118 Thornridge Cir. Syracuse, Connecticut 35624' },
    { name: 'Modernizer', listingCount: 26, logo: 'assets/images/logo/p_logo_19.png', address: '4517 Washington Ave. Manchester, Kentucky 39495' },
    { name: 'American Inc', listingCount: 19, logo: 'assets/images/logo/p_logo_20.png', address: '2972 Westheimer Rd. Santa Ana, Illinois 85486' },
    { name: 'SolidBuilders', listingCount: 19, logo: 'assets/images/logo/p_logo_21.png', address: '3891 Ranchview Dr. Richardson, California 62639' }
  ].map(agency => ({ ...agency, rating: 5, detailsUrl: 'agency_details.html' }));

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({ duration: 800, easing: 'ease', once: true, mirror: false });
    }
  }
}
