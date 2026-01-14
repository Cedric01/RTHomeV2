import AOS from 'aos';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { SwiperService } from '../../service/swiper.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-feedback-section-seven',
    imports: [],
    templateUrl: './feedback-section-seven.component.html'
})
export class FeedbackSectionSevenComponent {
  constructor(private swiperService: SwiperService, @Inject(PLATFORM_ID) private platformId: Object) { }
  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.swiper-container', 1, 20, 3000, 3, 6, 1);
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) AOS.init({ duration: 800, easing: 'ease', once: true, mirror: false });
  }
}
