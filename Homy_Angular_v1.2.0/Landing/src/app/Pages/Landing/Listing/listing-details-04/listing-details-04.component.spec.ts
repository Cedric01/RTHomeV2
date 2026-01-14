import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetails04Component } from './listing-details-04.component';

describe('ListingDetails04Component', () => {
  let component: ListingDetails04Component;
  let fixture: ComponentFixture<ListingDetails04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingDetails04Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingDetails04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
