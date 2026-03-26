import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-layout',
    imports: [RouterOutlet, NgStyle],
    templateUrl: './layout.component.html'
})
export class LayoutComponent {
  scrollVisible: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollVisible = window.scrollY > 100;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
