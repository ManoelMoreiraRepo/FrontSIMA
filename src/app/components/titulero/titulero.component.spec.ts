import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituleroComponent } from './titulero.component';

describe('TituleroComponent', () => {
  let component: TituleroComponent;
  let fixture: ComponentFixture<TituleroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TituleroComponent]
    });
    fixture = TestBed.createComponent(TituleroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
