import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSuccesDialogComponent } from './register-succes-dialog.component';

describe('RegisterSuccesDialogComponent', () => {
  let component: RegisterSuccesDialogComponent;
  let fixture: ComponentFixture<RegisterSuccesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSuccesDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterSuccesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
