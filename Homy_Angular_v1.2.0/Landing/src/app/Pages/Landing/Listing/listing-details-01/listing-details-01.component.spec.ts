import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetails01Component } from './listing-details-01.component';

describe('ListingDetails01Component', () => {
  let component: ListingDetails01Component;
  let fixture: ComponentFixture<ListingDetails01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingDetails01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingDetails01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
