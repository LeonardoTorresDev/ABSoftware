import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  ownPost: boolean = false
  //Implemetar funcion que verifica si es obra propia o de tercer a partir de la ruta

  constructor() { }

  ngOnInit(): void {
  }

}
