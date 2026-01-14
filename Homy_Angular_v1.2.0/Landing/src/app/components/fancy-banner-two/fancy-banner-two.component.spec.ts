import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyBannerTwoComponent } from './fancy-banner-two.component';

describe('FancyBannerTwoComponent', () => {
  let component: FancyBannerTwoComponent;
  let fixture: ComponentFixture<FancyBannerTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FancyBannerTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FancyBannerTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
