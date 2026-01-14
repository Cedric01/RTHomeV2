import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUs1Component } from './about-us-1.component';

describe('AboutUs1Component', () => {
  let component: AboutUs1Component;
  let fixture: ComponentFixture<AboutUs1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUs1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
