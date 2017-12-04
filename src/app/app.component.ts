/// <reference path="WikitudePlugin.d.ts" />
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();

      /** Enter your Wikitude (trial) License Key here. You can register and download your free license key here: http://www.wikitude.com/developer/licenses */      
      WikitudePlugin._sdkKey = "SUmO1hz0KNXsiTAFp/L+INGGtMC4HIq+8Zio11BxnSYaj0JEE2qdFTfM4JH6V0t6AuyGunNYL6GrDvd87Tr/36knWvpmYufl4bsC8xo6KPy2GgakJyIGqixwMd8TSGl44AjNB/9zrffpnmNrKglyCY5TAGlAmFq4csdkoIwBgodTYWx0ZWRfX/EIV90kPa+U9K2avlwyqyL9awafoOmXHfhlkACYhphD3jOgE40Z8Oe00/xdNdfDfOKo9Dj9Hfl4zjGGDICniqlIAStQ/Z56niaecpfYiUyaQWnMzb46TsToDipp2HDsLljCGEPnO4POwy2o6Io+nlQQ2zH1IFui0X77iWLkdEEtjDv+sxKAt98fcHMsPOeaeWCFMUosRD0E0yVTAaOFAH0xfIzeorJRis+3+iHeIULcfJokgKbQtN0kFAlNZxK032440uT65lE8J72t6TAzRZj9Gk3zoGh8Ye66MsNJfEmq598vSL8TJiM31G1QG9wwaaudx5cKmFVGWRi1JePP7dpSuOBtzjZqnnZ8m4lzY2RiOE2+S51PGlaTXN8KzvlZv1gc0mdvUQBp0/EodFXiU/Z9YRqAQJKJ/b79KZNBGI7JaxJU9b/+UgUPnU0sfJ2sdQmwU/DJAsAGUyDA7Tzid2mLD4QzAbzTzs4pxnnsCKKcdX2SBTnUkM6X34BfY55dCSkrbrzEzon0";

      /** Check if your device supports AR */
      WikitudePlugin.isDeviceSupported(
          function(success) {
            console.log("Your platform supports AR/Wikitude. Have fun developing!!");
          },
          function(fail) {
            console.log("Your platform failed to run AR/Wikitude: "+fail);
          },
          [WikitudePlugin.FeatureGeo] // or WikitudePlugin.Feature2DTracking 
      );                  

      /** The Wikitude AR View creates it's own context. Communication between the main Ionic App and Wikitude SDK works 
       * through the function below for the direction Ionic2 app --> Wikitude SDK 
       * For calls from Wikitude SDK --> Ionic2 app see the captureScreen example in 
       * WikitudeIonic2StarterApp/www/assets/3_3dModels_6_3dModelAtGeoLocation/js/3dmodelatgeolocation.js*/
      // set the function to be called, when a "communication" is indicated from the AR View  
      WikitudePlugin.setOnUrlInvokeCallback(function(url) {

        // this an example of how to receive a call from a function in the Wikitude SDK (Wikitude SDK --> Ionic2)
        if (url.indexOf('captureScreen') > -1) {
            WikitudePlugin.captureScreen(
                (absoluteFilePath) => {
                    console.log("snapshot stored at:\n" + absoluteFilePath);

                    // this an example of how to call a function in the Wikitude SDK (Ionic2 app --> Wikitude SDK)
                    WikitudePlugin.callJavaScript("World.testFunction('Screenshot saved at: " + absoluteFilePath +"');");
                },
                (errorMessage) => {
                    console.log(errorMessage);
                },
                true, null
            );
        } else {
            alert(url + "not handled");
        }
      });

      /**
       * Define the generic ok callback
       */
      WikitudePlugin.onWikitudeOK = function() {
          console.log("Things went ok.");
      }
      
      /**
       * Define the generic failure callback
       */
      WikitudePlugin.onWikitudeError = function() {
          console.log("Something went wrong");
      }

      // Just as an example: set the location within the Wikitude SDK, if you need this (You can get the geo coordinates by using ionic native 
      // GeoLocation plugin: http://ionicframework.com/docs/v2/native/geolocation/
      //WikitudePlugin.setLocation(47, 13, 450, 1);

      /* for Android only
      WikitudePlugin.setBackButtonCallback(
          () => {
              console.log("Back button has been pressed...");
          }
      );                  
      */

    });
  }
}
