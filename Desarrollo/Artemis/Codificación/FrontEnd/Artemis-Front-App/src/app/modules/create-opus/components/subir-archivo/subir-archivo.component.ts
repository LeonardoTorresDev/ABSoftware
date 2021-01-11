import { Component, OnInit } from '@angular/core';
import { OpusService } from '../../../../shared/services/data/opus.service';
import { Router } from '@angular/router';
/* Clase para decidir qué tipo de obra se subirá */
@Component({
  selector: 'app-subir-archivo',
  templateUrl: './subir-archivo.component.html',
  styleUrls: ['./subir-archivo.component.scss'],
})
export class SubirArchivoComponent implements OnInit {
  tipo: string;

  constructor(private opus: OpusService, private router: Router) {}

  ngOnInit(): void {}
  enviarTipoObra(str: string) {
    this.opus.obra.tipoObra = str;
    this.router.navigateByUrl('createOpus/detalles-finales');
  }
}
