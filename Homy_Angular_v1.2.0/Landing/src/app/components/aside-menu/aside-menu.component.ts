import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
    selector: 'app-aside-menu',
    imports: [RouterModule, RouterLink],
    templateUrl: './aside-menu.component.html'
})
export class AsideMenuComponent {
  activeLink: string;

  constructor(private route: ActivatedRoute, public authService: AuthService) {
    this.activeLink = this.route.snapshot.routeConfig?.path || '';
  }
}
