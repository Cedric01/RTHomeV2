import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog02Component } from './blog-02.component';

describe('Blog02Component', () => {
  let component: Blog02Component;
  let fixture: ComponentFixture<Blog02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blog02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blog02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
