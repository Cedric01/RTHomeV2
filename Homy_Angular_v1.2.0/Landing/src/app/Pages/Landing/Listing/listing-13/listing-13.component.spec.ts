import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listing13Component } from './listing-13.component';

describe('Listing13Component', () => {
  let component: Listing13Component;
  let fixture: ComponentFixture<Listing13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listing13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listing13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
