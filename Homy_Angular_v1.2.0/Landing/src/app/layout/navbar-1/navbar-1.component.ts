import { Component, HostListener } from '@angular/core';
import { MenuListComponent } from "../../components/menu-list/menu-list.component";
import { CommonModule, AsyncPipe } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { ModalService } from '../../service/modal.service';

@Component({
    selector: 'app-navbar-1',
    imports: [MenuListComponent, CommonModule, AsyncPipe, RouterModule, RouterLink],
    templateUrl: './navbar-1.component.html'
})
export class Navbar1Component {
  headerClass = 'theme-main-menu menu-overlay menu-style-one sticky-menu';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.pageYOffset > 100) {
      this.headerClass = 'theme-main-menu menu-overlay menu-style-one sticky-menu fixed';
    } else {
      this.headerClass = 'theme-main-menu menu-overlay menu-style-one sticky-menu';
    }
  }

  constructor(public authService: AuthService, private modalService: ModalService) {}

  openModal(): void {
    this.modalService.openModal();
  }
}