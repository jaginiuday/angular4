import { Component } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-state-transitions',
  templateUrl: './state-transitions-sample1.component.html',
  styleUrls: ['./state-transitions-sample1.component.css'],
  animations: [
    trigger('smallLargeAnimation', [
      state('small', style({
          transform: 'scale(1)',
      })),
      state('large', style({
          transform: 'scale(2)',
      })),
      transition('small => large', animate('100ms ease-in')),
      transition('large => small', animate('100ms ease-out'))
    ]),
  ]    
})
export class StateTransitionsSample1Component {
  state: string = 'small';
  
    animateMe() {
          this.state = (this.state === 'small' ? 'large' : 'small');
    }

}
