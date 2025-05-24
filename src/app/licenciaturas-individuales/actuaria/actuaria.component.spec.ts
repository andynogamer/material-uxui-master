import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuariaComponent } from './actuaria.component';

describe('ActuariaComponent', () => {
  let component: ActuariaComponent;
  let fixture: ComponentFixture<ActuariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActuariaComponent]
    });
    fixture = TestBed.createComponent(ActuariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
