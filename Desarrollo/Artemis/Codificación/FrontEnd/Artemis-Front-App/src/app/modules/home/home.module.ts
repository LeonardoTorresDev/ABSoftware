import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { LoadPostsService } from '../../shared/services/load-posts/load-posts.service';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [PublicacionComponent, HomeComponent, SidebarComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    PipesModule
  ],
  providers: [LoadPostsService],
})
export class HomeModule {}
