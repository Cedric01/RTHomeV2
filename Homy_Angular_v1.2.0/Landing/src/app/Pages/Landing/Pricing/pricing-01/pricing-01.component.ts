import AOS from 'aos';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Navbar7Component } from "../../../../layout/navbar-7/navbar-7.component";
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-pricing-01',
    imports: [Navbar7Component, FancyBannerTwoComponent, Footer5Component, CommonModule, RouterLink],
    templateUrl: './pricing-01.component.html'
})
export class Pricing01Component {
  plansMonthly = [
    {
      name: 'FREE PLAN',
      price: '0',
      description: 'Great for Individual Person',
      buttonLabel: 'Active',
      availableFeatures: [false, false, false, true, true, true]
    },
    {
      name: 'Gold Plan',
      price: '$89',
      description: 'Great for Startup',
      buttonLabel: 'Get Started',
      availableFeatures: [false, false, true, true, true, true]
    },
    {
      name: 'Business Plan',
      price: '$147',
      description: 'Great for Large Business',
      buttonLabel: 'Get Started',
      availableFeatures: [true, true, true, true, true, true]
    }
  ];
  plansYearly = [
    {
      name: 'FREE PLAN',
      price: '0',
      description: 'Great for Individual Person',
      buttonLabel: 'Active',
      availableFeatures: [false, false, false, true, true, true]
    },
    {
      name: 'Gold Plan',
      price: '$189',
      description: 'Great for Startup',
      buttonLabel: 'Get Started',
      availableFeatures: [false, false, true, true, true, true]
    },
    {
      name: 'Business Plan',
      price: '$347',
      description: 'Great for Large Business',
      buttonLabel: 'Get Started',
      availableFeatures: [true, true, true, true, true, true]
    }
  ];
  features = [
    'All Operating Supported',
    'Multiple User',
    'Refund',
    '12 months duration',
    'Live Chat',
    'Send invite via Link'
  ];
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) AOS.init({ duration: 800, easing: 'ease', once: true, mirror: false });
  }
}
