import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index6Component } from './index-6.component';

describe('Index6Component', () => {
  let component: Index6Component;
  let fixture: ComponentFixture<Index6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
