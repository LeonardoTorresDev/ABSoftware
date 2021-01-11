import { Injectable } from '@angular/core';
import { OpusModel } from '../../models/opus.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OpusService {
  obra: OpusModel = new OpusModel();

  httpOptions: object = {
    withCredentials: true,
  };

  constructor(private http: HttpClient) {}

  postFile(fileToUpload: File) {
    const endpoint = 'your-destination-url';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http.post(endpoint, formData, this.httpOptions).pipe(
      map(() => {
        return true;
      })
    );
  }
}
