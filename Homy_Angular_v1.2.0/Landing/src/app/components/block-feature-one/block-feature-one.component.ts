import AOS from 'aos';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
    selector: 'app-block-feature-one',
    imports: [CommonModule],
    templateUrl: './block-feature-one.component.html'
})
export class BLockFeatureOneComponent {
  features = [
    {
      title: 'Buy a home',
      description: "Explore homy’s 2 million+ homes and uncover your ideal living space.",
      icon: 'assets/images/icon/icon_01.svg',
      delay: ''
    },
    {
      title: 'Rent a home',
      description: "Discover a rental you'll love on homy, thanks to 35+ filters and tailored keywords.",
      icon: 'assets/images/icon/icon_02.svg',
      delay: '0.1s'
    },
    {
      title: 'Sell property',
      description: "List, sell, thrive – with our top-notch real estate agency. It’s super easy & fun.",
      icon: 'assets/images/icon/icon_03.svg',
      delay: '0.2s'
    }
  ];
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) AOS.init({ duration: 800, easing: 'ease', once: true, mirror: false });
  }
}
