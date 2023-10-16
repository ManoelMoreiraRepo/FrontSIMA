import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrhhComponent } from './rrhh.component';

describe('RrhhComponent', () => {
  let component: RrhhComponent;
  let fixture: ComponentFixture<RrhhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RrhhComponent]
    });
    fixture = TestBed.createComponent(RrhhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
