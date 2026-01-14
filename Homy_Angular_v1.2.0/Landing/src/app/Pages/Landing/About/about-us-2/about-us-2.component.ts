import AOS from 'aos';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Navbar3Component } from "../../../../layout/navbar-3/navbar-3.component";
import { SidenavComponent } from "../../../../components/sidenav/sidenav.component";
import { FeedbackSectionSevenComponent } from "../../../../components/feedback-section-seven/feedback-section-seven.component";
import { Footer2Component } from "../../../../layout/footer-2/footer-2.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SwiperService } from '../../../../service/swiper.service';

@Component({
    selector: 'app-about-us-2',
    imports: [Navbar3Component, SidenavComponent, FeedbackSectionSevenComponent, Footer2Component, CommonModule, RouterLink],
    templateUrl: './about-us-2.component.html'
})
export class AboutUs2Component {
  accordionItems = [
    { id: 'OneA', title: 'Who we are?', content: 'Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering.' },
    { id: 'TwoA', title: 'What’s our goal', content: 'Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering.' },
    { id: 'ThreeA', title: 'Our vision', content: 'Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering.' }
  ];
  logoImages = [
    'assets/images/logo/p_logo_07.png', 'assets/images/logo/p_logo_08.png', 'assets/images/logo/p_logo_09.png',
    'assets/images/logo/p_logo_10.png', 'assets/images/logo/p_logo_11.png', 'assets/images/logo/p_logo_12.png'
  ];
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private swiperService: SwiperService) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) AOS.init({ duration: 800, easing: 'ease', once: true, mirror: false });
  }
  ngAfterViewInit(): void {
    this.swiperService.initSwiper('#carousel1', 1, 20, 3000, 3, 6, 5);
  }
}
