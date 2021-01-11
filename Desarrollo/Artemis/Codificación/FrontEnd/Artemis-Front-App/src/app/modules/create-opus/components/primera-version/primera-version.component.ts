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

  fileChangeEvent(fileInput: FileList) {
    let file = this.form.get('archivoObra');
    this.fileToUpload = fileInput.item(0);
    this.fileName = this.fileToUpload.name;
    file.setValue(this.fileToUpload);
  }

  /*uploadFileToActivity(){
    this.opus
  }*/

  crearFormulario() {
    this.form = this.formBuilder.group({
      nombreVersion: ['', Validators.required],
      archivoObra: ['', Validators.required],
    });
  }

  noValido(attr: string) {
    return this.form.get(attr).invalid && this.form.get(attr).touched;
  }

  enviarObra() {
    const obra = this.opus.obra;

    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach((control) => {
        control.markAsTouched();
      });
    }

    obra.file = this.form.value.archivoObra;
    obra.versionName = this.form.value.nombreVersion;

    console.log(this.form.value);
    console.log('En opus:', this.opus.obra);
  }
}
