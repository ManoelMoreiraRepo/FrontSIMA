import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsaadminComponent } from './bolsaadmin.component';

describe('BolsaadminComponent', () => {
  let component: BolsaadminComponent;
  let fixture: ComponentFixture<BolsaadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BolsaadminComponent]
    });
    fixture = TestBed.createComponent(BolsaadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
