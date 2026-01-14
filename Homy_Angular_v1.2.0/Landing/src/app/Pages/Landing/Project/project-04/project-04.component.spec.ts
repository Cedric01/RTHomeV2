import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project04Component } from './project-04.component';

describe('Project04Component', () => {
  let component: Project04Component;
  let fixture: ComponentFixture<Project04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Project04Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Project04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
