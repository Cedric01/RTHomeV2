import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { DashboardNavbarComponent } from "../../../components/dashboard-navbar/dashboard-navbar.component";
import { PropertyService } from '../../../service/property.service';
import { LocationService } from '../../../service/location.service';
import { ListingTypeService } from '../../../service/listingType.service';
import { AgentService } from '../../../service/agent.service';
import { PriceRangeService } from '../../../service/price-range.service';
import { SelectOptionListing } from '../../../models/selectoptionlisting';
import { Location } from '../../../models/location';
import { Agent } from '../../../models/agent';
import { PriceRange } from '../../../models/pricerange';
import { Property } from '../../../models/property';

type AmenityKey =
  | 'hasAirCondition'
  | 'hasSwimmingPool'
  | 'isPetFriendly'
  | 'hasFireplace'
  | 'hasWifi'
  | 'hasCableTv'
  | 'hasElevator'
  | 'hasFence'
  | 'hasIntercom'
  | 'hasVentilation';

interface AddPropertyForm {
  title: string;
  description: string;
  listingTypeId: number | null;
  listingMode: 'sale' | 'rent' | null;
  price: number | null;
  priceRangeId: number | null;
  agentId: number | null;
  squareFeet: number | null;
  bedrooms: number | null;
  bathrooms: number | null;
  garage: number | null;
  yearBuilt: number | null;
  floor: string | null;
  address: string;
  locationId: number | null;
}

@Component({
    selector: 'app-add-property',
    imports: [DashboardNavbarComponent, NgSelectModule, FormsModule, CommonModule],
    templateUrl: './add-property.component.html'
})
export class AddPropertyComponent implements OnInit, OnDestroy {
  form: AddPropertyForm = this.emptyForm();

  // Edit mode: set when the route is /edit-property/:id. The loaded property is
  // kept so a save (a full PUT) doesn't blank fields this form doesn't show.
  editId: number | null = null;
  private original: Property | null = null;
  loadingProperty = false;

  // Lookup data loaded from the API
  listingTypes: SelectOptionListing[] = [];
  locations: Location[] = [];
  agents: Agent[] = [];
  priceRanges: PriceRange[] = [];

  // Static choices
  listingModes = [
    { label: 'For Sale', value: 'sale' },
    { label: 'For Rent', value: 'rent' }
  ];
  countOptions = [0, 1, 2, 3, 4, 5, 6];
  floorOptions = ['Ground', '1', '2', '3', '4', '5'];

  // Each amenity maps to a boolean field the API actually stores.
  amenities: Array<{ key: AmenityKey; label: string; selected: boolean }> = [
    { key: 'hasAirCondition', label: 'Air Conditioning', selected: false },
    { key: 'hasSwimmingPool', label: 'Swimming Pool', selected: false },
    { key: 'isPetFriendly', label: 'Pet Friendly', selected: false },
    { key: 'hasFireplace', label: 'Fireplace', selected: false },
    { key: 'hasWifi', label: 'Wifi', selected: false },
    { key: 'hasCableTv', label: 'TV Cable', selected: false },
    { key: 'hasElevator', label: 'Elevator', selected: false },
    { key: 'hasFence', label: 'Fence', selected: false },
    { key: 'hasIntercom', label: 'Intercom', selected: false },
    { key: 'hasVentilation', label: 'Ventilation', selected: false }
  ];

  // Photos. Existing ones come from the API (edit mode); new ones are picked here
  // and uploaded after the property itself is saved.
  readonly maxImages = 20;
  readonly maxImageBytes = 5 * 1024 * 1024;
  private readonly allowedImageTypes = ['image/jpeg', 'image/png', 'image/webp'];
  existingImages: string[] = [];
  private removedImages: string[] = [];
  newImages: Array<{ file: File; preview: string }> = [];
  imageErrors: string[] = [];
  uploadStatus: string | null = null;

