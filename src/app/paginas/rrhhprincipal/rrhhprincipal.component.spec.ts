import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrhhprincipalComponent } from './rrhhprincipal.component';

describe('RrhhprincipalComponent', () => {
  let component: RrhhprincipalComponent;
  let fixture: ComponentFixture<RrhhprincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RrhhprincipalComponent]
    });
    fixture = TestBed.createComponent(RrhhprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
