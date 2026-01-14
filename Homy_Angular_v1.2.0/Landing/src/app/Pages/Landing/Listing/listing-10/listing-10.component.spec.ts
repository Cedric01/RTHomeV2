import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listing10Component } from './listing-10.component';

describe('Listing10Component', () => {
  let component: Listing10Component;
  let fixture: ComponentFixture<Listing10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listing10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listing10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
