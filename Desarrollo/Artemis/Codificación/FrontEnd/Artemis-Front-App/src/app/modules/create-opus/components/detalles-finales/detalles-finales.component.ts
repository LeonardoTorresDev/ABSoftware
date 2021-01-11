import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OpusService } from '../../../../shared/services/data/opus.service';
import { Router } from '@angular/router';
import { ArchivoModel } from '../../../../shared/models/archivo.model';

@Component({
  selector: 'app-detalles-finales',
  templateUrl: './detalles-finales.component.html',
  styleUrls: ['./detalles-finales.component.scss'],
})
export class DetallesFinalesComponent implements OnInit {
  form: FormGroup;
  tags: string[];
  showFollowers: boolean = false;
  fileToUpload: Array<File>;
  fileName: string = 'No se subió archivo alguno.';
  archivo: ArchivoModel;
  lastPK: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private opus: OpusService,
    private router: Router
  ) {
    this.crearFormulario();
  }

  ngOnInit(): void {}

  crearFormulario() {
    this.form = this.formBuilder.group({
      nombreObra: ['', Validators.required],
      descripcion: [''],
      etiquetas: [''],
      private: [false, Validators.required],
      // privateViewers: [''],
      tipoObra: [this.opus.obra.tipoObra],
    });
  }

  enviarObra() {
    const data = this.form.value;
    this.opus.obra.nombreObra = data.nombreObra;
    this.opus.obra.descripcion = data.descripcion;
    this.opus.obra.tags = data.etiquetas;
    this.opus.obra.private = data.private;
    // this.setTags();
    console.log(this.form.value, this.opus.obra);
    console.log(this.fileToUpload);

    if (this.form.valid) {
      this.router.navigateByUrl('/createOpus/primera-version');
    }
  }

  setTags() {
    const re = /,\s\s\s|,\s\s|,\s|,/;
    this.form.value.etiquetas.toLowerCase().split(re);
  }

  selectViewers(value: boolean) {
    const valor = this.form.get('private');
    valor.setValue(value);
    this.showFollowers = value;
    console.log(this.form.value.private);
  }

  fileChangeEvent(fileInput) {
    this.fileToUpload = <Array<File>>fileInput.target.files;
    this.fileName = this.fileToUpload[0].name;
  }
}
