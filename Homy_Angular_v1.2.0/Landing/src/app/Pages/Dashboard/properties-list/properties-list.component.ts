import { Component } from '@angular/core';
import { DashboardNavbarComponent } from "../../../components/dashboard-navbar/dashboard-navbar.component";
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
    selector: 'app-properties-list',
    imports: [DashboardNavbarComponent, CommonModule, NgSelectModule],
    templateUrl: './properties-list.component.html'
})
export class PropertiesListComponent {
  properties = [
    {
      title: 'Galaxy Flat',
      date: '13 Jan, 2023',
      views: 1210,
      status: 'Active',
      price: '$32,800',
      address: 'Mirpur 10, Dhaka, BD',
      image: 'assets/dashboard-images/img_01.jpg',
      actions: ['View', 'Share', 'Edit', 'Delete']
    },
    {
      title: 'White House villa',
      date: '09 Jan, 2023',
      views: 0,
      status: 'Pending',
      price: '$42,130',
      address: 'Ranchview, California, USA',
      image: 'assets/dashboard-images/img_02.jpg',
      actions: ['View', 'Share', 'Edit', 'Delete']
    },
    {
      title: 'Luxury villa in Dal lake',
      date: '17 Oct, 2022',
      views: 0,
      status: 'Processing',
      price: '$2,370/m',
      address: 'Muza link road, CA, USA',
      image: 'assets/dashboard-images/img_03.jpg',
      actions: ['View', 'Share', 'Edit', 'Delete']
    },
    {
      title: 'Wooden World',
      date: '23 Sep, 2022',
      views: 970,
      status: 'Active',
      price: '$63,300',
      address: 'Board Baxar, California, USA',
      image: 'assets/dashboard-images/img_04.jpg',
      actions: ['View', 'Share', 'Edit', 'Delete']
    },
    {
      title: 'Orkit Villa',
      date: '15 Aug, 2022',
      views: 2320,
      status: 'Active',
      price: '$72,000',
      address: 'Green Road, Uttara, BD',
      image: 'assets/dashboard-images/img_05.jpg',
      actions: ['View', 'Share', 'Edit', 'Delete']
    }
  ];
  dropdownIndex: number | null = null;
  short = [
    { value: '1', label: 'Newest' }, { value: '2', label: 'Best Seller' }, { value: '3', label: 'Best Match' },
    { value: '4', label: 'Price Low' }, { value: '6', label: 'Price High' }
  ];
  toggleDropdown(index: number): void {

    if (this.dropdownIndex === index) {
      this.dropdownIndex = null;
    } else {

      this.dropdownIndex = index;
    }
  }
}
