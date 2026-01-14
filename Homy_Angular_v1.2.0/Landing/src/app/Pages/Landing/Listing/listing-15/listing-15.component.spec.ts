import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listing15Component } from './listing-15.component';

describe('Listing15Component', () => {
  let component: Listing15Component;
  let fixture: ComponentFixture<Listing15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listing15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listing15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
