import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DashboardNavbarComponent } from '../../../components/dashboard-navbar/dashboard-navbar.component';
import { PropertyService } from '../../../service/property.service';
import { PropertySummary } from '../../../models/property';

@Component({
    selector: 'app-dashboard-index',
    imports: [DashboardNavbarComponent, CommonModule, RouterLink],
    templateUrl: './dashboard-index.component.html'
})
export class DashboardIndexComponent implements OnInit {
  summary: PropertySummary | null = null;
  // A plain field (not a getter): the template loops over it, and a getter would hand
  // back brand-new objects on every change-detection pass, rebuilding the cards each time.
  cards: Array<{ icon: string; title: string; value: string }> = this.buildCards();
  loading = true;
  loadError = false;

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.loadError = false;
    this.propertyService.getMySummary().subscribe({
      next: summary => {
        this.summary = summary;
        this.cards = this.buildCards();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.loadError = true;
      }
    });
  }

  private buildCards(): Array<{ icon: string; title: string; value: string }> {
    const s = this.summary;
    const show = (n: number | undefined) => (s ? String(n ?? 0) : '–');
    return [
      { icon: 'assets/dashboard-images/icon/icon_12.svg', title: 'All Properties', value: show(s?.total) },
      { icon: 'assets/dashboard-images/icon/icon_13.svg', title: 'Active', value: show(s?.active) },
      { icon: 'assets/dashboard-images/icon/icon_sold.svg', title: 'Sold', value: show(s?.sold) },
      { icon: 'assets/dashboard-images/icon/icon_key.svg', title: 'Rented', value: show(s?.rented) }
    ];
  }
}
