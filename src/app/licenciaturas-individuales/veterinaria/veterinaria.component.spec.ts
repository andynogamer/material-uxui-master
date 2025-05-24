import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinariaComponent } from './veterinaria.component';

describe('VeterinariaComponent', () => {
  let component: VeterinariaComponent;
  let fixture: ComponentFixture<VeterinariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinariaComponent]
    });
    fixture = TestBed.createComponent(VeterinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
