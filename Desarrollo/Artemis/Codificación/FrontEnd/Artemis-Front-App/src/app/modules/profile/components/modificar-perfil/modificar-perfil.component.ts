import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../shared/services/data/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar-perfil',
  templateUrl: './modificar-perfil.component.html',
  styleUrls: ['./modificar-perfil.component.scss'],
})
export class ModificarPerfilComponent implements OnInit {
  profilePhoto: string;
  fileName: string = '';
  form: FormGroup;
  usuario: any = {};

  constructor(
    private user: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.formularioPerfil();
  }

  ngOnInit(): void {
    this.getInfoUser();
  }

  getInfoUser(): void {
    this.user.getUser().subscribe((res: any) => {
      this.profilePhoto = res.profile_img_url;
      this.usuario = res;
    });
  }

  fileChangeEvent(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('image').setValue(file);
      this.fileName = file.name;
    }
  }

  formularioPerfil(): void {
    this.form = this.fb.group({
      artistic_name: [''],
      nick_name: [''],
      password: [''],
      email: [''],
      image: [''],
    });
  }

  actualizarPerfil() {
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach((control) => {
        control.markAsTouched();
      });
    }

    Swal.fire({
      title: 'Actualizando perfil',
      text: 'Espere, por favor',
      icon: 'info',
    });
    Swal.showLoading();

    const formData = new FormData();
    const value = this.form.value;
    for (let prop in value) {
      formData.append(prop, this.form.get(prop).value);
      if (value[prop] === '' || value[prop] === null) {
        formData.delete(prop);
      }
    }
    console.log('formData:', formData);
    this.user.updateUser(formData).subscribe(
      (res: any) => {
        Swal.fire({
          title: '¡Actualización exitosa!',
          text: res.msg,
          timer: 750,
        });
        this.router.navigate(['profile']);
      },
      (err) => {
        Swal.fire({
          allowOutsideClick: true,
          icon: 'error',
          titleText: 'Error al actualizar 😯',
          text: `${err.error.error}`,
        });
      }
    );
  }
}
