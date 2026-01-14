import { Component } from '@angular/core';
import { Navbar6Component } from "../../../../layout/navbar-6/navbar-6.component";
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ModalService } from '../../../../service/modal.service';

@Component({
    selector: 'app-blog-details',
    imports: [Navbar6Component, FancyBannerTwoComponent, Footer5Component, CommonModule, RouterLink],
    templateUrl: './blog-details.component.html'
})
export class BlogDetailsComponent {
  categories = [
    { name: 'Digital', count: 3 },
    { name: 'Marketing', count: 4 },
    { name: 'Design', count: 2 },
    { name: 'WordPress', count: 8 },
    { name: 'Plugin', count: 5 },
    { name: 'Developer', count: 3 },
    { name: 'Account', count: 7 }
  ];
  recentNews = [
    {
      image: 'assets/images/blog/blog_img_08.jpg',
      title: '10 days quick challenge for boost visitors.',
      date: '23 July, 2022',
      link: '/blog_details'
    },
    {
      image: 'assets/images/blog/blog_img_09.jpg',
      title: 'Speaking remotely at WordCamp US.',
      date: '23 July, 2022',
      link: '/blog_details'
    },
    {
      image: 'assets/images/blog/blog_img_10.jpg',
      title: 'Monthly Roundup event December 2022.',
      date: '23 July, 2022',
      link: '/blog_details'
    }
  ];

  keywords = ['Ideas', 'Education', 'Design', 'Development', 'Branding'];
  
  constructor(private modalService: ModalService) { }

  openModal() {
    this.modalService.openModal();
  }
}
