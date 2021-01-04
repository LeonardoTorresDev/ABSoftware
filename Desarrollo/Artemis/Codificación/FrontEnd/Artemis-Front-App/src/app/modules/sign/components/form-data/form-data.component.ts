import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss']
})
export class FormDataComponent implements OnInit {
  form: FormGroup

  @Input() instanceSignIn: boolean
  @Input() instanceSignUp: boolean

  nameFirstLabel: String
  nameSecondLabel: String
  nameButton: String

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      firstField: ['', Validators.required],
      secondField: ['', Validators.required],
      remember: [false, Validators.requiredTrue],
      // [Valor por defecto, valores síncronos, validadores asíncronos]
    });
   }

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

  rememberCheck() {
    const valor = this.form.get('remember');

    if (valor.value === false) {
      return valor.setValue(true);
    }
    return valor.setValue(false);
  }

}
