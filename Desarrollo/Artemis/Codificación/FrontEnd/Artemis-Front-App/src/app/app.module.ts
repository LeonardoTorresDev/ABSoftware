import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageModule } from './modules/landing-page/landing-page.module';
import { SignModule } from './modules/sign/sign.module';
import { HomeModule } from './modules/home/home.module';
import { HttpClientModule } from '@angular/common/http';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    SignModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [  {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          //Colocar el ID correspondiente
          provider: new GoogleLoginProvider(
            '39353298438-dhji60728g68g4tm1ts7722b4i5th23p.apps.googleusercontent.com'
          )
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          //Colocar el ID correspondiente
          provider: new FacebookLoginProvider('249601249844416')
        }
      ]
    } as SocialAuthServiceConfig,
  } ],
  bootstrap: [AppComponent],
})
export class AppModule {}
