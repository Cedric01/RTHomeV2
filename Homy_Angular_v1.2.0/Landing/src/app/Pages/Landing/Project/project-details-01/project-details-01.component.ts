import { Component } from '@angular/core';
import { Navbar6Component } from "../../../../layout/navbar-6/navbar-6.component";
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-project-details-01',
    imports: [Navbar6Component, FancyBannerTwoComponent, Footer5Component, CommonModule, RouterLink],
    templateUrl: './project-details-01.component.html'
})
export class ProjectDetails01Component {
  projectDetails = [
    {
      num: '01',
      icon: 'assets/images/icon/icon_43.svg',
      label: 'Date',
      value: 'Sunday, 23 July, 2021'
    },
    {
      num: '02',
      icon: 'assets/images/icon/icon_44.svg',
      label: 'Client Name',
      value: 'Mariona Adisson, California'
    },
    {
      num: '03',
      icon: 'assets/images/icon/icon_45.svg',
      label: 'Project Type',
      value: 'Business Consulting'
    },
  ];
}
