import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listing02Component } from './listing-02.component';

describe('Listing02Component', () => {
  let component: Listing02Component;
  let fixture: ComponentFixture<Listing02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listing02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listing02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
