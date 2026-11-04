import AOS from 'aos';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { Navbar7Component } from "../../../../layout/navbar-7/navbar-7.component";
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { AdvanceFilterModalComponent } from "../../../../components/advance-filter-modal/advance-filter-modal.component";
import { PropertyService } from '../../../../service/property.service';
import { LocationService } from '../../../../service/location.service';
import { PriceRangeService } from '../../../../service/price-range.service';
import { ListingTypeService } from '../../../../service/listingType.service';
import { PriceRange } from '../../../../models/pricerange';
import { Property, PropertySearch } from '../../../../models/property';
import { Subject, Subscription, catchError, forkJoin, merge, of, switchMap, tap } from 'rxjs';
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

type SortKey = 'newest' | 'price_asc' | 'price_desc';

@Component({
    selector: 'app-listing-04',
    imports: [Navbar7Component, FancyBannerTwoComponent, Footer5Component, NgSelectModule, CommonModule, FormsModule, RouterLink, AdvanceFilterModalComponent],
    templateUrl: './listing-04.component.html'
})
export class Listing04Component implements OnInit, OnDestroy {
  // Dropdown options.
  modeOptions = [{ value: 'buy', label: 'Buy' }, { value: 'rent', label: 'Rent' }];
  options: { value: number; label: string }[] = [];      // categories (listing types)
  locations: { value: number; label: string }[] = [];
  priceRanges: { value: number; label: string }[] = [];
  bedOptions = [1, 2, 3, 4, 5].map(n => ({ value: n, label: `${n}+ bedrooms` }));
  short: { value: SortKey; label: string }[] = [
    { value: 'newest', label: 'Newest' },
    { value: 'price_asc', label: 'Price: low to high' },
    { value: 'price_desc', label: 'Price: high to low' }
  ];

  // Current filter values. They mirror the URL query string, so a link keeps its filters
  // and the browser back button steps through earlier searches.
  mode: string | null = null;
  typeId: number | null = null;
  locationId: number | null = null;
  priceRangeId: number | null = null;
  bedrooms: number | null = null;
  sort: SortKey = 'newest';
  hasFilters = false;

  // Results and paging.
  listings: ListingCard[] = [];
  totalResults = 0;
  page = 1;
  readonly pageSize = 10;
  totalPages = 1;
  pageNumbers: (number | '…')[] = [];
  showingFrom = 0;
  showingTo = 0;
  loading = false;
  loadError = false;

