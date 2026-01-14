import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listing09Component } from './listing-09.component';

describe('Listing09Component', () => {
  let component: Listing09Component;
  let fixture: ComponentFixture<Listing09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listing09Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listing09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
