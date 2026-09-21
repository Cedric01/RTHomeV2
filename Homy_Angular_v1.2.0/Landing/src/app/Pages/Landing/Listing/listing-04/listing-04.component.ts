import AOS from 'aos';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Navbar7Component } from "../../../../layout/navbar-7/navbar-7.component";
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterLink } from '@angular/router';
import { AdvanceFilterModalComponent } from "../../../../components/advance-filter-modal/advance-filter-modal.component";
import { PropertyService } from '../../../../service/property.service';
import { LocationService } from '../../../../service/location.service';
import { PriceRangeService } from '../../../../service/price-range.service';
import { ListingTypeService } from '../../../../service/listingType.service';
declare const Fancybox: any;

interface ListingCard {
  id?: number;
  type: string;
  title: string;
  address: string;
  sqft: number | string;
  bed: number | string;
  bath: number | string;
  parkingLot: number | string;
  garden: number | string;
  price: string;
  imageUrl: string;
  imgLinks: { src: string; caption: string }[];
}

@Component({
    selector: 'app-listing-04',
    imports: [Navbar7Component, FancyBannerTwoComponent, Footer5Component, NgSelectModule, CommonModule, RouterLink, AdvanceFilterModalComponent],
    templateUrl: './listing-04.component.html'
})
export class Listing04Component implements OnInit {
  options: { value: string; label: string }[] = [];
  locations: { value: string; label: string }[] = [];
  priceRanges: { value: string; label: string }[] = [];
  short = [
    { value: '1', label: 'Newest' }, { value: '2', label: 'Best Seller' }, { value: '3', label: 'Best Match' },
    { value: '4', label: 'Price Low' }, { value: '6', label: 'Price High' }
  ];

  listings: ListingCard[] = [];
  totalResults = 0;
  loading = false;

  private readonly fallbackImage = 'assets/images/listing/img_28.jpg';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private propertyService: PropertyService,
    private locationService: LocationService,
    private priceRangeService: PriceRangeService,
    private listingTypeService: ListingTypeService
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) AOS.init({ duration: 800, easing: 'ease', once: true, mirror: false });

    this.loading = true;
    this.propertyService.getAll().subscribe({
      next: properties => {
        this.totalResults = properties.length;
        this.listings = properties.map(p => {
          const images = (p.imageUrls && p.imageUrls.length > 0) ? p.imageUrls : [this.fallbackImage];
          return {
            id: p.id,
            type: p.isForRent ? 'FOR RENT' : 'FOR SELL',
            title: p.title,
            address: p.address,
            sqft: p.squareFeet ?? '—',
            bed: p.bedrooms ?? '—',
            bath: p.bathrooms ?? '—',
            parkingLot: p.parkingSpots ?? '—',
            garden: p.gardenSize ?? '—',
            price: p.isForRent
              ? '$' + Number(p.price).toLocaleString() + '/m'
              : '$' + Number(p.price).toLocaleString(),
            imageUrl: images[0],
            imgLinks: images.map(src => ({ src, caption: p.title }))
          };
        });
      },
      error: err => console.error(err),
      complete: () => (this.loading = false)
    });

    this.locationService.getAll().subscribe({
      next: locations => {
        this.locations = locations.map(l => ({ value: l.id.toString(), label: l.displayName }));
      }
    });

    this.priceRangeService.getAll().subscribe({
      next: ranges => {
        this.priceRanges = ranges.map(r => ({ value: r.id.toString(), label: r.displayLabel }));
      }
    });

    this.listingTypeService.getListingTypes().subscribe({
      next: types => {
        this.options = types.map(t => ({ value: t.value.toString(), label: t.label }));
      }
    });
  }

  ngAfterViewInit(): void {
    Fancybox.bind('[data-fancybox]');
  }
}
