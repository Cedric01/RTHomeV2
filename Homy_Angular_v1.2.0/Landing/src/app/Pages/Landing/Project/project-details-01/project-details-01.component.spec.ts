import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetails01Component } from './project-details-01.component';

describe('ProjectDetails01Component', () => {
  let component: ProjectDetails01Component;
  let fixture: ComponentFixture<ProjectDetails01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDetails01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDetails01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
