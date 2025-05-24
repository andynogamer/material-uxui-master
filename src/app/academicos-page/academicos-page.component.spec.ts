import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicosPageComponent } from './academicos-page.component';

describe('AcademicosPageComponent', () => {
  let component: AcademicosPageComponent;
  let fixture: ComponentFixture<AcademicosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcademicosPageComponent]
    });
    fixture = TestBed.createComponent(AcademicosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
