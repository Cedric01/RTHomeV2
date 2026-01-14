import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar7Component } from './navbar-7.component';

describe('Navbar7Component', () => {
  let component: Navbar7Component;
  let fixture: ComponentFixture<Navbar7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navbar7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
