import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LccComponent } from './lcc.component';

describe('LccComponent', () => {
  let component: LccComponent;
  let fixture: ComponentFixture<LccComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LccComponent]
    });
    fixture = TestBed.createComponent(LccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
