import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { UsuarioModel } from '../../../../shared/models/usuario.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss'],
})
export class FormDataComponent implements OnInit {
  form: FormGroup;
  usuario: UsuarioModel = new UsuarioModel();

  @Input() instanceSignIn: boolean;
  @Input() instanceSignUp: boolean;

  nameFirstLabel: String;
  nameSecondLabel: String;
  nameButton: String;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {
    this.form = this.formBuilder.group({
      firstField: ['', Validators.required],
      secondField: ['', Validators.required],
      remember: [false, Validators.requiredTrue],
      // [Valor por defecto, valores síncronos, validadores asíncronos]
    });
  }

  ngOnInit(): void {
    this.asignNames();
  }

  asignNames() {
    if (this.instanceSignIn) {
      this.nameFirstLabel = 'Correo electrónico';
      this.nameSecondLabel = 'Contraseña';
      this.nameButton = 'Iniciar Sesión';
    } else if (this.instanceSignUp) {
      this.nameFirstLabel = 'Nombre artístico';
      this.nameSecondLabel = 'Nombre de usuario';
      this.nameButton = 'Unirse a Artemis';
    }
  }

  rememberCheck() {
    const valor = this.form.get('remember');

    if (valor.value === false) {
      return valor.setValue(true);
    }
    return valor.setValue(false);
  }

  sign() {
    let partialData: object = {};

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere, por favor',
    });
    Swal.showLoading();

    if (this.router.url === '/signup') {
      partialData = {
        artistic_name: this.form.value.firstField,
        nick_name: this.form.value.secondField,
      };
    } else {
      partialData = {
        email: this.form.value.firstField,
        password: this.form.value.secondField,
      };
    }

    const userData = {
      ...this.auth.usuario,
      ...partialData,
    };

    if (this.router.url === '/signup') {
      return this.auth.signUp(userData).subscribe(
        () => {
          Swal.close();
          this.router.navigate(['/home']);
        },
        (err) => {
          Swal.fire({
            allowOutsideClick: true,
            icon: 'error',
            titleText: 'Error al autenticar\n😯',
            text: `Motivo: ${err.error.err.errors.email.message}`,
          });
          this.router.navigateByUrl('/welcome');
        }
      );
    } else {
      return this.auth.signIn(userData).subscribe(
        () => {
          Swal.close();
          this.router.navigate(['/home']);
        },
        (err: any) => {
          Swal.fire({
            allowOutsideClick: true,
            icon: 'error',
            titleText: 'Error al autenticar 😯',
            text: `${err.error.error}`,
          });
        }
      );
    }
  }
}
