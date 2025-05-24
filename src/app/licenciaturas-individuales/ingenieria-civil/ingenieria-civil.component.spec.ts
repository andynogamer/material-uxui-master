import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngenieriaCivilComponent } from './ingenieria-civil.component';

describe('IngenieriaCivilComponent', () => {
  let component: IngenieriaCivilComponent;
  let fixture: ComponentFixture<IngenieriaCivilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngenieriaCivilComponent]
    });
    fixture = TestBed.createComponent(IngenieriaCivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
