import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsimportacionComponent } from './logsimportacion.component';

describe('LogsimportacionComponent', () => {
  let component: LogsimportacionComponent;
  let fixture: ComponentFixture<LogsimportacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogsimportacionComponent]
    });
    fixture = TestBed.createComponent(LogsimportacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
