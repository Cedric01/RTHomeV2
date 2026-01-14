import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index3Component } from './index-3.component';

describe('Index3Component', () => {
  let component: Index3Component;
  let fixture: ComponentFixture<Index3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
