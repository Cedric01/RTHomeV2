import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index4Component } from './index-4.component';

describe('Index4Component', () => {
  let component: Index4Component;
  let fixture: ComponentFixture<Index4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
