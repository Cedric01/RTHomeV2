import { Component } from '@angular/core';
import { DashboardNavbarComponent } from "../../../components/dashboard-navbar/dashboard-navbar.component";
import { Lightbox, LightboxModule } from 'ngx-lightbox';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-review',
    imports: [DashboardNavbarComponent, LightboxModule, CommonModule],
    templateUrl: './review.component.html'
})
export class ReviewComponent {
  gallery: Array<any> = [];

  constructor(private lightbox: Lightbox) {
    
    this.gallery = [
      {
        src: 'assets/images/listing/img_large_01.jpg',
        thumb: 'assets/images/listing/img_large_01.jpg',
        caption: 'Duplex orkit villa',
      },
      {
        src: 'assets/images/listing/img_large_02.jpg',
        thumb: 'assets/images/listing/img_large_02.jpg',
        caption: 'Duplex orkit villa',
      },
      {
        src: 'assets/images/listing/img_large_03.jpg',
        thumb: 'assets/images/listing/img_large_03.jpg',
        caption: 'Duplex orkit villa',
      },
      {
        src: 'assets/images/listing/img_large_04.jpg',
        thumb: 'assets/images/listing/img_large_04.jpg',
        caption: 'More Images',
      },
      {
        src: 'assets/images/listing/img_large_05.jpg',
        thumb: 'assets/images/listing/img_large_05.jpg',
        caption: 'Additional view of villa',
      },
      {
        src: 'assets/images/listing/img_large_06.jpg',
        thumb: 'assets/images/listing/img_large_06.jpg',
        caption: 'Additional view of villa',
      },
    ];
  }

  openLightbox(index: number): void {
    this.lightbox.open(this.gallery, index);
  }

  closeLightbox(): void {
    this.lightbox.close();
  }
  
}
