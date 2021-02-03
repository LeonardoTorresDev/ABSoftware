import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OpusService } from '../../../../shared/services/data/opus.service';
import { Router } from '@angular/router';
import { ArchivoModel } from '../../../../shared/models/archivo.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalles-finales',
  templateUrl: './detalles-finales.component.html',
  styleUrls: ['./detalles-finales.component.scss'],
})
export class DetallesFinalesComponent implements OnInit {
  form: FormGroup;
  tags: string[];
  showFollowers: boolean = false;
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

  crearFormulario(): void {
    this.form = this.formBuilder.group({
      nombreObra: ['', Validators.required],
      descripcion: [''],
      etiquetas: [''],
      private: [false, Validators.required],
      // privateViewers: [''],
      tipoObra: [this.opus.obra.tipoObra],
      imgPortada: [''],
    });
  }

  enviarObra(): void {
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
    const data = this.form.value;
    const opus = this.opus.obra;
    const formData = new FormData();

    formData.append('imgPortrait', this.form.get('imgPortada').value); // Cambiar el nombre del primer arg cuando el endpoint esté listo

    opus.nombreObra = data.nombreObra;
    opus.descripcion = data.descripcion;
    opus.tags = data.etiquetas;
    opus.private = data.private;
    opus.imgPortrait = formData;

    if (this.form.valid) {
      console.log(this.opus.obra);
      this.router.navigateByUrl('/createOpus/primera-version');
    }
  }

  async selectViewers(value: boolean) {
    const valor = this.form.get('private');
    valor.setValue(value);
    //Meter sweetAlert
    if (value) {
      await Swal.fire({
        text: '¿Desea agregar seguidores privados?',
        icon: 'question',
        showCancelButton: true,
        cancelButtonText: 'No',
        confirmButtonColor: '#6638b6',
        confirmButtonText: 'Sí',
      }).then((res) => {
        if (res.isConfirmed) {
          this.showFollowers = value;
        }
      });
    } else {
      this.showFollowers = value;
    }
  }

  fileChangeEvent(event: { target: { files: string | any[] } }) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('imgPortada').setValue(file);
      this.fileName = file.name;
    }
  }

  noValido(attr: string) {
    return this.form.get(attr).invalid && this.form.get(attr).touched;
  }
}
