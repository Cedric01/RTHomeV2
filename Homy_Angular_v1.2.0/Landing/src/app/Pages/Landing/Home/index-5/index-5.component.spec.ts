import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index5Component } from './index-5.component';

describe('Index5Component', () => {
  let component: Index5Component;
  let fixture: ComponentFixture<Index5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
