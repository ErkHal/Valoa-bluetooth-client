import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/*
  Author: Erkki Halinen 2018

  Notes:
  Controller class for the Color Chooser View. Allows selecting the color,
  and then sending it to the RGB controller via Bluetooth.
*/

@IonicPage()
@Component({
  selector: 'page-color-chooser',
  templateUrl: 'color-chooser.html',
})
export class ColorChooserPage {

  red = 0;
  green = 0;
  blue = 0;

  brightness = 50;

  previewColor = {
    'color' : "rgb(" + this.red + ',' + this.green + ',' + this.blue + ");"
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColorChooserPage');
  }

  //Send color code to provider
  sendColorCode() {
    let colorData: string = 
      this.red + "," + this.green + "," + this.blue;
    
      console.log(colorData);
      
    
  }

  setPreviewColor() {

    let calculatedBrightness = (this.brightness * 0.01);

    this.previewColor.color =
      "rgb(" + Math.floor(this.red * calculatedBrightness) + ',' + 
      Math.floor(this.green * calculatedBrightness) + ',' +
      Math.floor(this.blue * calculatedBrightness) + ")"

    return this.previewColor;
  }

}
