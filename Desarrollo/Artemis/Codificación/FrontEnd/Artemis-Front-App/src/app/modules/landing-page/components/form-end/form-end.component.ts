import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-end',
  templateUrl: './form-end.component.html',
  styleUrls: ['./form-end.component.scss'],
})
export class FormEndComponent implements OnInit {
  forma: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit(): void {}

  crearFormulario() {
    this.forma = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(4)]],
      apellido: ['', Validators.required],
      nickname: ['', Validators.required],
      termsAndConds: [false, Validators.requiredTrue],
      // [Valor por defecto, valores síncronos, validadores asíncronos]
    });
  }

  noValido(attr: string) {
    return this.forma.get(attr).invalid && this.forma.get(attr).touched;
  }

  termsCheck() {
    const valor = this.forma.get('termsAndConds');

    if (valor.value === false) {
      return valor.setValue(true);
    }
    return valor.setValue(false);
  }

  guardar() {
    console.log(this.forma);

    if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
  }
}
