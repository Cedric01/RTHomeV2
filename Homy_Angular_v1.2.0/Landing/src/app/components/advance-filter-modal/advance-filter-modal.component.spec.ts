import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceFilterModalComponent } from './advance-filter-modal.component';

describe('AdvanceFilterModalComponent', () => {
  let component: AdvanceFilterModalComponent;
  let fixture: ComponentFixture<AdvanceFilterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceFilterModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceFilterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
