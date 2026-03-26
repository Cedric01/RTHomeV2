import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ModalService } from '../../service/modal.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './login-modal.component.html'
})
export class LoginModalComponent implements OnInit, OnDestroy {
  isVisible = false;
  activeTab: 'login' | 'register' = 'login';

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  private subs = new Subscription();

  constructor(private modalService: ModalService, private authService: AuthService) {}

  ngOnInit(): void {
    this.subs.add(
      this.modalService.modalState$.subscribe(state => {
        this.isVisible = state;
        if (!state) this.loginForm.reset();
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  switchTab(tab: 'login' | 'register'): void {
    this.activeTab = tab;
  }

  onLogin(): void {
    if (this.loginForm.invalid) return;
    const email = this.loginForm.value.email ?? undefined;
    this.modalService.closeModal();
    this.authService.login(email);
  }

  onRegister(): void {
    this.modalService.closeModal();
    this.authService.register();
  }

  close(): void {
    this.modalService.closeModal();
  }
}