  // Submit / error state
  submitting = false;
  fieldErrors: Record<string, string[]> = {};
  errorSummary: string[] = [];
  lookupError: string | null = null;

  // Form fields that have an inline error slot in the template. Server errors
  // for any other key are shown in the summary alert instead.
  private readonly knownFields = new Set<string>([
    'title', 'description', 'listingTypeId', 'listingMode', 'price', 'priceRangeId',
    'agentId', 'squareFeet', 'bedrooms', 'bathrooms', 'garage', 'yearBuilt', 'floor',
    'address', 'locationId'
  ]);

  constructor(
    private propertyService: PropertyService,
    private locationService: LocationService,
    private listingTypeService: ListingTypeService,
    private agentService: AgentService,
    private priceRangeService: PriceRangeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  get isEdit(): boolean {
    return this.editId !== null;
  }

  ngOnInit(): void {
    this.loadLookups();

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = Number(idParam);
      if (Number.isInteger(id) && id > 0) {
        this.editId = id;
        this.loadProperty(id);
      } else {
        this.errorSummary = ['That property link is not valid.'];
      }
    }

    // Set when a just-created property was saved but some photos didn't upload.
    const failures = typeof history !== 'undefined' ? history.state?.photoFailures : undefined;
    if (Array.isArray(failures) && failures.length > 0) {
      this.errorSummary = this.photoFailureSummary(failures);
    }
  }

  ngOnDestroy(): void {
    this.newImages.forEach(img => URL.revokeObjectURL(img.preview));
  }

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = Array.from(input.files ?? []);
    input.value = ''; // lets the same file be picked again later

