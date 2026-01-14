import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listing04Component } from './listing-04.component';

describe('Listing04Component', () => {
  let component: Listing04Component;
  let fixture: ComponentFixture<Listing04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listing04Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listing04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
