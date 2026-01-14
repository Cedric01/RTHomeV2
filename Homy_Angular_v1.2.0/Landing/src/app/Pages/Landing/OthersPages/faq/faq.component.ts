import AOS from 'aos';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { Navbar1Component } from "../../../../layout/navbar-1/navbar-1.component";
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-faq',
    imports: [Navbar1Component, FancyBannerTwoComponent, Footer5Component, CommonModule, RouterLink],
    templateUrl: './faq.component.html'
})
export class FaqComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) AOS.init({ duration: 800, easing: 'ease', once: true, mirror: false });
  }
  @ViewChild('Selling') sellingElement!: ElementRef;
  @ViewChild('Renting') rentingElement!: ElementRef;
  @ViewChild('Buying') buyingElement!: ElementRef;
  @ViewChild('Payments') paymentsElement!: ElementRef;
  @ViewChild('Terms') termsElement!: ElementRef;
  @ViewChild('Account') accountElement!: ElementRef;

  scrollToSection(section: string) {
    const sectionMap: any = {
      Selling: this.sellingElement,
      Renting: this.rentingElement,
      Buying: this.buyingElement,
      Payments: this.paymentsElement,
      Terms: this.termsElement,
      Account: this.accountElement
    };

    if (sectionMap[section]) {
      sectionMap[section].nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
