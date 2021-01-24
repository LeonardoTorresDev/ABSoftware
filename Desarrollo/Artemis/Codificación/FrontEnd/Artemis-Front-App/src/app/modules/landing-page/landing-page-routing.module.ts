import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from '../sign/components/sign-in/sign-in.component';
import { SignUpComponent } from '../sign/components/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
