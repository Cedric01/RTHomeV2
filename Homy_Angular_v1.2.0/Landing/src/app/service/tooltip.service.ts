import { Injectable, Inject, DOCUMENT } from '@angular/core';


declare var bootstrap: any;  // Declaring Bootstrap as a global variable to access JS

@Injectable({
  providedIn: 'root' // This ensures the service is available throughout the app
})
export class TooltipService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  // Method to initialize all tooltips on page load
  initTooltips(): void {
    const tooltipTriggerList = [].slice.call(this.document.querySelectorAll('[data-bs-toggle="tooltip"]'));

    tooltipTriggerList.map(tooltipTriggerEl => {
      new bootstrap.Tooltip(tooltipTriggerEl); // Initializes each element as a Tooltip
    });
  }
}
