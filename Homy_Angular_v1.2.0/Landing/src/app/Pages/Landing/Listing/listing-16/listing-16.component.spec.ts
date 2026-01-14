import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listing16Component } from './listing-16.component';

describe('Listing16Component', () => {
  let component: Listing16Component;
  let fixture: ComponentFixture<Listing16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listing16Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listing16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
