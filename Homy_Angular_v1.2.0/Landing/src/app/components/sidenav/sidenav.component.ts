import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
declare const Fancybox: any;

@Component({
    selector: 'app-sidenav',
    imports: [RouterLink, CommonModule],
    templateUrl: './sidenav.component.html'
})
export class SidenavComponent {
  listings = [
    {
      tag: 'FOR RENT',
      imgUrl: 'assets/images/listing/img_69.jpg',
      price: '$2,210',
      address: '6391 Elgin St. Celina',
      images: [
        'assets/images/listing/img_large_01.jpg',
        'assets/images/listing/img_large_02.jpg',
        'assets/images/listing/img_large_03.jpg',
      ]
    },
    {
      tag: 'FOR RENT',
      imgUrl: 'assets/images/listing/img_70.jpg',
      price: '$2,210',
      address: '6391 Elgin St. Celina',
      images: [
        'assets/images/listing/img_large_01.jpg',
        'assets/images/listing/img_large_02.jpg',
        'assets/images/listing/img_large_03.jpg',
      ]
    },
    {
      tag: 'FOR SELL',
      imgUrl: 'assets/images/listing/img_71.jpg',
      price: '$1,23,710',
      address: '6391 Elgin St. Celina',
      images: [
        'assets/images/listing/img_large_01.jpg',
        'assets/images/listing/img_large_02.jpg',
        'assets/images/listing/img_large_03.jpg',
      ]
    },
    {
      tag: 'FOR SELL',
      imgUrl: 'assets/images/listing/img_72.jpg',
      price: '$78,420',
      address: '6391 Elgin St. Celina',
      images: [
        'assets/images/listing/img_large_01.jpg',
        'assets/images/listing/img_large_02.jpg',
        'assets/images/listing/img_large_03.jpg',
      ]
    }
  ];
  ngAfterViewInit() { Fancybox.bind('[data-fancybox]'); }
}
