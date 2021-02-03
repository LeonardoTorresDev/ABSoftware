import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageModule } from './modules/landing-page/landing-page.module';
import { SignModule } from './modules/sign/sign.module';
import { HomeModule } from './modules/home/home.module';
import { PostModule } from './modules/post/post.module'
import { ProfileModule } from './modules/profile/profile.module';
import { HttpClientModule } from '@angular/common/http';

import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { SharedModule } from './shared/shared.module';
import localeEs from '@angular/common/locales/es';

import { registerLocaleData } from '@angular/common';
import { CreateOpusModule } from './modules/create-opus/create-opus.module';

registerLocaleData(localeEs); //Se setea el idioma de pipes al español

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    SignModule,
    HomeModule,
    PostModule,
    HttpClientModule,
    SharedModule,
    ProfileModule,
    CreateOpusModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            //Colocar el ID correspondiente
            provider: new GoogleLoginProvider(
              '12773282290-heah8rpv61jhoppeetnodg0rnqhufupt.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
    {
      provide: LOCALE_ID,
      useValue: 'es',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
