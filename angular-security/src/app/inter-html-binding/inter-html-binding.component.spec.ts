import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterHtmlBindingComponent } from './inter-html-binding.component';

describe('InterHtmlBindingComponent', () => {
  let component: InterHtmlBindingComponent;
  let fixture: ComponentFixture<InterHtmlBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterHtmlBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterHtmlBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
