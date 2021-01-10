import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubirArchivoComponent } from './components/subir-archivo/subir-archivo.component';
import { SubirObraComponent } from './components/subir-obra/subir-obra.component';
import { DetallesFinalesComponent } from './components/detalles-finales/detalles-finales.component';

const routes: Routes = [
  { path: '', redirectTo: 'subir-obra', pathMatch: 'full' },
  {
    path: 'subir-obra',
    component: SubirObraComponent,
  },
  {
    path: 'subir-archivo',
    component: SubirArchivoComponent,
  },
  { path: 'detalles-finales', component: DetallesFinalesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateOpusRoutingModule {}
