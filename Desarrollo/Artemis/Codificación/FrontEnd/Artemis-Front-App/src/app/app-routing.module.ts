import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { HomeComponent } from './modules/home/home.component';
import { LandingPageRoutingModule } from './modules/landing-page/landing-page-routing.module';
import { AuthGuard } from './guards/auth.guard';
import { DisconnectedGuard } from './guards/disconnected.guard';
import { CreateOpusComponent } from './modules/create-opus/create-opus.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { CreateOpusRoutingModule } from './modules/create-opus/create-opus-routing.module';
import { SubirArchivoComponent } from './modules/create-opus/components/subir-archivo/subir-archivo.component';
import { SubirObraComponent } from './modules/create-opus/components/subir-obra/subir-obra.component';
import { PostComponent } from './modules/post/post.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }, //Por mientras, redirigirá a la landing page: se necesita de una página 404

  {
    path: 'welcome',
    component: LandingPageComponent,
    canActivate: [DisconnectedGuard],
  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'createOpus',
    component: CreateOpusComponent,
    loadChildren: () =>
      import('./modules/create-opus/create-opus-routing.module').then(
        (route) => route.CreateOpusRoutingModule
      ),
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/profile/profile-routing.module').then(
        (route) => route.ProfileRoutingModule
      ),
  },
  { path: 'post/:id', component: PostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LandingPageRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
