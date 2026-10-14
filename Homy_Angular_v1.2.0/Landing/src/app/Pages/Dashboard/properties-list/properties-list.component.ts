import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { DashboardNavbarComponent } from "../../../components/dashboard-navbar/dashboard-navbar.component";
import { PropertyService } from '../../../service/property.service';
import { Property } from '../../../models/property';

type PageItem = number | 'gap';

@Component({
    selector: 'app-properties-list',
    imports: [DashboardNavbarComponent, CommonModule, RouterLink],
    templateUrl: './properties-list.component.html'
})
export class PropertiesListComponent implements OnInit {
  properties: Property[] = [];
  page = 1;
  readonly pageSize = 10;
  total = 0;

  loading = false;
  loadError: string | null = null;
  notice: string | null = null;

  dropdownIndex: number | null = null;

  pendingDelete: Property | null = null;
  deleting = false;
  deleteError: string | null = null;

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.load(1);
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.total / this.pageSize));
  }

  get firstShown(): number {
    return this.properties.length === 0 ? 0 : (this.page - 1) * this.pageSize + 1;
  }

  get lastShown(): number {
    return this.properties.length === 0 ? 0 : this.firstShown + this.properties.length - 1;
  }

  // First, last and the pages around the current one; the rest collapse to a gap.
  get pageItems(): PageItem[] {
    const last = this.totalPages;
    const keep = new Set<number>([1, last, this.page - 1, this.page, this.page + 1]);
    const pages = [...keep].filter(n => n >= 1 && n <= last).sort((a, b) => a - b);

    const items: PageItem[] = [];
    pages.forEach((n, i) => {
      if (i > 0 && n - pages[i - 1] > 1) items.push('gap');
      items.push(n);
    });
    return items;
  }

  goToPage(target: number): void {
    if (target < 1 || target > this.totalPages || target === this.page || this.loading) return;
    this.load(target);
  }

  load(page: number): void {
    this.loading = true;
    this.loadError = null;
    this.dropdownIndex = null;

    this.propertyService.getMyPage(page, this.pageSize).subscribe({
      next: ({ items, total }) => {
        // The last row of the last page was just deleted: step back one page.
        if (items.length === 0 && total > 0 && page > 1) {
          this.load(Math.ceil(total / this.pageSize));
          return;
        }
        this.properties = items;
        this.total = total;
        this.page = page;
        this.loading = false;
      },
      error: (err: HttpErrorResponse) => {
        this.loading = false;
        this.loadError = err.status === 0
          ? 'Could not reach the server. Check your connection and try again.'
          : 'Could not load properties. Please try again.';
      }
    });
  }

  toggleDropdown(index: number): void {
    this.dropdownIndex = this.dropdownIndex === index ? null : index;
  }

  statusLabel(status?: string): string {
    if (!status) return 'Active';
    return status.charAt(0) + status.slice(1).toLowerCase();
  }

  askDelete(property: Property): void {
    this.dropdownIndex = null;
    this.deleteError = null;
    this.pendingDelete = property;
  }

  cancelDelete(): void {
    if (this.deleting) return;
    this.pendingDelete = null;
    this.deleteError = null;
  }

  confirmDelete(): void {
    const property = this.pendingDelete;
    if (!property?.id || this.deleting) return;

    this.deleting = true;
    this.deleteError = null;
    this.propertyService.delete(property.id).subscribe({
      next: () => {
        this.deleting = false;
        this.pendingDelete = null;
        this.notice = `"${property.title}" was deleted.`;
        this.load(this.page);
      },
      error: (err: HttpErrorResponse) => {
        this.deleting = false;
        if (err.status === 401) this.deleteError = 'Your session has expired. Please sign in again.';
        else if (err.status === 403) this.deleteError = 'Your account is not allowed to delete properties (agent role required).';
        else if (err.status === 404) {
          // Already gone (deleted elsewhere): just refresh.
          this.pendingDelete = null;
          this.notice = 'That property no longer exists.';
          this.load(this.page);
        }
        else if (err.status === 0) this.deleteError = 'Could not reach the server. Check your connection and try again.';
        else this.deleteError = err.error?.detail ?? err.error?.title ?? 'Something went wrong while deleting the property.';
      }
    });
  }
}
