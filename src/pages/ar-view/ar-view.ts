import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';

@Component({
  selector: 'page-ar-view',
  templateUrl: 'ar-view.html'
})
export class ARView {
  public theme;
  
  constructor(navCtrl: NavController, navParams: NavParams, platform: Platform, private cameraPreview: CameraPreview) {
    this.theme = navParams.get("themeId");    
  }
  
  ionViewDidLoad() {
    console.log('Hola ' + this.theme);
  }
  
}
