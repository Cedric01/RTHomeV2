import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyBannerOneComponent } from './fancy-banner-one.component';

describe('FancyBannerOneComponent', () => {
  let component: FancyBannerOneComponent;
  let fixture: ComponentFixture<FancyBannerOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FancyBannerOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FancyBannerOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
