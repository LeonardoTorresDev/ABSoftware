import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../../shared/services/data/user.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  profilePhoto: string;
  artisticName: string;
  @Input() ownProfile: boolean;

  constructor(private user: UserService) {}

  ngOnInit(): void {
    this.getInfoUser();
  }

  getInfoUser() {
    this.user.getUser().subscribe((res: any) => {
      this.profilePhoto = res.profile_img_url;
      this.artisticName = res.artistic_name;
    });
  }

  //Implementar los métodos de integración para cargar los campos desde la base de datos
  //Implementar si el perfil es propio o no
}
