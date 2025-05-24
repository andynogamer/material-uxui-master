import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiComponent } from './ri.component';

describe('RiComponent', () => {
  let component: RiComponent;
  let fixture: ComponentFixture<RiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiComponent]
    });
    fixture = TestBed.createComponent(RiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
