import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormStartComponent } from './components/form-start/form-start.component';
import { FormEndComponent } from './components/form-end/form-end.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormStartComponent, FormEndComponent],
  imports: [CommonModule, BrowserModule, ReactiveFormsModule],
  exports: [FormStartComponent, FormEndComponent],
})
export class LandingPageModule {}
