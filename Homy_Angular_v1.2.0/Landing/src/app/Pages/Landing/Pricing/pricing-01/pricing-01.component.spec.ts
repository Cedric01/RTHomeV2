import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pricing01Component } from './pricing-01.component';

describe('Pricing01Component', () => {
  let component: Pricing01Component;
  let fixture: ComponentFixture<Pricing01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pricing01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pricing01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
