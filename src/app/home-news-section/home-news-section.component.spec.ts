import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNewsSectionComponent } from './home-news-section.component';

describe('HomeNewsSectionComponent', () => {
  let component: HomeNewsSectionComponent;
  let fixture: ComponentFixture<HomeNewsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeNewsSectionComponent]
    });
    fixture = TestBed.createComponent(HomeNewsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
