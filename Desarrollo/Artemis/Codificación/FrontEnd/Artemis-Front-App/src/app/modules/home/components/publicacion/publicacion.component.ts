import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.scss'],
})
export class PublicacionComponent implements OnInit {
  imagen: String;
  titulo: String;
  fecha: number;
  autor: String;
  tags: String[];
  likes: number;
  comentarios: number;

  constructor() {}

  ngOnInit(): void {
    //Datos únicamente de prueba de front. Los datos de prueba de integración dependerá de la base de datos
    //con conexión a través del servicio de posts
    this.imagen = '../../.././../../assets/streetArt.jpg';
    this.titulo = 'Colección callejera';
    this.fecha = Date.now();
    this.autor = 'Bansky';
    this.tags = ['#tag', '#tag', '#tag'];
    this.likes = 10000;
    this.comentarios =1500;
  }
}