    const errors: string[] = [];
    for (const file of files) {
      if (!this.allowedImageTypes.includes(file.type)) {
        errors.push(`${file.name} is not a JPEG, PNG or WebP image.`);
      } else if (file.size > this.maxImageBytes) {
        errors.push(`${file.name} is larger than ${this.maxImageBytes / (1024 * 1024)} MB.`);
      } else if (this.existingImages.length + this.newImages.length >= this.maxImages) {
        errors.push(`A property can have at most ${this.maxImages} photos.`);
        break;
      } else {
        this.newImages.push({ file, preview: URL.createObjectURL(file) });
      }
    }
    this.imageErrors = errors;
  }

  removeNewImage(index: number): void {
    const [removed] = this.newImages.splice(index, 1);
    if (removed) URL.revokeObjectURL(removed.preview);
    this.imageErrors = [];
  }

  removeExistingImage(url: string): void {
    this.existingImages = this.existingImages.filter(u => u !== url);
    this.removedImages.push(url);
    this.imageErrors = [];
  }

  errorsFor(field: string): string[] {
    return this.fieldErrors[field] ?? [];
  }

  clearError(field: string): void {
    if (this.fieldErrors[field]) {
      const { [field]: _removed, ...rest } = this.fieldErrors;
      this.fieldErrors = rest;
    }
  }

  submit(): void {
    if (this.submitting) return;

    this.errorSummary = [];
    this.fieldErrors = this.validate();
    if (Object.keys(this.fieldErrors).length > 0) {
      this.errorSummary = ['Please fix the highlighted fields and try again.'];
      return;
    }

    this.submitting = true;
    const request = this.editId !== null
      ? this.propertyService.update(this.editId, this.buildPayload())
      : this.propertyService.create(this.buildPayload());
    request.subscribe({
      next: saved => {
        const id = (saved.id ?? this.editId)!;
        this.syncImages(id).then(failures => this.finishSave(id, failures));
      },
      error: (err: HttpErrorResponse) => {
        this.submitting = false;
        this.handleError(err);
      }
    });
  }

  cancel(): void {
    this.router.navigate([this.isEdit ? '/properties-list' : '/dashboard-index']);
  }

  // Removes dropped photos, then uploads new ones one at a time so a single bad
  // file doesn't block the rest. Returns a message for each one that failed.
  private async syncImages(id: number): Promise<string[]> {
    const failures: string[] = [];

    for (const url of this.removedImages) {
      try {
        await firstValueFrom(this.propertyService.deleteImage(id, url));
      } catch {
        failures.push('A photo could not be removed.');
      }
    }

    const total = this.newImages.length;
    for (const [i, image] of this.newImages.entries()) {
      this.uploadStatus = `Uploading photos (${i + 1}/${total})...`;
      try {
        await firstValueFrom(this.propertyService.uploadImages(id, [image.file]));
      } catch (err) {
        failures.push(`${image.file.name}: ${this.uploadErrorMessage(err as HttpErrorResponse)}`);
      }
    }

    return failures;
  }

  private finishSave(id: number, failures: string[]): void {
    this.submitting = false;
    this.uploadStatus = null;

    if (failures.length === 0) {
      this.router.navigate(['/listing_details_01', id]);
      return;
    }

    // The property itself is saved, so don't resubmit as a new one: continue on the edit page.
    if (this.isEdit) {
      this.errorSummary = this.photoFailureSummary(failures);
      this.newImages.forEach(img => URL.revokeObjectURL(img.preview));
      this.newImages = [];
      this.loadProperty(id);
    } else {
      this.router.navigate(['/edit-property', id], { state: { photoFailures: failures } });
    }
  }

  private photoFailureSummary(failures: string[]): string[] {
    return ['The property was saved, but some photo changes did not go through:', ...failures];
  }

  private uploadErrorMessage(err: HttpErrorResponse): string {
    const fileErrors: string[] | undefined = err.error?.errors?.files;
    if (err.status === 400 && fileErrors?.length) return fileErrors[0];
    if (err.status === 401) return 'your session has expired.';
    if (err.status === 403) return 'you are not allowed to change this property.';
    if (err.status === 413) return 'the file is too large.';
    if (err.status === 0) return 'could not reach the server.';
    return 'upload failed.';
  }

  private loadProperty(id: number): void {
    this.loadingProperty = true;
    this.propertyService.getById(id).subscribe({
      next: p => {
        this.original = p;
        this.existingImages = p.imageUrls ?? [];
        this.removedImages = [];
        this.form = {
          title: p.title,
          description: p.description ?? '',
          listingTypeId: p.listingTypeId ?? null,
          listingMode: p.isForRent ? 'rent' : 'sale',
          price: p.price ?? null,
          priceRangeId: p.priceRangeId ?? null,
          agentId: p.agentId ?? null,
          squareFeet: p.squareFeet ?? null,
          bedrooms: p.bedrooms ?? null,
          bathrooms: p.bathrooms ?? null,
          garage: p.garage ?? null,
          yearBuilt: p.yearBuilt ?? null,
          floor: p.floor ?? null,
          address: p.address,
          locationId: p.locationId ?? null
        };
        for (const amenity of this.amenities) {
          amenity.selected = p[amenity.key] === true;
        }
        this.loadingProperty = false;
      },
      error: (err: HttpErrorResponse) => {
        this.loadingProperty = false;
        this.errorSummary = [
          err.status === 404
            ? 'This property no longer exists.'
            : 'Could not load this property. Please go back and try again.'
        ];
      }
    });
  }

  private loadLookups(): void {
    const fail = (what: string) => () => {
      this.lookupError = `Could not load ${what}. Please refresh the page and try again.`;
    };

    this.listingTypeService.getListingTypes().subscribe({
      next: types => (this.listingTypes = types),
      error: fail('categories')
    });
    this.locationService.getAll().subscribe({
      next: locations => (this.locations = locations),
      error: fail('locations')
    });
    this.agentService.getAll().subscribe({
      next: agents => (this.agents = agents),
      error: fail('agents')
    });
    this.priceRangeService.getAll().subscribe({
      next: ranges => (this.priceRanges = ranges),
      error: fail('price ranges')
    });
  }

  // Client-side checks mirror the API's rules for a fast first response.
  // The API stays the source of truth and its errors are shown too.
  private validate(): Record<string, string[]> {
    const f = this.form;
    const errors: Record<string, string[]> = {};
    const add = (field: string, message: string) => {
      (errors[field] ??= []).push(message);
    };

    if (!f.title.trim()) add('title', 'Title is required.');
    else if (f.title.trim().length > 255) add('title', 'Title must be 255 characters or fewer.');
    if (!f.address.trim()) add('address', 'Address is required.');
    if (f.listingTypeId == null) add('listingTypeId', 'Please choose a category.');
    if (f.listingMode == null) add('listingMode', 'Please choose for sale or for rent.');
    if (f.locationId == null) add('locationId', 'Please choose a location.');
    if (f.agentId == null) add('agentId', 'Please choose an agent.');
    if (f.price == null || f.price <= 0) add('price', 'Price must be greater than zero.');
    if (f.squareFeet != null && f.squareFeet < 0) add('squareFeet', 'Size cannot be negative.');
    if (f.yearBuilt != null && (f.yearBuilt < 1600 || f.yearBuilt > 2100)) {
      add('yearBuilt', 'Year built must be between 1600 and 2100.');
    }

    return errors;
  }

  private buildPayload(): Property {
    const f = this.form;
    const isForRent = f.listingMode === 'rent';

    // On edit, start from the loaded property: the API replaces the whole record,
    // so fields this form doesn't show (heating, furnishing, ...) must be sent back as-is.
    const base: Property = this.original ? { ...this.original } : ({} as Property);
    delete base.id;
    delete base.createdAt;
    delete base.imageUrls;

    const payload: Property = {
      ...base,
      title: f.title.trim(),
      address: f.address.trim(),
      description: f.description.trim() || undefined,
      locationId: f.locationId!,
      listingTypeId: f.listingTypeId!,
      agentId: f.agentId!,
      priceRangeId: f.priceRangeId ?? undefined,
      isForRent,
      price: f.price!,
      pricePeriod: isForRent ? 'month' : 'sale',
      squareFeet: f.squareFeet ?? undefined,
      bedrooms: f.bedrooms ?? undefined,
      bathrooms: f.bathrooms ?? undefined,
      garage: f.garage ?? undefined,
      yearBuilt: f.yearBuilt ?? undefined,
      floor: f.floor ?? undefined
    };

    for (const amenity of this.amenities) {
      if (this.isEdit) payload[amenity.key] = amenity.selected;
      else if (amenity.selected) payload[amenity.key] = true;
    }

    return payload;
  }

  private handleError(err: HttpErrorResponse): void {
    const serverErrors: Record<string, string[]> | undefined = err.error?.errors;

    if (err.status === 400 && serverErrors) {
      const inline: Record<string, string[]> = {};
      const summary: string[] = [];

      for (const [field, messages] of Object.entries(serverErrors)) {
        if (this.knownFields.has(field)) inline[field] = messages;
        else summary.push(...messages);
      }

      this.fieldErrors = inline;
      this.errorSummary = summary.length > 0
        ? summary
        : ['Please fix the highlighted fields and try again.'];
      return;
    }

    if (err.status === 401) {
      this.errorSummary = ['Your session has expired. Please sign in again.'];
    } else if (err.status === 403) {
      this.errorSummary = ['Your account is not allowed to save properties (agent role required).'];
    } else if (err.status === 0) {
      this.errorSummary = ['Could not reach the server. Check your connection and try again.'];
    } else {
      this.errorSummary = [err.error?.detail ?? err.error?.title ?? 'Something went wrong while saving the property.'];
    }
  }

  private emptyForm(): AddPropertyForm {
    return {
      title: '',
      description: '',
      listingTypeId: null,
      listingMode: null,
      price: null,
      priceRangeId: null,
      agentId: null,
      squareFeet: null,
      bedrooms: null,
      bathrooms: null,
      garage: null,
      yearBuilt: null,
      floor: null,
      address: '',
      locationId: null
    };
  }
}
