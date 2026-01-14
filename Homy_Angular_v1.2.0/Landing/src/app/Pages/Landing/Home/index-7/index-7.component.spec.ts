import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index7Component } from './index-7.component';

describe('Index7Component', () => {
  let component: Index7Component;
  let fixture: ComponentFixture<Index7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
