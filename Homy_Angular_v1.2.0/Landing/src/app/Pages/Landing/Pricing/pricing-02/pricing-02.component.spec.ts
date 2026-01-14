import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pricing02Component } from './pricing-02.component';

describe('Pricing02Component', () => {
  let component: Pricing02Component;
  let fixture: ComponentFixture<Pricing02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pricing02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pricing02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
