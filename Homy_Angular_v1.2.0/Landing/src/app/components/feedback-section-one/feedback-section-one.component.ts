import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle'

@Component({
    selector: 'app-feedback-section-one',
    imports: [],
    templateUrl: './feedback-section-one.component.html'
})
export class FeedbackSectionOneComponent {

  @ViewChild('skillsCarousel') skillsCarousel!: ElementRef;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  ngAfterViewInit(): void {
    new Swiper(this.skillsCarousel.nativeElement, {
      slidesPerView: 1,
      spaceBetween: 30,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        375: {
          slidesPerView: 1.5,
          spaceBetween: 20
        },
        557: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 20
        },
      }
    });

  }
  ngOnInit() {
    register();
  }
}
