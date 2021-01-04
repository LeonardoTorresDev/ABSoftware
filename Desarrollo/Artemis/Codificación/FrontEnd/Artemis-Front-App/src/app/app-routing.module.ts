import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { HomeComponent } from './modules/home/home.component';
import { LandingPageRoutingModule } from './modules/landing-page/landing-page-routing.module';

const routes: Routes = [
  { path: 'welcome', component: LandingPageComponent },
  { path: 'home', component: HomeComponent }, // Se necesitará de un guard para que el usuario no entre a home si no está logueado
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }, //Por mientras, redirigirá a la landing page: se necesita de una página 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LandingPageRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
