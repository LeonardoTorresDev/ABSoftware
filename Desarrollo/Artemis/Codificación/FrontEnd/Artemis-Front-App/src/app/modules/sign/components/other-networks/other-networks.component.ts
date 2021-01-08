import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

import { AuthService } from '../../../../shared/services/auth/auth.service';
import { LoginI } from '../../../../shared/models/login.interface';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other-networks',
  templateUrl: './other-networks.component.html',
  styleUrls: ['./other-networks.component.scss'],
  providers: [SocialAuthService, SocialUser],
})
export class OtherNetworksComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;
  login: LoginI;

  constructor(
    private authService: SocialAuthService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
    });
  }

  signInWithGoogle(): void {
    this.authService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((res) => {
        Swal.fire({
          titleText: '¡Cuenta con Google sincronizada! 🥳',
          icon: 'success',
          showConfirmButton: false,
        });
        this.auth.signWithGoogle(res.idToken).subscribe(() => {
          Swal.close();
          this.router.navigateByUrl('/home');
        });
      })
      .catch((err) => console.log(err));
  }

  signOut(): void {
    this.authService.signOut();
  }
}
