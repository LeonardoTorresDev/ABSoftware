import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

import { AuthService } from '../../../../shared/services/auth/auth.service'
import { LoginI } from '../../../../shared/models/login.interface'
import { ResponseI } from '../../../../shared/models/response.interface'


@Component({
  selector: 'app-other-networks',
  templateUrl: './other-networks.component.html',
  styleUrls: ['./other-networks.component.scss'],
  providers: [SocialAuthService, SocialUser]
})
export class OtherNetworksComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;
  login: LoginI

  constructor(private authService: SocialAuthService,
              private logService: AuthService){ }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
    //this.login.email = this.user.email
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  onLogin(){
    this.logService.Savesresponse(this.login).subscribe(data => {
      console.log(data);
    });
  }

}
