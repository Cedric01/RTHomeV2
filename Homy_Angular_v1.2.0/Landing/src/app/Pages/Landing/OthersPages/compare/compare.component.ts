import { Component } from '@angular/core';
import { Navbar6Component } from "../../../../layout/navbar-6/navbar-6.component";
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-compare',
    imports: [Navbar6Component, FancyBannerTwoComponent, Footer5Component, CommonModule, RouterLink],
    templateUrl: './compare.component.html'
})
export class CompareComponent {
  properties = [
    {
      title: 'Blueberry villa',
      image: 'assets/images/listing/img_66.jpg',
      address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
      bedrooms: 3,
      bath: 2,
      price: '$1,75,320',
      propertyType: 'Villa',
      propertyId: 'h2180',
      parking: 1,
      lotSize: '2,710 sq.ft',
      features: 'Ac/Heating, Laundry, Garden, Elevator, Pet Friendly, Wifi, Refrigerator',
      zoning: 'Residential'
    },
    {
      title: 'Orkit Flat',
      image: 'assets/images/listing/img_67.jpg',
      address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
      bedrooms: 2,
      bath: 1,
      price: '$1,42,720',
      propertyType: 'Flat',
      propertyId: 'h3218',
      parking: 2,
      lotSize: '1,810 sq.ft',
      features: 'Ac/Heating, Garden, Wifi, Pet Friendly, Refrigerator',
      zoning: 'Residential'
    },
    {
      title: 'Modu Apartment',
      image: 'assets/images/listing/img_68.jpg',
      address: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
      bedrooms: 3,
      bath: 1,
      price: '$1,82,000',
      propertyType: 'Apartment',
      propertyId: 'h4322',
      parking: 0,
      lotSize: '3,470 sq.ft',
      features: 'Ac/Heating, Laundry, Garden, Elevator, Pet Friendly, Wifi, Refrigerator, Fireplace, Swimming Pool',
      zoning: 'Residential'
    }
  ];
}
