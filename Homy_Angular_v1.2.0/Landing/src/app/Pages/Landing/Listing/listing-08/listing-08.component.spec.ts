import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listing08Component } from './listing-08.component';

describe('Listing08Component', () => {
  let component: Listing08Component;
  let fixture: ComponentFixture<Listing08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listing08Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listing08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
