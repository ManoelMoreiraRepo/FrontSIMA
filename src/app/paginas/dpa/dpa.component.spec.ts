import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpaComponent } from './dpa.component';

describe('DpaComponent', () => {
  let component: DpaComponent;
  let fixture: ComponentFixture<DpaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DpaComponent]
    });
    fixture = TestBed.createComponent(DpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
