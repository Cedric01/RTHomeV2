import { Component } from '@angular/core';
import { DashboardNavbarComponent } from "../../../components/dashboard-navbar/dashboard-navbar.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-membership',
    imports: [DashboardNavbarComponent, CommonModule],
    templateUrl: './membership.component.html'
})
export class MembershipComponent {
  plans = [
    {
      name: 'FREE PLAN',
      price: 0,
      period: 'per user/month',
      features: ['60-day chat history', 'Basic widget customization', 'Ticketing system (Disabled)', 'Data security (Disabled)'],
      active: false,
    },
    {
      name: 'Standard',
      price: 12,
      period: 'per user/month',
      features: ['60-day chat history', 'Basic widget customization', 'Ticketing system', 'Data security (Disabled)'],
      active: true,
    },
    {
      name: 'BUSINESS',
      price: 39,
      period: 'per user/month',
      features: ['60-day chat history', 'Basic widget customization', 'Ticketing system', 'Data security'],
      active: false,
    }
  ];

}
