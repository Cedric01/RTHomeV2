import { Component } from '@angular/core';
import { Navbar1Component } from "../../../../layout/navbar-1/navbar-1.component";
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-service-details',
    imports: [Navbar1Component, FancyBannerTwoComponent, Footer5Component, CommonModule, RouterLink],
    templateUrl: './service-details.component.html'
})
export class ServiceDetailsComponent {
  serviceCategories = [
    'Buy Home', 'Property & Loan', 'Sell Home', 'Consulting Service', 'Rent Home', 'Mortgage'
  ].map((name, index) => ({ name, isActive: index === 0 }));

  services = [
    { icon: 'assets/images/icon/icon_72.svg', title: 'Property Insurance', description: 'Elit esse cillum dol fu nulla tur.' },
    { icon: 'assets/images/icon/icon_73.svg', title: 'Easy Payments', description: 'Quis nostr exerct ull security.' },
    { icon: 'assets/images/icon/icon_74.svg', title: 'Quick Process', description: 'Duis aute irure do reprehe.' },
  ];
}
