import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInFormComponent } from './welcome/sign-in-form/sign-in-form.component';
import { ApiFormComponent } from './welcome/api-form/api-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInFormComponent,
    ApiFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
