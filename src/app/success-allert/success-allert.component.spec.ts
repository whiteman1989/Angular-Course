import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAllertComponent } from './success-allert.component';

describe('SuccessAllertComponent', () => {
  let component: SuccessAllertComponent;
  let fixture: ComponentFixture<SuccessAllertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessAllertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessAllertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
