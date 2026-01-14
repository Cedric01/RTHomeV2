import AOS from 'aos';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Navbar6Component } from "../../../../layout/navbar-6/navbar-6.component";
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { RouterLink } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-blog-02',
    imports: [Navbar6Component, FancyBannerTwoComponent, Footer5Component, RouterLink, CommonModule],
    templateUrl: './blog-02.component.html'
})
export class Blog02Component {
  blogPosts = [
    {
      date: '17 SEP',
      imageUrl: 'assets/images/blog/blog_img_11.jpg',
      author: 'Rashed Kabir',
      time: '6 min',
      title: 'Print, publishing qui visual ux layout mockups.',
      excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
      link: '/blog_details'
    },
    {
      date: '12 JUL',
      imageUrl: 'assets/images/blog/blog_img_12.jpg',
      author: 'Rashed Kabir',
      time: '6 min',
      title: 'Spending Habits, 13 Tips for grow Your Money',
      excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
      link: '/blog_details'
    },
    {
      date: '12 JUL',
      imageUrl: 'assets/images/blog/blog_img_13.jpg',
      author: 'Rashed Kabir',
      time: '6 min',
      title: 'Medieval to the digital everything there know',
      excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
      link: '/blog_details'
    },
  ];
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
    { image: 'assets/images/blog/blog_img_08.jpg', title: '10 days quick challenge for boost visitors.', date: '23 July, 2022', link: '/blog_details' },
    { image: 'assets/images/blog/blog_img_09.jpg', title: 'Speaking remotely at WordCamp US.', date: '23 July, 2022', link: '/blog_details' },
    { image: 'assets/images/blog/blog_img_10.jpg', title: 'Monthly Roundup event December 2022.', date: '23 July, 2022', link: '/blog_details' }
  ];

  keywords = ['Ideas', 'Education', 'Design', 'Development', 'Branding'];
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) AOS.init({ duration: 800, easing: 'ease', once: true, mirror: false });
  }
}
