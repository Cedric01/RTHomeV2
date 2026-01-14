import { Component } from '@angular/core';
import { Navbar6Component } from "../../../../layout/navbar-6/navbar-6.component";
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; 
declare const Fancybox: any;

@Component({
    selector: 'app-project-04',
    imports: [Navbar6Component, FancyBannerTwoComponent, Footer5Component, CommonModule, RouterLink],
    templateUrl: './project-04.component.html'
})
export class Project04Component {
  currentFilter: string = '*';

  categories = [
    { label: 'All', value: '*' },
    { label: 'Apartments', value: 'apartments' },
    { label: 'House', value: 'house' },
    { label: 'Villa', value: 'villa' },
    { label: 'Flat', value: 'flat' },
  ];

  items = [
    { type: 'house flat', tag: 'VILLA', img: 'assets/images/project/img_16.jpg', caption: 'Apartments on Vintage City.', temp: 'Your leading real estate advocate, transforming houses into dreams. Trust' },
    { type: 'villa', tag: 'FLAT', img: 'assets/images/project/img_17.jpg', caption: 'Galaxy Touch Sky Villa.', temp: 'Your leading real estate advocate, transforming houses into dreams. Trust' },
    { type: 'apartments', tag: 'APARTMENTS', img: 'assets/images/project/img_18.jpg', caption: '2370sft Modern Apartments.', temp: 'Your leading real estate advocate, transforming houses into dreams. Trust' },
    { type: 'villa', tag: 'HOUSE', img: 'assets/images/project/img_19.jpg', caption: '2 Store Tiny Duplex House.', temp: 'Your leading real estate advocate, transforming houses into dreams. Trust' },
    { type: 'house', tag: 'FLAT', img: 'assets/images/project/img_20.jpg', caption: 'Swimming Pool Duplex Villa.', temp: 'Your leading real estate advocate, transforming houses into dreams. Trust' },
  ];

  filteredItems = [...this.items];

  applyFilter(filter: string) {
    this.currentFilter = filter;

    if (filter === '*') {
      this.filteredItems = [...this.items];
    } else {
      this.filteredItems = this.items.filter(item => item.type.includes(filter));
    }
  }
  ngAfterViewInit() { Fancybox.bind('[data-fancybox]'); }
}
