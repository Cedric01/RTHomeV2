import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackSectionOneComponent } from './feedback-section-one.component';

describe('FeedbackSectionOneComponent', () => {
  let component: FeedbackSectionOneComponent;
  let fixture: ComponentFixture<FeedbackSectionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackSectionOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackSectionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
