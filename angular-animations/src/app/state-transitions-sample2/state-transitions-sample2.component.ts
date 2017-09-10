import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-state-transitions-sample2',
  templateUrl: './state-transitions-sample2.component.html',
  styleUrls: ['./state-transitions-sample2.component.css'],
  animations: [
    trigger('smallLargeAnimation', [
      state('small', style({
          transform: 'scale(1)',
      })),
      state('large', style({
          transform: 'scale(2)',
      })),
      transition('small <=> large', animate('300ms ease-in', style({
        transform: 'translateY(40px)'
      })))
    ]),
  ]   
})
export class StateTransitionsSample2Component {
  state: string = 'small';
  
    animateMe() {
          this.state = (this.state === 'small' ? 'large' : 'small');
    }
}
