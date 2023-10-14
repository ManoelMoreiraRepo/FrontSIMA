import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoaccesoComponent } from './puntoacceso.component';

describe('PuntoaccesoComponent', () => {
  let component: PuntoaccesoComponent;
  let fixture: ComponentFixture<PuntoaccesoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuntoaccesoComponent]
    });
    fixture = TestBed.createComponent(PuntoaccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
