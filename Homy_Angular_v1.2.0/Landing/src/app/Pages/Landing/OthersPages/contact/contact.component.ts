import AOS from 'aos';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Navbar7Component } from "../../../../layout/navbar-7/navbar-7.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-contact',
    imports: [Navbar7Component, Footer5Component],
    templateUrl: './contact.component.html'
})
export class ContactComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) AOS.init({ duration: 800, easing: 'ease', once: true, mirror: false });
  }
}
