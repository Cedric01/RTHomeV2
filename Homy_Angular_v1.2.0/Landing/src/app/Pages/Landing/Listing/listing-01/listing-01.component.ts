import AOS from 'aos';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Navbar7Component } from '../../../../layout/navbar-7/navbar-7.component';
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterLink } from '@angular/router';
import { PropertyService } from '../../../../service/property.service';
import { LocationService } from '../../../../service/location.service';
import { ListingTypeService } from '../../../../service/listingType.service';
import { Property } from '../../../../models/property';
import { SelectOptionListing } from '../../../../models/selectoptionlisting';

interface ListingCard {
  id: string;
  propertyId: number;
  tag: string;
  images: string[];
  title: string;
  address: string;
  features: { icon: string; label: string }[];
  price: string;
  rent: boolean;
  locationId: number | null;
  listingTypeId: number | null;
  bedrooms: number | null;
  bathrooms: number | null;
  squareFeet: number | null;
  rawPrice: number;
}

@Component({
  selector: 'app-listing-01',
  imports: [Navbar7Component, FancyBannerTwoComponent, Footer5Component, FormsModule, NgxSliderModule, CommonModule, NgSelectModule, RouterLink],
  templateUrl: './listing-01.component.html'
})
export class Listing01Component implements OnInit {
  // Filter form state
  selectedListingType: number | null = null;
  keyword = '';
  selectedLocation: number | null = null;
  selectedBedrooms: string | null = null;
  selectedBathrooms: string | null = null;
  selectedSort: string | null = null;
  minSqft: number | null = null;
  maxSqft: number | null = null;
  minValue = 0;
  maxValue = 50000;

  // Dropdown data (loaded from API)
  options: SelectOptionListing[] = [];
  locations: SelectOptionListing[] = [];

  short = [
    { value: '1', label: 'Newest' }, { value: '2', label: 'Best Seller' }, { value: '3', label: 'Best Match' },
    { value: '4', label: 'Price Low' }, { value: '5', label: 'Price High' }
  ];
  bedroomOptions = [
    { value: '1', label: '1+' }, { value: '2', label: '2+' }, { value: '3', label: '3+' }, { value: '4', label: '4+' }
  ];
  bathroomOptions = [
    { value: '1', label: '1+' }, { value: '2', label: '2+' }, { value: '3', label: '3+' }, { value: '4', label: '4+' }
  ];
  amenities = [
    { id: '01', name: 'A/C & Heating' }, { id: '02', name: 'Garages' }, { id: '03', name: 'Garden' }, { id: '04', name: 'Disabled Access' },
    { id: '05', name: 'Swimming Pool' }, { id: '06', name: 'Parking' }, { id: '07', name: 'Wifi' }, { id: '08', name: 'Pet Friendly' },
    { id: '09', name: 'Ceiling Height' }, { id: '10', name: 'Fireplace' }, { id: '11', name: 'Play Ground' }, { id: '12', name: 'Elevator' }
  ];

  private allListings: ListingCard[] = [];
  listings: ListingCard[] = [];
  totalListings = 0;
  isLoading = true;
  loadError = false;

  sliderOptions: Options = { floor: 0, ceil: 50000, step: 100 };

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private propertyService: PropertyService,
    private locationService: LocationService,
    private listingTypeService: ListingTypeService
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({ duration: 800, easing: 'ease', once: true, mirror: false });
    }
    this.loadFilterData();
    this.loadListings();
  }

  onSliderChange() { }

  onSearch(): void {
    let result = [...this.allListings];

    if (this.selectedListingType) {
      result = result.filter(l => l.listingTypeId === this.selectedListingType);
    }
    if (this.keyword.trim()) {
      const kw = this.keyword.trim().toLowerCase();
      result = result.filter(l =>
        l.title.toLowerCase().includes(kw) || l.address.toLowerCase().includes(kw)
      );
    }
    if (this.selectedLocation) {
      result = result.filter(l => l.locationId === this.selectedLocation);
    }
    if (this.selectedBedrooms) {
      const minBed = Number(this.selectedBedrooms);
      result = result.filter(l => l.bedrooms != null && l.bedrooms >= minBed);
    }
    if (this.selectedBathrooms) {
      const minBath = Number(this.selectedBathrooms);
      result = result.filter(l => l.bathrooms != null && l.bathrooms >= minBath);
    }
    result = result.filter(l => l.rawPrice >= this.minValue && l.rawPrice <= this.maxValue);
    if (this.minSqft != null) {
      result = result.filter(l => l.squareFeet != null && l.squareFeet >= this.minSqft!);
    }
    if (this.maxSqft != null) {
      result = result.filter(l => l.squareFeet != null && l.squareFeet <= this.maxSqft!);
    }

    this.applySort(result);
  }

  onReset(): void {
    this.selectedListingType = null;
    this.keyword = '';
    this.selectedLocation = null;
    this.selectedBedrooms = null;
    this.selectedBathrooms = null;
    this.selectedSort = null;
    this.minValue = 0;
    this.maxValue = 50000;
    this.minSqft = null;
    this.maxSqft = null;
    this.listings = [...this.allListings];
  }

  private applySort(result: ListingCard[]): void {
    switch (this.selectedSort) {
      case '4': result.sort((a, b) => a.rawPrice - b.rawPrice); break;
      case '5': result.sort((a, b) => b.rawPrice - a.rawPrice); break;
      default: break;
    }
    this.listings = result;
  }

  private loadFilterData(): void {
    this.locationService.getAll().subscribe({
      next: (locs) => {
        this.locations = locs.map(l => ({ value: l.id, label: l.displayName }));
      },
      error: (err) => console.error('Failed to load locations', err)
    });

    this.listingTypeService.getListingTypes().subscribe({
      next: (types) => { this.options = types; },
      error: (err) => console.error('Failed to load listing types', err)
    });
  }

  private loadListings(): void {
    this.isLoading = true;
    this.loadError = false;
    this.propertyService.getAll().subscribe({
      next: (properties) => {
        this.allListings = properties.map((p) => this.toCard(p));
        this.totalListings = this.allListings.length;
        this.listings = [...this.allListings];
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load listings', err);
        this.loadError = true;
        this.isLoading = false;
      }
    });
  }

  private toCard(p: Property): ListingCard {
    return {
      id: 'carousel' + p.id,
      propertyId: p.id!,
      tag: p.isForRent ? 'FOR RENT' : 'FOR SELL',
      images: p.imageUrls && p.imageUrls.length > 0
        ? p.imageUrls
        : ['assets/images/listing/img_18.jpg'],
      title: p.title,
      address: p.address,
      features: [
        { icon: 'icon_04.svg', label: p.squareFeet ? p.squareFeet + ' sqft' : '—' },
        { icon: 'icon_05.svg', label: p.bedrooms ? String(p.bedrooms).padStart(2, '0') + ' bed' : '—' },
        { icon: 'icon_06.svg', label: p.bathrooms ? String(p.bathrooms).padStart(2, '0') + ' bath' : '—' }
      ],
      price: p.isForRent
        ? '$' + Number(p.price).toLocaleString() + '/<sub>m</sub>'
        : '$' + Number(p.price).toLocaleString(),
      rent: p.isForRent,
      locationId: p.locationId ?? null,
      listingTypeId: p.listingTypeId ?? null,
      bedrooms: p.bedrooms ?? null,
      bathrooms: p.bathrooms ?? null,
      squareFeet: p.squareFeet ?? null,
      rawPrice: Number(p.price)
    };
  }
}
