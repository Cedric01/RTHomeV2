import AOS from 'aos';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
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

  // Real locations + live property counts, computed by the parent (IndexComponent)
  // from data it already fetches. No location-image field exists in the API, so
  // the parent cycles through a small set of stock photos for imageUrl.
  @Input() locations: { name: string; properties: string; imageUrl: string }[] = [];
}
