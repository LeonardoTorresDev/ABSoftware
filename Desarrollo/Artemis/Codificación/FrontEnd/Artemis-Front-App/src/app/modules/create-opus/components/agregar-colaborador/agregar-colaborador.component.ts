import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { UserService } from '../../../../shared/services/data/user.service';

@Component({
  selector: 'app-agregar-colaborador',
  templateUrl: './agregar-colaborador.component.html',
  styleUrls: ['./agregar-colaborador.component.scss'],
})
export class AgregarColaboradorComponent implements OnInit {
  @Input()
  showFollowers: boolean;

  followerCheck: boolean = false; // Variable que marca a un seguidor mostrado
  hasFollowers: boolean;          // Variable que indica si el usuario tiene seguidores o no

  followerNickname: string;       // Nickname del seguidor
  followerId: string;             // ID del seguidor
  followers: string[] = [];       // Arreglo donde se guardarán a los seguidores en general
  privateFollowers: string[] = [];// Arreglo donde se guardarán a los seguidores privados por sus ID's

  constructor(private user: UserService) {}

  ngOnInit(): void {
    this.getFollowers();
  }

  getFollowers() {
    this.user.getUser().subscribe((res: any) => {
      this.followers = res.followers;
      if (this.followers.length === 0) {
        this.hasFollowers = false;
      } else {
        this.hasFollowers = true;
      }
      console.log(res, this.followers, this.hasFollowers);
    });
  }

  selectFollower(): void {
    if (!this.followerCheck) {
      console.log('Seguidor seleccionado!');
      this.followerCheck = true;
    } else {
      console.log('Seguidor deseleccionado!');
      this.followerCheck = false;
    }

    // Seleccionar id de seguidor
    // Guardarlo en el array de followers
  }

  enviarFollowers() {}
}
