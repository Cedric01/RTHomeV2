import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listing01Component } from './listing-01.component';

describe('Listing01Component', () => {
  let component: Listing01Component;
  let fixture: ComponentFixture<Listing01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listing01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listing01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
