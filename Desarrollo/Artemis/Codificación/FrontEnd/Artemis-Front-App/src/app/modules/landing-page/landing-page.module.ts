import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormStartComponent } from './components/form-start/form-start.component';
import { FormEndComponent } from './components/form-end/form-end.component';



@NgModule({
  declarations: [FormStartComponent, FormEndComponent],
  exports: [FormStartComponent, FormEndComponent],
  imports: [
    CommonModule 
  ],
})
export class LandingPageModule { }
