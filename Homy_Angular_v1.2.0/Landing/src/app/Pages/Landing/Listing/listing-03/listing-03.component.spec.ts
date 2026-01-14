import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listing03Component } from './listing-03.component';

describe('Listing03Component', () => {
  let component: Listing03Component;
  let fixture: ComponentFixture<Listing03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listing03Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listing03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
