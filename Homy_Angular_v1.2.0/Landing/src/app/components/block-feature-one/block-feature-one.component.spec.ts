import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BLockFeatureOneComponent } from './block-feature-one.component';

describe('BLockFeatureOneComponent', () => {
  let component: BLockFeatureOneComponent;
  let fixture: ComponentFixture<BLockFeatureOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BLockFeatureOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BLockFeatureOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
