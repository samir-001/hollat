import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenItemComponent } from './screen-item.component';

describe('ScreenItemComponent', () => {
  let component: ScreenItemComponent;
  let fixture: ComponentFixture<ScreenItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenItemComponent]
    });
    fixture = TestBed.createComponent(ScreenItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
