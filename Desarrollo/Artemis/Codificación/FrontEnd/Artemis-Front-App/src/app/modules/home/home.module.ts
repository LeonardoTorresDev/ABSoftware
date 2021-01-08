import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { NavbarComponent } from '../../shared/components/navbar/navbar.component'

import { LoadPostsService } from '../../shared/services/load-posts/load-posts.service'

@NgModule({
  declarations: [PublicacionComponent, HomeComponent, SidebarComponent, NavbarComponent],
  imports: [BrowserModule, CommonModule, HomeRoutingModule],
  providers : [LoadPostsService]
})
export class HomeModule {}
