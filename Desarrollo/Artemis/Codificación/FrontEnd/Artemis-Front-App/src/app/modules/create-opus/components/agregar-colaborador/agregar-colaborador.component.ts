import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-colaborador',
  templateUrl: './agregar-colaborador.component.html',
  styleUrls: ['./agregar-colaborador.component.scss'],
})
export class AgregarColaboradorComponent implements OnInit {
  @Input()
  showFollowers: boolean;

  constructor() {}

  ngOnInit(): void {}
}
