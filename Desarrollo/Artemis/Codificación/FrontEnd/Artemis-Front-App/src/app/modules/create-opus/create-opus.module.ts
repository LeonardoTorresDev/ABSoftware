import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateOpusRoutingModule } from './create-opus-routing.module';
import { AgregarColaboradorComponent } from './components/agregar-colaborador/agregar-colaborador.component';
import { SubirObraComponent } from './components/subir-obra/subir-obra.component';
import { SubirArchivoComponent } from './components/subir-archivo/subir-archivo.component';
import { DetallesFinalesComponent } from './components/detalles-finales/detalles-finales.component';

import { NavbarComponent} from '../../shared/components/navbar/navbar.component'


@NgModule({
  declarations: [AgregarColaboradorComponent, SubirObraComponent, SubirArchivoComponent, DetallesFinalesComponent,
                NavbarComponent],
  imports: [
    CommonModule,
    CreateOpusRoutingModule
  ]
})
export class CreateOpusModule { }
