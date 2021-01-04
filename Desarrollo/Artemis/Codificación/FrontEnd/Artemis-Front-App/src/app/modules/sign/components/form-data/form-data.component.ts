import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss']
})
export class FormDataComponent implements OnInit {

  @Input() instanceSignIn: boolean
  @Input() instanceSignUp: boolean

  nameFirstLabel: String
  nameSecondLabel: String
  nameButton: String

  constructor() { }

  ngOnInit(): void {
    this.asignNames()
  }

  asignNames(){
    if (this.instanceSignIn){
      this.nameFirstLabel = "Correo electrónico"
      this.nameSecondLabel = "Contraseña"
      this.nameButton = "Iniciar Sesión"
    }
    else if(this.instanceSignUp){
      this.nameFirstLabel = "Nombre artístico"
      this.nameSecondLabel = "Nombre de usuario"
      this.nameButton = "Unirse a Artemis"
    }
  }

}
