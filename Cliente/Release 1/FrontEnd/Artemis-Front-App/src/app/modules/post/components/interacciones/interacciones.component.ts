import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interacciones',
  templateUrl: './interacciones.component.html',
  styleUrls: ['./interacciones.component.scss'],
})
export class InteraccionesComponent implements OnInit {
  likes: number;
  dislikes: number;
  comentarios: number;

  @Input() ownPost: boolean;

  constructor() {}

  ngOnInit(): void {
    //Datos de prueba, cambiar al integrar la base de datos
    this.likes = 0;
    this.dislikes = 0;
    this.comentarios = 0;
  }

  like() {}
  dislike() {}
}
