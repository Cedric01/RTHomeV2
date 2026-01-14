import { Component } from '@angular/core';
import { ModalService } from '../../service/modal.service';

@Component({
    selector: 'app-fancy-banner-two',
    imports: [],
    templateUrl: './fancy-banner-two.component.html'
})
export class FancyBannerTwoComponent {

  constructor(private modalService: ModalService) { }

  openModal() {
    this.modalService.openModal();
  }
}
