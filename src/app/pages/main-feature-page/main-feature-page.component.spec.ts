import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFeaturePageComponent } from './main-feature-page.component';

describe('MainFeaturePageComponent', () => {
  let component: MainFeaturePageComponent;
  let fixture: ComponentFixture<MainFeaturePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainFeaturePageComponent]
    });
    fixture = TestBed.createComponent(MainFeaturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
