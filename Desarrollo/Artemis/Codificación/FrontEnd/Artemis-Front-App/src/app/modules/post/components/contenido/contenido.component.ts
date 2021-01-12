import { isLoweredSymbol } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss'],
})
export class ContenidoComponent implements OnInit {
  descripcion: string;
  urlImagen: string;

  likes: number;
  dislikes: number;
  comments: number;

  constructor() {}

  ngOnInit(): void {
    //Dato de prueba, se debe cargar el url de la base de datos
    this.descripcion =
      'Cillum sint laborum nostrud dolor ut culpa culpa non mollit sint labore in. Consequat nulla labore voluptate dolor cillum ipsum. Consequat in amet consequat ipsum velit deserunt amet aliqua elit nisi quis eiusmod consectetur amet. Voluptate labore reprehenderit ad consequat proident id et.';
    this.urlImagen = '../../.././../../assets/streetArt.jpg';

    this.likes = this.dislikes = this.comments = 0;
  }
}
