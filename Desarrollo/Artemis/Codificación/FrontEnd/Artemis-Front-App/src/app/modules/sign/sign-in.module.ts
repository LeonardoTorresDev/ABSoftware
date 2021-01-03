import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FormDataComponent } from './components/form-data/form-data.component';
import { OtherNetworksComponent } from './components/other-networks/other-networks.component';
import { WlelcomingComponent } from './components/wlelcoming/wlelcoming.component';



@NgModule({
  declarations: [SignUpComponent, SignInComponent, FormDataComponent, OtherNetworksComponent, WlelcomingComponent],
  imports: [
    CommonModule
  ]
})
export class SignInModule { }
