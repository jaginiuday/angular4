import {
  Component,
  Input
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { Heroes } from './hero.service';

@Component({
 selector: 'hero-list-combined-transitions',
 template: `
   <ul>
     <li *ngFor="let hero of heroes"
         [@heroState]="hero.state"
         (click)="hero.toggleState()">
       {{hero.name}}
     </li>
   </ul>
 `,
 styleUrls: ['./hero-list.component.css'],
 /*
  * Define two states, "inactive" and "active", and the end
  * styles that apply whenever the element is in those states.
  * Then define an animated transition between these two
  * states, in *both* directions.
  */
 animations: [
   trigger('heroState', [
     state('inactive', style({
       backgroundColor: '#eee',
       transform: 'scale(1)'
     })),
     state('active',   style({
       backgroundColor: '#cfd8dc',
       transform: 'scale(1.1)'
     })),
     transition('inactive => active, active => inactive',
      animate('100ms ease-out'))
   ])
 ]
})
export class HeroListCombinedTransitionsComponent {
 @Input() heroes: Heroes;
}