import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedSearchComponent } from './saved-search.component';

describe('SavedSearchComponent', () => {
  let component: SavedSearchComponent;
  let fixture: ComponentFixture<SavedSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
