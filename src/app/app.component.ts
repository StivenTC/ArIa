/// <reference path="WikitudePlugin.d.ts" />*/
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ThemePage } from '../pages/theme/theme';


@Component({
  templateUrl: 'app.html'
})
export class ARIA {
  rootPage = HomePage;

  constructor(public platform: Platform, public statusBar: StatusBar, public Splashscreen: SplashScreen) {
    this.platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        //StatusBar.styleDefault();
        Splashscreen.hide();
    }); 
  }
}
