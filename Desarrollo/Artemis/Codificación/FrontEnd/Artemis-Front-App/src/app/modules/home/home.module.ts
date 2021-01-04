import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [PublicacionComponent, HomeComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
