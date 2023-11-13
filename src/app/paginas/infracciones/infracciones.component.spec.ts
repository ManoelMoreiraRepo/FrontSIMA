import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraccionesComponent } from './infracciones.component';

describe('InfraccionesComponent', () => {
  let component: InfraccionesComponent;
  let fixture: ComponentFixture<InfraccionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfraccionesComponent]
    });
    fixture = TestBed.createComponent(InfraccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
