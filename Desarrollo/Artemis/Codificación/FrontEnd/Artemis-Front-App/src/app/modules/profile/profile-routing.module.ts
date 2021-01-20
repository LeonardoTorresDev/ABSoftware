import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TusObrasComponent } from './components/tus-obras/tus-obras.component';
import { ObrasComponent } from './components/obras/obras.component';
import { ModificarPerfilComponent } from './components/modificar-perfil/modificar-perfil.component';

const routes: Routes = [
  { path: ':id', component: ObrasComponent },
  { path: ':id/tus-obras', component: TusObrasComponent },
  { path: ':id/editar-perfil', component: ModificarPerfilComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'usuario' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
