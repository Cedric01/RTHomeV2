import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listing07Component } from './listing-07.component';

describe('Listing07Component', () => {
  let component: Listing07Component;
  let fixture: ComponentFixture<Listing07Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listing07Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listing07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
