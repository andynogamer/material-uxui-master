import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SociologiaComponent } from './sociologia.component';

describe('SociologiaComponent', () => {
  let component: SociologiaComponent;
  let fixture: ComponentFixture<SociologiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SociologiaComponent]
    });
    fixture = TestBed.createComponent(SociologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
