import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormStartComponent } from './components/form-start/form-start.component';
import { FormEndComponent } from './components/form-end/form-end.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { InfoLandingComponent } from './components/info-landing/info-landing.component';
import { NavbarLandingComponent } from './components/navbar-landing/navbar-landing.component';

@NgModule({
  declarations: [FormStartComponent, FormEndComponent, InfoLandingComponent, NavbarLandingComponent],
  imports: [CommonModule, BrowserModule, ReactiveFormsModule],
  exports: [FormStartComponent, FormEndComponent, InfoLandingComponent, NavbarLandingComponent],
})
export class LandingPageModule {}
