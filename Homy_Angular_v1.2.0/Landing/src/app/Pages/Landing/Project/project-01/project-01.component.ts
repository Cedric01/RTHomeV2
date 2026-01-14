import { Component } from '@angular/core';
import { Navbar7Component } from "../../../../layout/navbar-7/navbar-7.component";
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-project-01',
    imports: [Navbar7Component, FancyBannerTwoComponent, Footer5Component, CommonModule, RouterLink],
    templateUrl: './project-01.component.html'
})
export class Project01Component {
  currentFilter: string = '*';

  categories = [
    { label: 'All', value: '*' },
    { label: 'Apartments', value: 'apartments' },
    { label: 'House', value: 'house' },
    { label: 'Villa', value: 'villa' },
    { label: 'Flat', value: 'flat' },
  ];

  items = [
    { type: 'house flat', tag: 'VILLA', img: 'assets/images/project/img_16.jpg', caption: 'Blue Duplex Villa', date: '13 Sep, 22' },
    { type: 'villa', tag: 'FLAT', img: 'assets/images/project/img_17.jpg', caption: '1320sft Modern Flat', date: '13 Sep, 22' },
    { type: 'apartments', tag: 'APARTMENTS', img: 'assets/images/project/img_18.jpg', caption: 'Galaxy Sky Touch', date: '13 Sep, 22' },
    { type: 'villa', tag: 'HOUSE', img: 'assets/images/project/img_19.jpg', caption: 'Apartments Vintage City', date: '13 Sep, 22' },
    { type: 'house', tag: 'FLAT', img: 'assets/images/project/img_20.jpg', caption: '2-Stored House', date: '13 Sep, 22' },
    { type: 'apartments flat', tag: 'VILLA', img: 'assets/images/project/img_21.jpg', caption: 'Swimming Pool Villa', date: '13 Sep, 22' },
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
}
