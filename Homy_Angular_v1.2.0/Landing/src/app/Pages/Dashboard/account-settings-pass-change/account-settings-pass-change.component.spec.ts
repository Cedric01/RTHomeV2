import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingsPassChangeComponent } from './account-settings-pass-change.component';

describe('AccountSettingsPassChangeComponent', () => {
  let component: AccountSettingsPassChangeComponent;
  let fixture: ComponentFixture<AccountSettingsPassChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountSettingsPassChangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSettingsPassChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
