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
    this.fileToUpload = fileInput.item(0);
  }

  crearFormulario() {
    this.form = this.formBuilder.group({
      nombreVersion: ['', Validators.required],
      archivoObra: [null, Validators.required],
    });
  }
  enviarObra() {}
}
