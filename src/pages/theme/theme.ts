import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ARView } from '../ar-view/ar-view';


@Component({
  selector: 'page-theme',
  templateUrl: 'theme.html',
})
export class ThemePage {
  public theme;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.theme = navParams.get("themeId");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThemePage');

  }
  openGame(themeId) {
    this.navCtrl.push(ARView ,{ theme: themeId });  
  }  
  
}
