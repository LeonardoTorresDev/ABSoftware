import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { UsuarioModel } from '../../models/usuario.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = environment.artemisURL;

  usuario: UsuarioModel = new UsuarioModel();

  httpOptions: object = {
    withCredentials: true,
  };

  token: string;
  expires: number;

  constructor(private http: HttpClient) {
    this.leerToken();
  }

  signUp(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
    };
    return this.http.post(`${this.url}/user`, authData, this.httpOptions).pipe(
      map((res: any) => {
        this.guardarToken(res.user._id);
        return res;
      })
    );
  }

  signIn(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
    };

    return this.http
      .post(`${this.url}/user/login`, authData, this.httpOptions)
      .pipe(
        map((res: any) => {
          this.guardarToken(res.user._id);
          return res;
        })
      );
  }

  signWithGoogle(idtoken: string) {
    return this.http
      .post(`${this.url}/user/login/google`, { idtoken }, this.httpOptions)
      .pipe(
        map((res: any) => {
          this.guardarToken(res.user._id);
        })
      );
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires');
    this.token = '';
    this.expires = NaN;

    return this.http.get(`${this.url}/user/logout`, this.httpOptions);
  }

  

  private guardarToken(idToken: string): void {
    this.token = idToken;
    localStorage.setItem('token', idToken);
    let today = new Date();
    today.setHours(730);
    localStorage.setItem('expires', today.getTime().toString());
  }

  leerToken(): string {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.expires = Number(localStorage.getItem('expires'));
    } else {
      this.token = '';
    }

    return this.token;
  }

  isLogged(): boolean {
    // Función para saber si el usuario está autenticado
    if (this.token.length < 2) {
      return false;
    }
    const expira = Number(localStorage.getItem('expires'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if (expiraDate > new Date()) {
      return true;
    } else {
      return false;
    }
  }

  isNotLogged(): boolean {
    return !this.isLogged();
  }
}
