import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listing17Component } from './listing-17.component';

describe('Listing17Component', () => {
  let component: Listing17Component;
  let fixture: ComponentFixture<Listing17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listing17Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listing17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
