import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera-obra',
  templateUrl: './cabecera-obra.component.html',
  styleUrls: ['./cabecera-obra.component.scss']
})
export class CabeceraObraComponent implements OnInit {

  titulo: string
  autor: string
  fecha: number
  tags: string[]

  constructor() { }

  ngOnInit(): void {
        //Datos únicamente de prueba de front. Los datos de prueba de integración dependerá de la base de datos
    //con conexión a través del servicio de posts
    this.titulo = 'Colección callejera'
    this.fecha = Date.now()
    this.autor = 'Bansky'
    this.tags = ['#tag', '#tag', '#tag']
  }

}
