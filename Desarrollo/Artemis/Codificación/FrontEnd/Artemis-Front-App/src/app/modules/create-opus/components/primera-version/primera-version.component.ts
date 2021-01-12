import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OpusService } from '../../../../shared/services/data/opus.service';

@Component({
  selector: 'app-primera-version',
  templateUrl: './primera-version.component.html',
  styleUrls: ['./primera-version.component.scss'],
})
export class PrimeraVersionComponent implements OnInit {
  form: FormGroup;
  fileToUpload: File = null;
  fileName: string = 'No se subió archivo alguno.';

  constructor(private opus: OpusService, private formBuilder: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit(): void {}

  /*uploadFileToActivity(){
    this.opus
  }*/

  crearFormulario() {
    this.form = this.formBuilder.group({
      nombreVersion: ['', Validators.required],
      archivoObra: ['', Validators.required],
    });
  }

  fileChangeEvent(event: { target: { files: string | any[] } }) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('archivoObra').setValue(file);
      this.fileName = file.name;
    }
  }

  noValido(attr: string) {
    return this.form.get(attr).invalid && this.form.get(attr).touched;
  }

  subirObra() {
    const obra = this.opus.obra;
    const formData = new FormData();

    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach((control) => {
        control.markAsTouched();
      });
    }

    formData.append('file', this.form.get('archivoObra').value); // Cambiar el nombre del primer arg cuando el endpoint esté listo

    obra.file = formData;
    obra.versionName = this.form.get('nombreVersion').value;

    this.opus.postOpus(obra);
  }
}
