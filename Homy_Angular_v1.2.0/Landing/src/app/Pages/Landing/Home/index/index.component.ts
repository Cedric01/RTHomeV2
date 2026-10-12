import { SwiperService } from './../../../../service/swiper.service';
import { AfterViewInit, Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule, isPlatformBrowser } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import AOS from 'aos';
import Swiper from 'swiper';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Footer1Component } from '../../../../layout/footer-1/footer-1.component';
import { Navbar1Component } from '../../../../layout/navbar-1/navbar-1.component';
import { FeedbackSectionOneComponent } from '../../../../components/feedback-section-one/feedback-section-one.component';
import { BLockFeatureOneComponent } from '../../../../components/block-feature-one/block-feature-one.component';
import { BLockFeatureThreeComponent } from '../../../../components/block-feature-three/block-feature-three.component';
import { FancyBannerOneComponent } from '../../../../components/fancy-banner-one/fancy-banner-one.component';
import { FancyBannerTwoComponent } from '../../../../components/fancy-banner-two/fancy-banner-two.component';
import { AuthService } from '../../../../service/auth.service';
import { ModalService } from '../../../../service/modal.service';
import { MenuListComponent } from "../../../../components/menu-list/menu-list.component";
import { Property } from '../../../../models/property';
import { Agent } from '../../../../models/agent';
import { PropertyService } from '../../../../service/property.service';
import { LocationService } from '../../../../service/location.service';
import { AgentService } from '../../../../service/agent.service';
import { Location as LocationModel } from '../../../../models/location';
import { PriceRangeService } from '../../../../service/price-range.service';
import { EstimateRequestService } from '../../../../service/estimate-request.service';
import { ListingTypeService } from '../../../../service/listingType.service';
@Component({
    selector: 'app-index',
    imports: [
        Footer1Component, RouterLink, CommonModule, AsyncPipe, FormsModule,
        FeedbackSectionOneComponent, BLockFeatureOneComponent, BLockFeatureThreeComponent,
        FancyBannerOneComponent, NgSelectModule, FancyBannerTwoComponent,
        MenuListComponent
    ],
    templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit, AfterViewInit{
  headerClass = 'theme-main-menu menu-overlay menu-style-one sticky-menu';

  properties: Property[] = [];
  featuredProperties: Property[] = [];
locations: LocationModel[] = [];
locationOptions: { value: string; label: string }[] = [];
priceRanges: { value: string; label: string }[] = [];

  
//  agents: Agent[] = [];

  // Populated from ListingTypeService in loadHomePageData(); starts empty so the
  // dropdown doesn't flash stale placeholder options before the real ones load.
  options: { value: string; label: string }[] = [];

  // Bound to the hero search form's dropdowns via ngModel.
  selectedListingType: string | null = null;
  selectedLocationId: string | null = null;
  selectedPriceRangeId: string | null = null;

  agents: Agent[] = [
    { id: 0, name: 'Mark Filo', imageUrl: 'assets/images/agent/img_01.jpg', designation: 'CEO & Founder', link: '/agent_details' },
    { id: 0, name: 'Chris Matial', imageUrl: 'assets/images/agent/img_02.jpg', designation: 'Retailer', link: '/agent_details' },
    { id: 0, name: 'Jubayer Al Hasan', imageUrl: 'assets/images/agent/img_03.jpg', designation: 'Marketing Expert', link: '/agent_details' },
    { id: 0, name: 'Jannatul Ferdaus', imageUrl: 'assets/images/agent/img_04.jpg', designation: 'Broker', link: '/agent_details' },
    { id: 0, name: 'Chris Matial', imageUrl: 'assets/images/agent/img_05.jpg', designation: 'Broker', link: '/agent_details' }
  ];

  steps = [
    { icon: 'assets/images/icon/icon_07.svg', title: 'Create Account', description: 'It’s very easy to open an account and start your journey.', delay: 0 },
    { icon: 'assets/images/icon/icon_08.svg', title: 'Find Home', description: 'Complete your profile with all the info to get attention of client.', delay: 100 },
    { icon: 'assets/images/icon/icon_09.svg', title: 'Quick Process', description: 'Apply & get your preferable jobs with all the requirements and get it.', delay: 200 }
  ];

  listingsAll: any[] = [];
  loading: boolean | undefined;

  // "Explore Popular Location" carousel data for block-feature-three. Computed
  // from the same properties/locations already loaded here - no separate API
  // call. There's no location-image field in the API, so we cycle through a
  // small set of stock photos by index.
  cityShowcase: { name: string; properties: string; imageUrl: string }[] = [];
  private readonly cityImages = [
    'assets/images/media/img_05.jpg',
    'assets/images/media/img_06.jpg',
    'assets/images/media/img_07.jpg',
    'assets/images/media/img_08.jpg',
    'assets/images/media/img_09.jpg'
  ];

  estimateEmail = '';
  estimateSubmitting = false;
  estimateSubmitted = false;
  estimateError: string | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
  private swiperService: SwiperService,
  public authService: AuthService,
  private modalService: ModalService,
  private propertyService: PropertyService,
  private locationService: LocationService,
  private agentService: AgentService,
  private priceRangeService: PriceRangeService,
  private estimateRequestService: EstimateRequestService,
  private listingTypeService: ListingTypeService,
  private router: Router
) { }

  ngOnInit() : void {
    if (isPlatformBrowser(this.platformId)) AOS.init({ duration: 800, easing: 'ease', once: true, mirror: false });
    
    this.loadHomePageData();
  }

  ngAfterViewInit() {
    this.swiperService.initSwiper('.swiper-container', 1, 20, 3000, 3, 6, 4);
    this.swiperService.initSwiper('#carousel1', 1, 20, 3000, 3, 6, 1);

  }

  initializeSwiper(selector: string, options: any) {
    new Swiper(selector, { ...options, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' } });
  }

  private loadHomePageData(): void {
    this.loading = true;

    this.propertyService.getAll().subscribe({
      next: properties => {
        this.properties = properties;
        this.featuredProperties = properties.slice(0, 6);
        this.listingsAll = this.featuredProperties.map((p, i) => ({
          id: 'carousel' + (p.id ?? i + 1),
          propertyId: p.id,
          tag: p.isForRent ? 'FOR RENT' : 'FOR SELL',
          images: (p.imageUrls && p.imageUrls.length > 0)
            ? p.imageUrls
            : ['assets/images/listing/img_18.jpg'],
          title: p.title,
          address: p.address,
          features: [
            { icon: 'icon_04.svg', label: (p.squareFeet ?? '—') + ' sqft' },
            { icon: 'icon_05.svg', label: (p.bedrooms ?? '—') + ' bed' },
            { icon: 'icon_06.svg', label: (p.bathrooms ?? '—') + ' bath' }
          ],
          price: p.isForRent
            ? '$' + Number(p.price).toLocaleString() + '/<sub>m</sub>'
            : '$' + Number(p.price).toLocaleString(),
          rent: p.isForRent
        }));
        this.initSwipers();
        this.updateCityShowcase();
      },
      error: err => console.error(err),
      complete: () => (this.loading = false)
    });

    this.agentService.getAll().subscribe({
      next: agents => (this.agents = agents)
    });

this.locationService.getAll().subscribe({
  next: locations => {
    this.locations = locations;

    this.locationOptions = locations.map(l => ({
      value: l.id.toString(),
      label: l.displayName
    }));

    this.updateCityShowcase();
  }
});

this.priceRangeService.getAll().subscribe({
  next: ranges => {
    this.priceRanges = ranges.map(r => ({
      value: r.id.toString(),
      label: r.displayLabel
    }));
  }
});

this.listingTypeService.getListingTypes().subscribe({
  next: types => {
    this.options = types.map(t => ({
      value: t.value.toString(),
      label: t.label
    }));
  }
});

  }

    // Fires after either properties or locations load; harmless to recompute
    // twice since both sides just read whatever's currently in state.
    private updateCityShowcase(): void {
      if (this.locations.length === 0) return;

      const countsByLocationId = new Map<number, number>();
      for (const property of this.properties) {
        countsByLocationId.set(
          property.locationId,
          (countsByLocationId.get(property.locationId) ?? 0) + 1
        );
      }

      this.cityShowcase = this.locations.map((location, i) => {
        const count = countsByLocationId.get(location.id) ?? 0;
        return {
          name: location.displayName,
          properties: `${count.toLocaleString()} Propert${count === 1 ? 'y' : 'ies'}`,
          imageUrl: this.cityImages[i % this.cityImages.length]
        };
      });
    }

    private initSwipers(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.swiperService.initSwiper(
      '.swiper-container',
      1,
      20,
      3000,
      3,
      6,
      4
    );
  }

  openModal(): void {
    this.modalService.openModal();
  }

  searchListings(): void {
    const queryParams: Record<string, string> = {};
    if (this.selectedListingType) queryParams['type'] = this.selectedListingType;
    if (this.selectedLocationId) queryParams['location'] = this.selectedLocationId;
    if (this.selectedPriceRangeId) queryParams['priceRange'] = this.selectedPriceRangeId;

    this.router.navigate(['/listing_04'], { queryParams });
  }

  submitEstimateRequest(): void {
    const email = this.estimateEmail.trim();
    if (!email) return;

    this.estimateSubmitting = true;
    this.estimateError = null;

    this.estimateRequestService.submit({ email }).subscribe({
      next: () => {
        this.estimateSubmitted = true;
        this.estimateEmail = '';
        this.estimateSubmitting = false;
      },
      error: () => {
        this.estimateError = 'Something went wrong. Please try again.';
        this.estimateSubmitting = false;
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.pageYOffset > 100) {
      this.headerClass = 'theme-main-menu menu-overlay menu-style-one sticky-menu fixed';
    } else {
      this.headerClass = 'theme-main-menu menu-overlay menu-style-one sticky-menu';
    }
  }
}
