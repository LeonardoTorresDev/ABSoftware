import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-opus',
  templateUrl: './create-opus.component.html',
  styleUrls: ['./create-opus.component.scss'],
})
export class CreateOpusComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  enviarTipoObra(opus: string) {}
}
