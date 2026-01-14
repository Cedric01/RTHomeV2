import AOS from 'aos';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import Swiper from 'swiper';
import { SwiperService } from '../../service/swiper.service';

@Component({
    selector: 'app-block-feature-three',
    imports: [CommonModule, RouterModule, RouterLink],
    templateUrl: './block-feature-three.component.html'
})
export class BLockFeatureThreeComponent {
  constructor(private swiperService: SwiperService, @Inject(PLATFORM_ID) private platformId: Object) { }
  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.swiper-container', 1, 20, 3000, 3, 6, 1);
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) AOS.init({ duration: 800, easing: 'ease', once: true, mirror: false });
  }

  locations = [
    { name: 'Kelowna', properties: '1,230 Properties', imageUrl: 'assets/images/media/img_05.jpg' },
    { name: 'California', properties: '1,190 Properties', imageUrl: 'assets/images/media/img_06.jpg' },
    { name: 'New York', properties: '1,710 Properties', imageUrl: 'assets/images/media/img_07.jpg' },
    { name: 'Miami', properties: '670 Properties', imageUrl: 'assets/images/media/img_08.jpg' },
    { name: 'Dhaka', properties: '1,670 Properties', imageUrl: 'assets/images/media/img_09.jpg' }
  ];
}
