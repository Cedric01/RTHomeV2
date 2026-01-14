import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetails03Component } from './listing-details-03.component';

describe('ListingDetails03Component', () => {
  let component: ListingDetails03Component;
  let fixture: ComponentFixture<ListingDetails03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingDetails03Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingDetails03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
