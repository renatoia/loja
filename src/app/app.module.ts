import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { IonicStorageModule } from '@ionic/storage';
import { AuthService } from '../services/auth.service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DetalhePageModule } from '../pages/detalhe/detalhe.module';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http'
import { ProdutoService } from './../services/produto';
import { ContactFormService } from '../services/contact-form.service';
//import { ContactPageModule } from '../pages/contact/contact.module';
import { ContactPage } from '../pages/contact/contact';
import { ThankyouPage } from '../pages/thankyou/thankyou';
import { DetalhePage } from '../pages/detalhe/detalhe';

//const cloudSettings: CloudSettings = {
//  'core': {
//    'app_id': 'd8478dda'
//  }
//};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    DetalhePage,
    ContactPage,
    ThankyouPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetalhePage,
    LoginPage,
    ContactPage,
    ThankyouPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProdutoService,
    ContactFormService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
