import { Injectable } from '@angular/core';
import { OpusModel } from '../../models/opus.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class OpusService {
  obra: OpusModel = new OpusModel();
  url: string = environment.artemisURL;

  httpOptions: object = {
    withCredentials: true,
  };

  constructor(private http: HttpClient) {}

  postOpus(data: OpusModel) {
    const opusData = {
      ...data,
    };

    console.log('Esto se estaría enviando al server:\n', opusData);

    //Agregar el this.http.post() cuando el endpoint esté listo
  }
}