  private ranges: PriceRange[] = [];
  private readonly fallbackImage = 'assets/images/listing/img_28.jpg';
  private readonly reload$ = new Subject<void>();
  private firstLoad = true;
  private subscription?: Subscription;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private route: ActivatedRoute,
    private router: Router,
    private propertyService: PropertyService,
    private locationService: LocationService,
    private priceRangeService: PriceRangeService,
    private listingTypeService: ListingTypeService
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) AOS.init({ duration: 800, easing: 'ease', once: true, mirror: false });

    // A failed dropdown list shouldn't stop the page: fall back to an empty list.
    const lookups$ = forkJoin({
      types: this.listingTypeService.getListingTypes().pipe(catchError(() => of([]))),
      locations: this.locationService.getAll().pipe(catchError(() => of([]))),
      ranges: this.priceRangeService.getAll().pipe(catchError(() => of([])))
    }).pipe(
      tap(({ types, locations, ranges }) => {
        this.options = types.map(t => ({ value: Number(t.value), label: t.label }));
        this.locations = locations.map(l => ({ value: l.id, label: l.displayName }));
        this.ranges = ranges;
        this.priceRanges = ranges.map(r => ({ value: r.id, label: r.displayLabel }));
      })
    );

    // Once the dropdowns are ready, every change to the URL (or a retry) loads results.
    const params$ = this.route.queryParamMap.pipe(tap(params => this.readParams(params)));
    this.subscription = lookups$.pipe(
      switchMap(() => merge(params$, this.reload$)),
      tap(() => {
        this.loading = true;
        this.loadError = false;
      }),
      switchMap(() => this.propertyService.search(this.buildSearch(), this.page, this.pageSize).pipe(
        catchError(() => {
          this.loadError = true;
          return of({ items: [] as Property[], total: 0 });
        })
      ))
    ).subscribe(result => {
      this.showResults(result.items, result.total);
      this.loading = false;
      if (!this.firstLoad) this.scrollToResults();
      this.firstLoad = false;
    });
  }

  ngAfterViewInit(): void {
    Fancybox.bind('[data-fancybox]');
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  /** Search button: put the chosen filters in the URL, starting again from page 1. */
  applyFilters(): void {
    this.navigate({
      mode: this.mode,
      type: this.typeId,
      location: this.locationId,
      priceRange: this.priceRangeId,
      beds: this.bedrooms,
      sort: this.sort === 'newest' ? null : this.sort
    });
  }

  /** Sorting applies straight away, keeping the filters already in the URL. */
  onSortChange(sort: SortKey | null): void {
    this.sort = sort ?? 'newest';
    this.navigate({ ...this.currentParams(), sort: this.sort === 'newest' ? null : this.sort });
  }

  clearFilters(): void {
    this.navigate({});
  }

  retry(): void {
    this.reload$.next();
  }

  // The filters as they are in the URL right now (not unsaved dropdown choices).
  private currentParams(): Record<string, string | number | null> {
    const q = this.route.snapshot.queryParamMap;
    const out: Record<string, string | number | null> = {};
    for (const key of ['mode', 'type', 'location', 'priceRange', 'beds']) out[key] = q.get(key);
    return out;
  }

  private navigate(queryParams: Record<string, string | number | null>): void {
    // Null values are dropped from the URL; page is left out so results start at page 1.
    this.router.navigate([], { relativeTo: this.route, queryParams });
  }

  private readParams(params: ParamMap): void {
    const num = (key: string): number | null => {
      const raw = params.get(key);
      const value = raw === null || raw === '' ? NaN : Number(raw);
      return Number.isFinite(value) ? value : null;
    };
    const mode = params.get('mode');
    const sort = params.get('sort');

    this.mode = mode === 'buy' || mode === 'rent' ? mode : null;
    this.typeId = num('type');
    this.locationId = num('location');
    this.priceRangeId = num('priceRange');
    this.bedrooms = num('beds');
    this.sort = sort === 'price_asc' || sort === 'price_desc' ? sort : 'newest';
    this.page = Math.max(1, Math.floor(num('page') ?? 1));
    this.hasFilters = !!(this.mode || this.typeId || this.locationId || this.priceRangeId || this.bedrooms || this.sort !== 'newest');
  }

  private buildSearch(): PropertySearch {
    const search: PropertySearch = {};
    if (this.mode) search.isForRent = this.mode === 'rent';
    if (this.typeId !== null) search.listingTypeId = this.typeId;
    if (this.locationId !== null) search.locationId = this.locationId;
    const range = this.ranges.find(r => r.id === this.priceRangeId);
    if (range) {
      search.minPrice = range.minPrice;
      search.maxPrice = range.maxPrice;
    }
    if (this.bedrooms !== null) search.minBedrooms = this.bedrooms;
    if (this.sort !== 'newest') search.sort = this.sort;
    return search;
  }

  private showResults(properties: Property[], total: number): void {
    this.totalResults = total;
    this.totalPages = Math.max(1, Math.ceil(total / this.pageSize));
    this.showingFrom = properties.length === 0 ? 0 : (this.page - 1) * this.pageSize + 1;
    this.showingTo = (this.page - 1) * this.pageSize + properties.length;
    this.pageNumbers = this.buildPageNumbers();
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
  }

  // 1 … 4 5 6 … 12 style list, always including the first and last page.
  private buildPageNumbers(): (number | '…')[] {
    const last = this.totalPages;
    if (last <= 7) return Array.from({ length: last }, (_, i) => i + 1);
    const pages = new Set<number>([1, last, this.page - 1, this.page, this.page + 1]);
    const sorted = [...pages].filter(p => p >= 1 && p <= last).sort((a, b) => a - b);
    const out: (number | '…')[] = [];
    sorted.forEach((p, i) => {
      if (i > 0 && p - sorted[i - 1] > 1) out.push('…');
      out.push(p);
    });
    return out;
  }

  private scrollToResults(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    document.querySelector('.listing-header-filter')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
