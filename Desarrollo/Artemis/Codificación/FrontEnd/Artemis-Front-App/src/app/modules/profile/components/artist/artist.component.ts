import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  @Input () profilePhoto: string
  @Input () artisticName: string
  @Input () ownProfile: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  //Implementar los métodos de integración para cargar los campos desde la base de datos
  //Implementar si el perfil es propio o no
}
