import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LightControlProvider } from '../../providers/light-control/light-control';

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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private lightControl: LightControlProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColorChooserPage');
  }

  //Send color code to provider
  sendColorCode() {

    let colors = this.calculateColorValues();

      console.log(colors);
      this.lightControl.sendColorCode(colors);
    
  }

  setPreviewColor() {

    let calculatedBrightness = (this.brightness * 0.01);

    this.previewColor.color =
      "rgb(" + Math.floor(this.red * calculatedBrightness) + ',' + 
      Math.floor(this.green * calculatedBrightness) + ',' +
      Math.floor(this.blue * calculatedBrightness) + ")"

    return this.previewColor;
  }

  calculateColorValues(): number[] {

    let calculatedBrightness = (this.brightness * 0.01);

    let redValue = Math.floor(this.red * calculatedBrightness);
    let greenValue = Math.floor(this.green * calculatedBrightness);
    let blueValue = Math.floor(this.blue * calculatedBrightness);

    let colors = [redValue, greenValue, blueValue];

    return colors;
  }

}
