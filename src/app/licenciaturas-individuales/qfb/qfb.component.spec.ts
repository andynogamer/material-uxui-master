import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QfbComponent } from './qfb.component';

describe('QfbComponent', () => {
  let component: QfbComponent;
  let fixture: ComponentFixture<QfbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QfbComponent]
    });
    fixture = TestBed.createComponent(QfbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
