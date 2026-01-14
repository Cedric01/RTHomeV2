import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listing06Component } from './listing-06.component';

describe('Listing06Component', () => {
  let component: Listing06Component;
  let fixture: ComponentFixture<Listing06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listing06Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listing06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
