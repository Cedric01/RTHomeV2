import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetails02Component } from './listing-details-02.component';

describe('ListingDetails02Component', () => {
  let component: ListingDetails02Component;
  let fixture: ComponentFixture<ListingDetails02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingDetails02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingDetails02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
