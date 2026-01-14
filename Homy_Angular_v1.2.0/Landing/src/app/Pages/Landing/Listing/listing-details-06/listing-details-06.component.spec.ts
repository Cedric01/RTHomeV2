import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetails06Component } from './listing-details-06.component';

describe('ListingDetails06Component', () => {
  let component: ListingDetails06Component;
  let fixture: ComponentFixture<ListingDetails06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingDetails06Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingDetails06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
