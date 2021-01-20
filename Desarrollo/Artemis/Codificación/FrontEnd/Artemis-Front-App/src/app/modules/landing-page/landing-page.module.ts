import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FormStartComponent } from './components/form-start/form-start.component';
import { FormEndComponent } from './components/form-end/form-end.component';
import { InfoLandingComponent } from './components/info-landing/info-landing.component';
import { NavbarLandingComponent } from './components/navbar-landing/navbar-landing.component';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    FormStartComponent,
    FormEndComponent,
    InfoLandingComponent,
    NavbarLandingComponent,
    LandingPageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    LandingPageRoutingModule,
    SharedModule,
  ],
})
export class LandingPageModule {}
