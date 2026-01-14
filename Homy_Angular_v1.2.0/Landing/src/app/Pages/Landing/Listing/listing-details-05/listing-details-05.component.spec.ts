import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetails05Component } from './listing-details-05.component';

describe('ListingDetails05Component', () => {
  let component: ListingDetails05Component;
  let fixture: ComponentFixture<ListingDetails05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingDetails05Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingDetails05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
