import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeroTeamBuilderComponent } from './hero-team-builder.component';
import { HeroListBasicComponent } from './hero-list-basic.component';
import { HeroListInlineStylesComponent } from './hero-list-inline-styles.component';
import { HeroListEnterLeaveComponent } from './hero-list-enter-leave.component';
import { HeroListEnterLeaveStatesComponent } from './hero-list-enter-leave-states.component';
import { HeroListCombinedTransitionsComponent } from './hero-list-combined-transitions.component';
import { HeroListTwowayComponent } from './hero-list-twoway.component';
import { HeroListAutoComponent } from './hero-list-auto.component';
import { HeroListGroupsComponent } from './hero-list-groups.component';
import { HeroListMultistepComponent } from './hero-list-multistep.component';
import { HeroListTimingsComponent } from './hero-list-timings.component';

@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule ],
  declarations: [
    HeroTeamBuilderComponent,
    HeroListBasicComponent,
    HeroListInlineStylesComponent,
    HeroListCombinedTransitionsComponent,
    HeroListTwowayComponent,
    HeroListEnterLeaveComponent,
    HeroListEnterLeaveStatesComponent,
    HeroListAutoComponent,
    HeroListTimingsComponent,
    HeroListMultistepComponent,
    HeroListGroupsComponent
  ],
  bootstrap: [ HeroTeamBuilderComponent ]
})
export class AppModule { }