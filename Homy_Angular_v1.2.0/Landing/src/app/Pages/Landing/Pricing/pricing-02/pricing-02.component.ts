import { Component } from '@angular/core';
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { RouterLink } from '@angular/router';
import { Navbar6Component } from "../../../../layout/navbar-6/navbar-6.component";

@Component({
    selector: 'app-pricing-02',
    imports: [FancyBannerTwoComponent, Footer5Component, RouterLink, Navbar6Component],
    templateUrl: './pricing-02.component.html'
})
export class Pricing02Component {

}
