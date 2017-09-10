import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BypassSecurityComponent } from './bypass-security/bypass-security.component';
import { InterHtmlBindingComponent } from './inter-html-binding/inter-html-binding.component';

const appRoutes: Routes = [
  { path: 'bypass-security', component: BypassSecurityComponent },
  { path: 'inter-html-binding', component: InterHtmlBindingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BypassSecurityComponent,
    InterHtmlBindingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
