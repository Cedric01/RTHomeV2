import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TooltipService } from './service/tooltip.service';
import { AuthService } from '@auth0/auth0-angular';
import { LoginModalComponent } from './components/login-modal/login-modal.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, LoginModalComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Homy';

  constructor(
    private tooltipService: TooltipService,
    private auth: AuthService,
    private router: Router
  ) {
    this.auth.appState$.subscribe(appState => {
      if (appState?.target) {
        this.router.navigateByUrl(appState.target);
      }
    });
  }

  ngAfterViewInit(): void {
    this.tooltipService.initTooltips();
  }
}
