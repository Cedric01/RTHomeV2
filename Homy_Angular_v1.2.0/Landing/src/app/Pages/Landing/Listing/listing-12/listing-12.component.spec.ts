import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listing12Component } from './listing-12.component';

describe('Listing12Component', () => {
  let component: Listing12Component;
  let fixture: ComponentFixture<Listing12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listing12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listing12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
