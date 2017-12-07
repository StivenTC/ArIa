import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule }    from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ARView } from '../pages/ar-view/ar-view';
import { LoginPage } from '../pages/login/login';
import { ThemePage } from '../pages/theme/theme';

import { ApiService } from '../services/api-service';
import { TokenService } from '../services/token-services';
import { Oauth2Service } from '../services/oauth2.service';
import { AuthService } from '../services/auth.service';

import { UtilProvider } from '../providers/util-provider';
import { StringsProvider } from '../providers/strings-provider';

import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Network } from '@ionic-native/network';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/** Componentes */
import { ARIA } from './app.component';

@NgModule({
  declarations: [
    ARIA,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ARView,
    ThemePage
  ],
  imports: [
      BrowserModule,
      HttpModule,
    BrowserModule,
    IonicModule.forRoot(ARIA)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ARIA,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ARView,
    ThemePage
  ],
  providers: [
    StatusBar,
    InAppBrowser,
    Network,
    SplashScreen,
    UtilProvider,
    ApiService,
    TokenService,
    BarcodeScanner,
    AndroidPermissions,
    Oauth2Service,
    AuthService,    
    StringsProvider,    
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
