import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenciaturasPageComponent } from './licenciaturas-page.component';

describe('LicenciaturasPageComponent', () => {
  let component: LicenciaturasPageComponent;
  let fixture: ComponentFixture<LicenciaturasPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LicenciaturasPageComponent]
    });
    fixture = TestBed.createComponent(LicenciaturasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
