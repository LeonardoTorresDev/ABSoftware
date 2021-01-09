import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { HomeComponent } from './modules/home/home.component';
import { LandingPageRoutingModule } from './modules/landing-page/landing-page-routing.module';
import { AuthGuard } from './guards/auth.guard';
import { DisconnectedGuard } from './guards/disconnected.guard';
import { CreateOpusComponent } from './modules/create-opus/create-opus.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: LandingPageComponent,
    canActivate: [DisconnectedGuard],
  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'createOpus',
    component: CreateOpusComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }, //Por mientras, redirigirá a la landing page: se necesita de una página 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LandingPageRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
