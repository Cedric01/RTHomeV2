import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listing11Component } from './listing-11.component';

describe('Listing11Component', () => {
  let component: Listing11Component;
  let fixture: ComponentFixture<Listing11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listing11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listing11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
