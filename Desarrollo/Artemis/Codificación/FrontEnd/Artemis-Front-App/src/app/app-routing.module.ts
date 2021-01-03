import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { SignInComponent } from './modules/sign/components/sign-in/sign-in.component';
import { SignUpComponent } from './modules/sign/components/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'welcome', component: LandingPageComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
