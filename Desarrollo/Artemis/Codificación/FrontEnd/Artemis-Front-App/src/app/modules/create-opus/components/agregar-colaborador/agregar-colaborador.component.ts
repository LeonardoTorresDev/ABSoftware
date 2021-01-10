import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-colaborador',
  templateUrl: './agregar-colaborador.component.html',
  styleUrls: ['./agregar-colaborador.component.scss'],
})
export class AgregarColaboradorComponent implements OnInit {
  @Input()
  showFollowers: boolean;

  followerCheck: boolean = false;

  followerNickname: string;
  followerId: string;
  followers: string[] = [];

  constructor() {}

  ngOnInit(): void {}

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
