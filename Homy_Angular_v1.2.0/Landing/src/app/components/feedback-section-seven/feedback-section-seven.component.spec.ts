import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackSectionSevenComponent } from './feedback-section-seven.component';

describe('FeedbackSectionSevenComponent', () => {
  let component: FeedbackSectionSevenComponent;
  let fixture: ComponentFixture<FeedbackSectionSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackSectionSevenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackSectionSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
