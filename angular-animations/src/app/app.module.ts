import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { StateTransitionsSample1Component } from './state-transitions-sample1/state-transitions-sample1.component';
import { StateTransitionsSample2Component } from './state-transitions-sample2/state-transitions-sample2.component';
import { KeyFramesComponent } from './key-frames/key-frames.component';

const appRoutes: Routes = [
  { path: 'state-transitions-sample1', component: StateTransitionsSample1Component },
  { path: 'state-transitions-sample2', component: StateTransitionsSample2Component },
  { path: 'key-frames', component: KeyFramesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StateTransitionsSample1Component,
    StateTransitionsSample2Component,
    KeyFramesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
