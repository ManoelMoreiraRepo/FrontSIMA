import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadomainComponent } from './empleadomain.component';

describe('EmpleadomainComponent', () => {
  let component: EmpleadomainComponent;
  let fixture: ComponentFixture<EmpleadomainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadomainComponent]
    });
    fixture = TestBed.createComponent(EmpleadomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
