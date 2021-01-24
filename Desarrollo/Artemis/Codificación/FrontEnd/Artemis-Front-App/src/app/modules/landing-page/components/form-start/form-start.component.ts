import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-start',
  templateUrl: './form-start.component.html',
  styleUrls: ['./form-start.component.scss'],
  providers: [SocialUser, SocialAuthService],
})
export class FormStartComponent implements OnInit {
  user: SocialUser;
  loginIn: boolean;

  registerForm: FormGroup;
  loading = false;

  constructor(
    private router: Router,
    private authService: SocialAuthService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  signInWithGoogle() {
    this.authService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((res) => {
        Swal.fire({
          titleText: '¡Cuenta con Google sincronizada!\n🥳',
          icon: 'success',
          showConfirmButton: false,
        });
        this.auth.signWithGoogle(res.idToken).subscribe(() => {
          Swal.close();
          this.router.navigateByUrl('/home');
          window.scroll(0, 0);
        });
      })
      .catch((err) => console.log(err));
  }

  signOut(): void {
    this.authService.signOut();
  }

  onClick() {
    if (this.registerForm.invalid) {
      return Object.values(this.registerForm.controls).forEach((control) => {
        control.markAsTouched();
      });
    }

    this.auth.usuario = this.registerForm.value;
    this.router.navigate(['/signup']);
  }

  noValido(attr: string) {
    return this.registerForm.get(attr).invalid && this.registerForm.get(attr).touched;
  }
}
