import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { TusObrasComponent } from './components/tus-obras/tus-obras.component';
import { ObrasComponent } from './components/obras/obras.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ListaObrasComponent } from './components/lista-obras/lista-obras.component';
import { InfoUserComponent } from './components/info-user/info-user.component';
import { ArtistComponent } from './components/artist/artist.component';
import { StatOpusComponent } from './components/stat-opus/stat-opus.component';

import { SharedModule } from '../../shared/shared.module';
import { ModificarPerfilComponent } from './components/modificar-perfil/modificar-perfil.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfileComponent,
    TusObrasComponent,
    ObrasComponent,
    SidebarComponent,
    ListaObrasComponent,
    InfoUserComponent,
    ArtistComponent,
    StatOpusComponent,
    ModificarPerfilComponent,
  ],
  imports: [CommonModule, ProfileRoutingModule, SharedModule, ReactiveFormsModule],
})
export class ProfileModule {}
