import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneLoanComponent } from './one-loan.component';

describe('OneLoanComponent', () => {
  let component: OneLoanComponent;
  let fixture: ComponentFixture<OneLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
