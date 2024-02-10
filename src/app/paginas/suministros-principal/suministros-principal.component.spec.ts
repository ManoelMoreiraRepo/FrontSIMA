import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuministrosPrincipalComponent } from './suministros-principal.component';

describe('SuministrosPrincipalComponent', () => {
  let component: SuministrosPrincipalComponent;
  let fixture: ComponentFixture<SuministrosPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuministrosPrincipalComponent]
    });
    fixture = TestBed.createComponent(SuministrosPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
