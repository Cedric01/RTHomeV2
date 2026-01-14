import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listing05Component } from './listing-05.component';

describe('Listing05Component', () => {
  let component: Listing05Component;
  let fixture: ComponentFixture<Listing05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listing05Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listing05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
