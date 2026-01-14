import { Component } from '@angular/core';
import { Navbar6Component } from "../../../../layout/navbar-6/navbar-6.component";
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { PropertyFeaturesComponent } from "../../../../components/property-features/property-features.component";
import { AmenitiesComponent } from "../../../../components/amenities/amenities.component";
import { RouterLink } from '@angular/router';
declare const Fancybox: any;

@Component({
    selector: 'app-listing-details-06',
    imports: [Navbar6Component, FancyBannerTwoComponent, Footer5Component, PropertyFeaturesComponent, AmenitiesComponent, RouterLink],
    templateUrl: './listing-details-06.component.html'
})
export class ListingDetails06Component {
  ngAfterViewInit(): void {
    Fancybox.bind('[data-fancybox]');
  }
}
