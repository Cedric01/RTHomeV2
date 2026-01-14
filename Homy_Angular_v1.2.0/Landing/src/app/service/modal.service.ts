// modal.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalSubject = new Subject<boolean>();
  private backdropSubject = new Subject<boolean>();

  // Observables for modal and backdrop
  modalState$ = this.modalSubject.asObservable();
  backdropState$ = this.backdropSubject.asObservable();

  // Method to show the modal
  openModal() {
    this.modalSubject.next(true);
    this.backdropSubject.next(true); // Show backdrop when modal opens
  }

  // Method to close the modal
  closeModal() {
    this.modalSubject.next(false);
    this.backdropSubject.next(false); // Hide backdrop when modal closes
  }
}
