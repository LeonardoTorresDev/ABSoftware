import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginI } from '../../models/login.interface';
import { ResponseI } from '../../models/response.interface'

import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url
  constructor(private http: HttpClient) { }

  Savesresponse(responce: LoginI): Observable<ResponseI>{
    //Poner url de la api
    this.url = 'http://localhost:4400/Api/Login/Savesresponse';
    return this.http.post<ResponseI>(this.url, responce);
  }
}
