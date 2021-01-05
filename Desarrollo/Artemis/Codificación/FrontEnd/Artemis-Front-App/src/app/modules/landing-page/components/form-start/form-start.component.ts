import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-start',
  templateUrl: './form-start.component.html',
  styleUrls: ['./form-start.component.scss'],
  providers: [SocialUser, SocialAuthService]
})
export class FormStartComponent implements OnInit {
  user: SocialUser
  loginIn: boolean

  registerForm: FormGroup
  loading = false

  constructor(private router: Router,
              private authService: SocialAuthService) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  onClick() {
    this.loading = true;

    //Detiene el formulario si es inválido, aún no se agrega notifiación
    if (this.registerForm.invalid) return;

    /*Aquí se debe crear una promesa; que en caso no haya errores, enrute a la vista de sign up
    con los datos de email y contraseña para que se haga submit en dicha vista con los datos faltantes.
    Si hay algún error, se cambia el loading a false y se manda el mensaje de error 

    else
      this.router.navigate('ruta de sign up, aún no creada')*/
  }
}
