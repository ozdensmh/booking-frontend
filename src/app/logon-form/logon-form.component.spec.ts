import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogonFormComponent } from './logon-form.component';

describe('LogonFormComponent', () => {
  let component: LogonFormComponent;
  let fixture: ComponentFixture<LogonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogonFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
