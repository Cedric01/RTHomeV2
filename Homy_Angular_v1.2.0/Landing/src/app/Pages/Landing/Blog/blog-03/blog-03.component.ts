import { Component } from '@angular/core';
import { Navbar7Component } from "../../../../layout/navbar-7/navbar-7.component";
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog-03',
    imports: [Navbar7Component, FancyBannerTwoComponent, Footer5Component, CommonModule, RouterLink],
    templateUrl: './blog-03.component.html'
})
export class Blog03Component {
  currentFilter: string = '*';

  categories = [
    { label: 'All', value: '*' },
    { label: 'Apartments', value: 'apartments' },
    { label: 'House', value: 'house' },
    { label: 'Villa', value: 'villa' },
    { label: 'Flat', value: 'flat' },
  ];

  items = [
    { type: 'house flat', tag: 'VILLA', img: 'assets/images/blog/blog_img_01.jpg', name: 'Rashed Ka .', date: '09 FEB', min: '6 min', dec: 'Spending Habits, 13 Tips for grow Your Money.' },
    { type: 'villa', tag: 'FLAT', img: 'assets/images/blog/blog_img_02.jpg', name: 'Jubayer Hasan .', date: '12 aug', min: '7 min', dec: 'Designer’s Checklist for Every UX/UI Project.' },
    { type: 'apartments', tag: 'APARTMENTS', img: 'assets/images/blog/blog_img_13.jpg', name: 'Rashed Kabir .', date: '07 FEB', min: '8 min', dec: 'In a laoreet purus. Integer turpis quam, laoreet' },
    { type: 'villa', tag: 'HOUSE', img: 'assets/images/blog/blog_img_12.jpg', name: 'Jannatul Ferdaus .', date: '12 aug', min: '19 min', dec: 'Print, publishing qui visual ux layout mockups.' },
    { type: 'house', tag: 'FLAT', img: 'assets/images/blog/blog_img_14.jpg', name: 'Rashed Ka .', date: '09 FEB', min: '13 min', dec: 'Spending Habits, 13 Tips for grow Your Money.' },
    { type: 'apartments flat', tag: 'VILLA', img: 'assets/images/blog/blog_img_15.jpg', name: 'Jubayer Hasan .F', date: '12 aug', min: '10 min', dec: 'Designer’s Checklist for Every UX/UI Project.' },
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
