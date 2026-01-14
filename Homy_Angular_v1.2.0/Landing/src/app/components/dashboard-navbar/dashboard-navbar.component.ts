import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
    selector: 'app-dashboard-navbar',
    imports: [RouterModule, RouterLink],
    templateUrl: './dashboard-navbar.component.html'
})
export class DashboardNavbarComponent {

  @Input() Title: string | undefined;
}
