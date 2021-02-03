import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss'],
})
export class ComentariosComponent implements OnInit {
  comentario: FormGroup;
  nickname: string;

  user;

  constructor(private formBuilder: FormBuilder) {
    this.crearFieldComentarios();
  }

  ngOnInit(): void {}

  crearFieldComentarios() {
    this.comentario = this.formBuilder.group({
      comment: ['', [Validators.required]],
    });
  }

  noValido(attr: string) {
    return (
      this.comentario.get(attr).invalid && this.comentario.get(attr).touched
    );
  }

  comentar() {
    if (this.comentario.invalid) {
      return Object.values(this.comentario.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
    console.log(this.comentario);

    // this.<llamadaAlService>.post()
  }
}
