import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FormDataComponent } from './components/form-data/form-data.component';
import { OtherNetworksComponent } from './components/other-networks/other-networks.component';
import { WelcomingComponent } from './components/welcoming/welcoming.component';
import { NavbarSignComponent } from './components/navbar-sign/navbar-sign.component';

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    FormDataComponent,
    OtherNetworksComponent,
    WelcomingComponent,
    NavbarSignComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class SignModule {}
