import { Component } from '@angular/core';

import { NavController, Events } from 'ionic-angular';

import { UserModel } from '../../models/user.model';
import { ThemePage } from '../theme/theme';

import { AndroidPermissions } from '@ionic-native/android-permissions';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: UserModel;
  currentUser: UserModel;

  constructor(public navCtrl: NavController, public events: Events, private barcodeScanner: BarcodeScanner ) {
    this.user = new UserModel();
    events.subscribe('user:exist', (user) => {
      this.user = user;
      console.log(user);
    }); 
  }
  
  scanMarker(){
    this.barcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
      console.log(barcodeData);
      this.openTheme(barcodeData.text);
    }, (err) => {
      // An error occurred
    });
  }

  openTheme(themeId) {
    this.navCtrl.push(ThemePage ,{ theme: themeId });  
  }  
  
}
