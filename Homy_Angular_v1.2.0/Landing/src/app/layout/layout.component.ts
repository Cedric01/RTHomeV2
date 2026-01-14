import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModalService } from '../service/modal.service';

@Component({
    selector: 'app-layout',
    imports: [RouterOutlet, CommonModule],
    templateUrl: './layout.component.html'
})
export class LayoutComponent {
  scrollVisible: boolean = false;


  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 100) {
      this.scrollVisible = true;
    } else {
      this.scrollVisible = false;
    }
  }


  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  isVisible = false;
  isBackdropVisible = false; // Track backdrop visibility
  private modalSubscription!: Subscription;
  private backdropSubscription!: Subscription;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    // Subscribe to modal state changes
    this.modalSubscription = this.modalService.modalState$.subscribe(
      (state) => {
        this.isVisible = state;
      }
    );

    // Subscribe to backdrop state changes
    this.backdropSubscription = this.modalService.backdropState$.subscribe(
      (state) => {
        this.isBackdropVisible = state;
      }
    );
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    if (this.modalSubscription) {
      this.modalSubscription.unsubscribe();
    }
    if (this.backdropSubscription) {
      this.backdropSubscription.unsubscribe();
    }
  }

  closeModal() {
    this.modalService.closeModal();
  }
}
