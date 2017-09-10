import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateTransitionsSample2Component } from './state-transitions-sample2.component';

describe('StateTransitionsSample2Component', () => {
  let component: StateTransitionsSample2Component;
  let fixture: ComponentFixture<StateTransitionsSample2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateTransitionsSample2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateTransitionsSample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
