import { Component, OnInit } from '@angular/core';
import { Navbar7Component } from "../../../../layout/navbar-7/navbar-7.component";
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { LightboxModule } from 'ngx-lightbox';
declare const Fancybox: any;
import { CommonModule } from '@angular/common';
import { SwiperService } from '../../../../service/swiper.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PropertyFeaturesComponent } from "../../../../components/property-features/property-features.component";
import { AmenitiesComponent } from "../../../../components/amenities/amenities.component";
import { PropertyService } from '../../../../service/property.service';
import { Property } from '../../../../models/property';
import { Agent } from '../../../../models/agent';
import { AgentService } from '../../../../service/agent.service';

@Component({
    selector: 'app-listing-details-01',
    imports: [Navbar7Component, FancyBannerTwoComponent, Footer5Component, LightboxModule, CommonModule, RouterLink, PropertyFeaturesComponent, AmenitiesComponent],
    templateUrl: './listing-details-01.component.html'
})
export class ListingDetails01Component implements OnInit {

  property: Property | null = null;
  agent: Agent | null = null;
  mortgagePayment: number = 0;
  relatedListings: { id: number; tag: string; imageUrl: string; price: string; address: string; link: string }[] = [];
  loadError = false;

  carouselImages: string[] = [
    'assets/images/listing/img_43.jpg',
    'assets/images/listing/img_44.jpg',
    'assets/images/listing/img_45.jpg',
    'assets/images/listing/img_46.jpg'
  ];
  carouselThumbnails = [
    { src: 'assets/images/listing/img_43_s.jpg', label: 'Slide 1' },
    { src: 'assets/images/listing/img_44_s.jpg', label: 'Slide 2' },
    { src: 'assets/images/listing/img_45_s.jpg', label: 'Slide 3' },
    { src: 'assets/images/listing/img_46_s.jpg', label: 'Slide 4' },
  ];
  propertyDetails = [
    { icon: 'assets/images/icon/icon_47.svg', label: 'Sqft', value: '3,720' },
    { icon: 'assets/images/icon/icon_48.svg', label: 'Bed', value: '03' },
    { icon: 'assets/images/icon/icon_49.svg', label: 'Bath', value: '2' },
    { icon: 'assets/images/icon/icon_51.svg', label: 'Type', value: 'Apartment' },
  ];

  constructor(
    private swiperService: SwiperService,
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private agentService: AgentService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.loadError = true;
      return;
    }
    this.propertyService.getById(Number(id)).subscribe({
        next: (p) => {
          this.property = p;

          if (p.imageUrls && p.imageUrls.length > 0) {
            this.carouselImages = p.imageUrls;
            this.carouselThumbnails = p.imageUrls.map((src, i) => ({ src, label: 'Slide ' + (i + 1) }));
          }

          this.propertyDetails = [
            { icon: 'assets/images/icon/icon_47.svg', label: 'Sqft', value: p.squareFeet?.toString() ?? '—' },
            { icon: 'assets/images/icon/icon_48.svg', label: 'Bed', value: p.bedrooms?.toString() ?? '—' },
            { icon: 'assets/images/icon/icon_49.svg', label: 'Bath', value: p.bathrooms?.toString() ?? '—' },
            { icon: 'assets/images/icon/icon_51.svg', label: 'Type', value: p.isForRent ? 'Rental' : 'For Sale' },
          ];

          this.mortgagePayment = this.calcMonthlyMortgage(p.price);

          if (p.agentId) {
            this.agentService.getById(p.agentId).subscribe({
              next: (a) => (this.agent = a),
              error: (err) => console.error('Failed to load agent', err)
            });
          }

          this.propertyService.getAll().subscribe({
            next: (all) => {
              this.relatedListings = all
                .filter(r => r.id !== p.id)
                .slice(0, 3)
                .map(r => ({
                  id: r.id!,
                  tag: r.isForRent ? 'FOR RENT' : 'FOR SELL',
                  imageUrl: r.imageUrls?.[0] ?? 'assets/images/listing/img_13.jpg',
                  price: '$' + Number(r.price).toLocaleString(),
                  address: r.address,
                  link: '/listing_details_01/' + r.id
                }));
            },
            error: (err) => console.error('Failed to load related listings', err)
          });
        },
        error: (err) => console.error('Failed to load property', err)
      });
  }

  ngAfterViewInit(): void {
    this.swiperService.initSwiper('.swiper-container', 1, 20, 3000, 3, 6, 3);
    Fancybox.bind('[data-fancybox]');
  }

  private calcMonthlyMortgage(price: number): number {
    const annualRate = 0.07;
    const r = annualRate / 12;
    const n = 360; // 30 years
    return Math.round((price * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
  }
}
