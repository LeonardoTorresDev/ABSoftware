import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FormDataComponent } from './components/form-data/form-data.component';
import { OtherNetworksComponent } from './components/other-networks/other-networks.component';
import { WelcomingComponent } from './components/welcoming/welcoming.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    FormDataComponent,
    OtherNetworksComponent,
    WelcomingComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class SignModule {}
