import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosPageComponent } from './alumnos-page.component';

describe('AlumnosPageComponent', () => {
  let component: AlumnosPageComponent;
  let fixture: ComponentFixture<AlumnosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnosPageComponent]
    });
    fixture = TestBed.createComponent(AlumnosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
