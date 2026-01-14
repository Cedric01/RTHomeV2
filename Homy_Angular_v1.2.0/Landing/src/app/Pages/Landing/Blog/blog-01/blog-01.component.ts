import  AOS from 'aos';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Navbar6Component } from "../../../../layout/navbar-6/navbar-6.component";
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog-01',
    imports: [Navbar6Component, FancyBannerTwoComponent, Footer5Component, CommonModule, RouterLink],
    templateUrl: './blog-01.component.html'
})
export class Blog01Component {
  blogs = [
    { image: 'assets/images/blog/blog_img_03.jpg', date: '08 JAN', author: 'Mark Quins', time: '7 min', title: 'Speaking remotely at WordCamp US.', link: '/blog_details' },
    { image: 'assets/images/blog/blog_img_01.jpg', date: '17 AUG', author: 'Rashed Kabir', time: '7 min', title: 'Designer’s Checklist for Every UX/UI Project.', link: '/blog_details' },
    { image: 'assets/images/blog/blog_img_04.jpg', date: '21 SEP', author: 'Jubayer Hasan', time: '8 min', title: 'Spending Habits, 13 Tips for grow Your Money.', link: '/blog_details' },
    { image: 'assets/images/blog/blog_img_05.jpg', date: '14 JUN', author: 'Jannatul Ferdaus', time: '7 min', title: 'In a laoreet purus. Integer turpis quam, laoreet', link: '/blog_details' },
    { image: 'assets/images/blog/blog_img_06.jpg', date: '07 Feb', author: 'Jubayer Hasan', time: '5 min', title: 'Print, publishing qui visual ux layout mockups.', link: '/blog_details' },
    { image: 'assets/images/blog/blog_img_07.jpg', date: '21 SEP', author: 'Mahfuz Riad', time: '6 min', title: 'Efficitur id eget nisl. Proin porta est convallis.', link: '/blog_details' },
  ];
  categories = [
    { name: 'Digital', count: 3 },
    { name: 'Marketing', count: 4 },
    { name: 'Design', count: 2 },
    { name: 'WordPress', count: 8 },
    { name: 'Plugin', count: 5 },
    { name: 'Developer', count: 3 },
    { name: 'Account', count: 7 },
  ];
  recentNews = [
    { image: 'assets/images/blog/blog_img_08.jpg', title: '10 days quick challenge for boost visitors.', date: '23 July, 2022', link: '/blog_details' },
    { image: 'assets/images/blog/blog_img_09.jpg', title: 'Speaking remotely at WordCamp US.', date: '23 July, 2022', link: '/blog_details' },
    { image: 'assets/images/blog/blog_img_10.jpg', title: 'Monthly Roundup event December 2022.', date: '23 July, 2022', link: '/blog_details' },
  ];
  keywords = ['Ideas', 'Education', 'Design', 'Development', 'Branding'];
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) AOS.init({ duration: 800, easing: 'ease', once: true, mirror: false });
  }
}
