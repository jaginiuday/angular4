import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateTransitionsSample1Component } from './state-transitions-sample1.component';

describe('StateTransitionsComponent', () => {
  let component: StateTransitionsSample1Component;
  let fixture: ComponentFixture<StateTransitionsSample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateTransitionsSample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateTransitionsSample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
