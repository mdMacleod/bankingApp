import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneSavingsComponent } from './one-savings.component';

describe('OneSavingsComponent', () => {
  let component: OneSavingsComponent;
  let fixture: ComponentFixture<OneSavingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneSavingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneSavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
