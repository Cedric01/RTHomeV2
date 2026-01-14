import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TooltipService } from './service/tooltip.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Homy';
  constructor(private tooltipService: TooltipService) { } // Inject TooltipService

  // Initialize tooltips when the view is fully loaded
  ngAfterViewInit(): void {
    this.tooltipService.initTooltips(); // Initialize tooltips after view load
  }
}
