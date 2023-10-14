import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparadorComponent } from './separador.component';

describe('SeparadorComponent', () => {
  let component: SeparadorComponent;
  let fixture: ComponentFixture<SeparadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeparadorComponent]
    });
    fixture = TestBed.createComponent(SeparadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
