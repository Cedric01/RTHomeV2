import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog01Component } from './blog-01.component';

describe('Blog01Component', () => {
  let component: Blog01Component;
  let fixture: ComponentFixture<Blog01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blog01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blog01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
