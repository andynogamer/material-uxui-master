import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FisicaComponent } from './fisica.component';

describe('FisicaComponent', () => {
  let component: FisicaComponent;
  let fixture: ComponentFixture<FisicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FisicaComponent]
    });
    fixture = TestBed.createComponent(FisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
