import AOS from 'aos';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Navbar6Component } from "../../../../layout/navbar-6/navbar-6.component";
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterLink } from '@angular/router';
import { AgentService } from '../../../../service/agent.service';
import { PropertyService } from '../../../../service/property.service';

interface AgentCard {
  id: number;
  name: string;
  img: string;
  listing: number;
  role: string;
  link: string;
}

@Component({
    selector: 'app-agent',
    imports: [Navbar6Component, FancyBannerTwoComponent, Footer5Component, CommonModule, NgSelectModule, RouterLink],
    templateUrl: './agent.component.html'
})
export class AgentComponent implements OnInit {
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

  agents: AgentCard[] = [];
  private readonly fallbackImage = 'assets/images/agent/img_01.jpg';

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private agentService: AgentService,
    private propertyService: PropertyService
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({ duration: 800, easing: 'ease', once: true, mirror: false });
    }

    this.propertyService.getAll().subscribe({
      next: properties => {
        const countsByAgentId = new Map<number, number>();
        for (const property of properties) {
          countsByAgentId.set(property.agentId, (countsByAgentId.get(property.agentId) ?? 0) + 1);
        }

        this.agentService.getAll().subscribe({
          next: agents => {
            this.agents = agents.map(a => ({
              id: a.id,
              name: a.name,
              img: a.imageUrl || this.fallbackImage,
              listing: countsByAgentId.get(a.id) ?? 0,
              role: a.designation || 'Agent',
              link: `/agent_details/${a.id}`
            }));
          }
        });
      }
    });
  }
}
