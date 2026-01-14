import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listing14Component } from './listing-14.component';

describe('Listing14Component', () => {
  let component: Listing14Component;
  let fixture: ComponentFixture<Listing14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listing14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listing14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
