import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer6Component } from './footer-6.component';

describe('Footer6Component', () => {
  let component: Footer6Component;
  let fixture: ComponentFixture<Footer6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footer6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
