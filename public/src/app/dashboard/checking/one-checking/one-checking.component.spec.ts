import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCheckingComponent } from './one-checking.component';

describe('OneCheckingComponent', () => {
  let component: OneCheckingComponent;
  let fixture: ComponentFixture<OneCheckingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneCheckingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneCheckingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
