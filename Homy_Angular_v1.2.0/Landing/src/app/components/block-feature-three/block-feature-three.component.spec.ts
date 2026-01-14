import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BLockFeatureThreeComponent } from './block-feature-three.component';

describe('BLockFeatureThreeComponent', () => {
  let component: BLockFeatureThreeComponent;
  let fixture: ComponentFixture<BLockFeatureThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BLockFeatureThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BLockFeatureThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
