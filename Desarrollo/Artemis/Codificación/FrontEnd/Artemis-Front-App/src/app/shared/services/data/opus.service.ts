import { Injectable } from '@angular/core';
import { OpusModel } from '../../models/opus.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OpusService {
  obra: OpusModel = new OpusModel();

  constructor(private http: HttpClient) {}
}
