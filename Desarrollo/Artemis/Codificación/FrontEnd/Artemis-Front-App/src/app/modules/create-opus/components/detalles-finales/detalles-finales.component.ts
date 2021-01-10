import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OpusService } from '../../../../shared/services/data/opus.service';

@Component({
  selector: 'app-detalles-finales',
  templateUrl: './detalles-finales.component.html',
  styleUrls: ['./detalles-finales.component.scss'],
})
export class DetallesFinalesComponent implements OnInit {
  form: FormGroup;
  tags: string[];
  showFollowers: boolean = false;

  constructor(private formBuilder: FormBuilder, private opus: OpusService) {
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
    this.setTags();
    console.log(this.form);
  }

  setTags() {
    const re = /,\s\s\s|,\s\s|,\s|,/;
    this.form.value.etiquetas.toLowerCase().split(re);
  }

  selectViewers(value: boolean) {
    this.showFollowers = value;
  }
}
