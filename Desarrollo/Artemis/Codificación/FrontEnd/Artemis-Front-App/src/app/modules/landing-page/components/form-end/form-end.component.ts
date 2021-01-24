import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-form-end',
  templateUrl: './form-end.component.html',
  styleUrls: ['./form-end.component.scss'],
})
export class FormEndComponent implements OnInit {
  forma: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {
    this.crearFormulario();
  }

  ngOnInit(): void {}

  crearFormulario() {
    this.forma = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', Validators.required],
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
    // console.log(this.forma.value);

    if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach((control) => {
        control.markAsTouched();
      });
    }

    //Almacenar en un json los datos hasta ahora
    this.auth.usuario = this.forma.value;
    this.router.navigate(['/signup']);
  }
}
