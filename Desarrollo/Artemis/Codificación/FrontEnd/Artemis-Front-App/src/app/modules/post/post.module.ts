import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule} from '@angular/platform-browser'
import { PostComponent } from './post.component';
import { CabeceraObraComponent } from './components/cabecera-obra/cabecera-obra.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { OpcionesPostComponent } from './components/opciones-post/opciones-post.component';
import { MapaVersionesComponent } from './components/mapa-versiones/mapa-versiones.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';

import { NavbarModule } from '../../shared/modules/navbar/navbar.module';
import { InteraccionesComponent } from './components/interacciones/interacciones.component'



@NgModule({
  declarations: [PostComponent, CabeceraObraComponent, ContenidoComponent, OpcionesPostComponent, MapaVersionesComponent, ComentariosComponent, InteraccionesComponent],
  imports: [
    CommonModule,
    BrowserModule,
    NavbarModule
  ]
})
export class PostModule { }
