import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateOpusRoutingModule } from './create-opus-routing.module';
import { AgregarColaboradorComponent } from './components/agregar-colaborador/agregar-colaborador.component';
import { SubirObraComponent } from './components/subir-obra/subir-obra.component';
import { SubirArchivoComponent } from './components/subir-archivo/subir-archivo.component';
import { DetallesFinalesComponent } from './components/detalles-finales/detalles-finales.component';

import { CreateOpusComponent } from './create-opus.component';
import { StepsComponent } from './components/steps/steps.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeraVersionComponent } from './components/primera-version/primera-version.component';

@NgModule({
  declarations: [
    AgregarColaboradorComponent,
    SubirObraComponent,
    SubirArchivoComponent,
    DetallesFinalesComponent,
    CreateOpusComponent,
    StepsComponent,
    PrimeraVersionComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CreateOpusRoutingModule,
    SharedModule,
  ],
})
export class CreateOpusModule {}
