import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCreditComponent } from './one-credit.component';

describe('OneCreditComponent', () => {
  let component: OneCreditComponent;
  let fixture: ComponentFixture<OneCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
