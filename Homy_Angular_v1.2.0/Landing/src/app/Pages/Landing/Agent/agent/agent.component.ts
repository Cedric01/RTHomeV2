import AOS from 'aos';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Navbar6Component } from "../../../../layout/navbar-6/navbar-6.component";
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-agent',
    imports: [Navbar6Component, FancyBannerTwoComponent, Footer5Component, CommonModule, NgSelectModule, RouterLink],
    templateUrl: './agent.component.html'
})
export class AgentComponent {
  categories = [
    { value: '1', label: 'Apartments' }, { value: '2', label: 'Condos' },
    { value: '3', label: 'Houses' }, { value: '4', label: 'Industrial' },
    { value: '6', label: 'Villas' }
  ];

  location = [
    { value: '1', label: 'Dhanmondi, Dhaka' }, { value: '2', label: 'Acapulco, Mexico' },
    { value: '3', label: 'Berlin, Germany' }, { value: '4', label: 'Cannes, France' },
    { value: '6', label: 'Delhi, India' }, { value: '7', label: 'Giza, Egypt' },
    { value: '8', label: 'Havana, Cuba' }
  ];

  options = [
    { value: '1', label: 'Popular' }, { value: '2', label: 'Best Seller' },
    { value: '3', label: 'Price Low' }, { value: '4', label: 'Price High' }
  ];
  agents = [
    { name: 'Chris Matial', img: 'assets/images/agent/img_07.jpg', listing: 7, delay: '', role: 'Agent', link: 'agent_details.html' },
    { name: 'Mark Filo', img: 'assets/images/agent/img_08.jpg', listing: 3, delay: '0.1s', role: 'Agent', link: 'agent_details.html' },
    { name: 'Zubayer Hasan', img: 'assets/images/agent/img_09.jpg', listing: 4, delay: '0.2s', role: 'Agent', link: 'agent_details.html' },
    { name: 'Jannatul Ferdaus', img: 'assets/images/agent/img_10.jpg', listing: 2, delay: '0.3s', role: 'Agent', link: 'agent_details.html' },
    { name: 'Chris Matial', img: 'assets/images/agent/img_11.jpg', listing: 7, delay: '', role: 'Agent', link: 'agent_details.html' },
    { name: 'Mark Filo', img: 'assets/images/agent/img_12.jpg', listing: 3, delay: '0.1s', role: 'Agent', link: 'agent_details.html' },
    { name: 'Zubayer Hasan', img: 'assets/images/agent/img_13.jpg', listing: 4, delay: '0.2s', role: 'Agent', link: 'agent_details.html' },
    { name: 'Jannatul Ferdaus', img: 'assets/images/agent/img_14.jpg', listing: 2, delay: '0.3s', role: 'Agent', link: 'agent_details.html' },
    { name: 'Chris Matial', img: 'assets/images/agent/img_15.jpg', listing: 7, delay: '', role: 'Agent', link: 'agent_details.html' },
    { name: 'Mark Filo', img: 'assets/images/agent/img_16.jpg', listing: 3, delay: '0.1s', role: 'Agent', link: 'agent_details.html' },
    { name: 'Zubayer Hasan', img: 'assets/images/agent/img_17.jpg', listing: 4, delay: '0.2s', role: 'Agent', link: 'agent_details.html' },
    { name: 'Jannatul Ferdaus', img: 'assets/images/agent/img_18.jpg', listing: 2, delay: '0.3s', role: 'Agent', link: 'agent_details.html' },
  ];
  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({ duration: 800, easing: 'ease', once: true, mirror: false });
    }
  }
}
