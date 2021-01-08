import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  //Se agregarán los atributos que se llenarán según el componente padre
  instance: boolean;

  artisticName: string;
  userName: string;

  constructor() {}

  ngOnInit(): void {
    this.instance = true;
  }
}
