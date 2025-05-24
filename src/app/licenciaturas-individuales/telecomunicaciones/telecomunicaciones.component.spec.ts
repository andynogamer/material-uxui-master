import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecomunicacionesComponent } from './telecomunicaciones.component';

describe('TelecomunicacionesComponent', () => {
  let component: TelecomunicacionesComponent;
  let fixture: ComponentFixture<TelecomunicacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelecomunicacionesComponent]
    });
    fixture = TestBed.createComponent(TelecomunicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
