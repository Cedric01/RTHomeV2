import { Component } from '@angular/core';
import { Navbar6Component } from "../../../../layout/navbar-6/navbar-6.component";
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { Lightbox, LightboxModule } from 'ngx-lightbox';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../../../service/modal.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-agency-details',
    imports: [Navbar6Component, FancyBannerTwoComponent, Footer5Component, LightboxModule, CommonModule, RouterLink],
    templateUrl: './agency-details.component.html'
})
export class AgencyDetailsComponent {
  album: Array<{ src: string; caption: string; thumb: string }> = [];

  constructor(private lightbox: Lightbox, private modalService: ModalService) {
    this.album = [
      { src: 'assets/images/listing/img_large_01.jpg', caption: 'Duplex orkit villa', thumb: 'assets/images/listing/img_48.jpg' },
      { src: 'assets/images/listing/img_large_02.jpg', caption: 'Duplex orkit villa', thumb: 'assets/images/listing/img_49.jpg' },
      { src: 'assets/images/listing/img_large_03.jpg', caption: 'Duplex orkit villa', thumb: 'assets/images/listing/img_50.jpg' },
      { src: 'assets/images/listing/img_large_04.jpg', caption: 'Duplex orkit villa', thumb: 'assets/images/listing/img_04.jpg' },
      { src: 'assets/images/listing/img_large_05.jpg', caption: 'Duplex orkit villa', thumb: 'assets/images/listing/img_05.jpg' },
      { src: 'assets/images/listing/img_large_06.jpg', caption: 'Duplex orkit villa', thumb: 'assets/images/listing/img_06.jpg' }
    ];
  }

  open(index: number): void {
    this.lightbox.open(this.album, index);
  }

  close(): void {
    this.lightbox.close();
  }
  items = [
    { type: 'rent', tag: 'FOR RENT', image: 'assets/images/listing/img_69.jpg', price: '$2,210/ m', address: '6391 Elgin St. Celina' },
    { type: 'sell', tag: 'FOR RENT', image: 'assets/images/listing/img_70.jpg', price: '$2,210/ m', address: '6391 Elgin St. Celina' },
    { type: 'sell', tag: 'FOR SELL', image: 'assets/images/listing/img_71.jpg', price: '$1,23,710', address: '6391 Elgin St. Celina' },
    { type: 'rent', tag: 'FOR SELL', image: 'assets/images/listing/img_72.jpg', price: '$78,420', address: '6391 Elgin St. Celina' },
  ];

  activeFilter = '*';

  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  isItemVisible(itemType: string): boolean {
    return this.activeFilter === '*' || this.activeFilter === itemType;
  }

  openModal() {
    this.modalService.openModal();
  }
}
