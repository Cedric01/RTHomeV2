import { Component, HostListener } from '@angular/core';
import { MenuListComponent } from "../../components/menu-list/menu-list.component";
import { CommonModule } from '@angular/common';
import { ModalService } from '../../service/modal.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-navbar-3',
    imports: [MenuListComponent, CommonModule, RouterLink],
    templateUrl: './navbar-3.component.html'
})
export class Navbar3Component {
  headerClass = 'theme-main-menu menu-overlay menu-style-three sticky-menu';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.pageYOffset > 100) {
      this.headerClass = 'theme-main-menu menu-overlay menu-style-three sticky-menu fixed';
    } else {
      this.headerClass = 'theme-main-menu menu-overlay menu-style-three sticky-menu';
    }
  }

  constructor(private modalService: ModalService) { }

  openModal() {
    this.modalService.openModal();
  }
}
