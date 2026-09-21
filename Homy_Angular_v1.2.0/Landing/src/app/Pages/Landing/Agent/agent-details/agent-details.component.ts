import { Component, OnInit } from '@angular/core';
import { Navbar6Component } from "../../../../layout/navbar-6/navbar-6.component";
import { FancyBannerTwoComponent } from "../../../../components/fancy-banner-two/fancy-banner-two.component";
import { Footer5Component } from "../../../../layout/footer-5/footer-5.component";
import { CommonModule } from '@angular/common';
import { Lightbox, LightboxModule } from 'ngx-lightbox';
import { ModalService } from '../../../../service/modal.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AgentService } from '../../../../service/agent.service';
import { PropertyService } from '../../../../service/property.service';
import { Agent } from '../../../../models/agent';

interface ListingItem {
  type: string;
  tag: string;
  image: string;
  price: string;
  address: string;
}

@Component({
    selector: 'app-agent-details',
    imports: [Navbar6Component, FancyBannerTwoComponent, Footer5Component, CommonModule, LightboxModule, RouterLink],
    templateUrl: './agent-details.component.html'
})
export class AgentDetailsComponent implements OnInit {
  agent: Agent | null = null;
  items: ListingItem[] = [];
  activeFilter = '*';

  private readonly fallbackImage = 'assets/images/listing/img_18.jpg';

  openModal() {
    this.modalService.openModal();
  }
  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  isItemVisible(itemType: string): boolean {
    return this.activeFilter === '*' || this.activeFilter === itemType;
  }
  album: Array<{ src: string; caption: string; thumb: string }> = [];

  constructor(
    private lightbox: Lightbox,
    private modalService: ModalService,
    private route: ActivatedRoute,
    private agentService: AgentService,
    private propertyService: PropertyService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (!idParam) return;
    const id = Number(idParam);

    this.agentService.getById(id).subscribe({
      next: agent => (this.agent = agent),
      error: err => console.error(err)
    });

    this.propertyService.getAll().subscribe({
      next: properties => {
        const agentProperties = properties.filter(p => p.agentId === id);
        this.items = agentProperties.map(p => {
          const image = (p.imageUrls && p.imageUrls.length > 0) ? p.imageUrls[0] : this.fallbackImage;
          return {
            type: p.isForRent ? 'rent' : 'sell',
            tag: p.isForRent ? 'FOR RENT' : 'FOR SELL',
            image,
            price: p.isForRent
              ? '$' + Number(p.price).toLocaleString() + '/m'
              : '$' + Number(p.price).toLocaleString(),
            address: p.address
          };
        });
        this.album = agentProperties.flatMap(p =>
          (p.imageUrls && p.imageUrls.length > 0 ? p.imageUrls : [this.fallbackImage]).map(src => ({
            src, caption: p.title, thumb: src
          }))
        );
      },
      error: err => console.error(err)
    });
  }

  open(index: number): void {
    this.lightbox.open(this.album, index);
  }

  close(): void {
    this.lightbox.close();
  }
}
