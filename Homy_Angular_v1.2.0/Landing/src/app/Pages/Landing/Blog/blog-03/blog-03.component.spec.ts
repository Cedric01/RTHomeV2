import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog03Component } from './blog-03.component';

describe('Blog03Component', () => {
  let component: Blog03Component;
  let fixture: ComponentFixture<Blog03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blog03Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blog03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
