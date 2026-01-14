import { Component } from '@angular/core';
import { DashboardNavbarComponent } from "../../../components/dashboard-navbar/dashboard-navbar.component";
import { CommonModule } from '@angular/common';
declare var bootstrap: any;

@Component({
    selector: 'app-saved-search',
    imports: [DashboardNavbarComponent, CommonModule],
    templateUrl: './saved-search.component.html'
})
export class SavedSearchComponent {
  properties = [
    { id: 1, title: 'Galaxy Family Home', date: '13 Sep, 2023' },
    { id: 2, title: 'Big Apartments', date: '27 Aug, 2023' },
    { id: 3, title: 'Villa in California with pool', date: '16 Jun, 2023' },
    { id: 4, title: 'Small Houses', date: '4 Apr, 2023' },
    { id: 5, title: 'Flat for Rent USA', date: '14 Feb, 2023' },
    { id: 6, title: 'Apartments Near Market', date: '8 Jan, 2023' },
    { id: 7, title: 'Home for Rent', date: '15 Dec, 2022' },
  ];

  ngAfterViewInit(): void {
    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
  deleteRecord(recordId: number): void {
    const confirmation = confirm('Are you sure you want to delete this record?');
    if (confirmation) {
      
      this.properties = this.properties.filter(property => property.id !== recordId);
      console.log(`Record with ID ${recordId} deleted`);
    }
  }
}
