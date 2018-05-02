import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LightControlProvider } from '../../providers/light-control/light-control';
import { ColorChooserPage } from '../color-chooser/color-chooser';

/*
  Author: Erkki Halinen 2018

  Notes:
  Controller class for the HomePage view, which allows user to select the device
  they want to connect to. Lists ONLY bonded devices, so the connection to the Arduino
  controller must be made before starting the application.
*/

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  connectionError = false;
  
  bondedDevices = [];
  message: string;

  constructor(public navCtrl: NavController,
              private lightController: LightControlProvider) {

  }

  goToColorChooser() {
    this.navCtrl.push(ColorChooserPage);
  }

  ionViewDidLoad() {
    this.lightController.enableBluetooth()
      .then( result => {
        //this.navCtrl.push(ColorChooserPage);
        this.lightController.bluetoothIsConnected()
          .then(result => {
            this.navCtrl.push(ColorChooserPage);
          }).catch(err => {
            this.getBondedDevices();
          });
      }).catch( err => {
        console.log(err);
        this.connectionError = true;
        this.message = "Error while fetching devices, restart the application";
      })
  }

  //Connects to chosen MAC address
  connectToDevice(address: string) {
    this.connectionError = false;
    this.message = "Connecting to " + address;
    this.lightController.connect(address)
      .subscribe((btConnection) => {
        console.log(btConnection);
        this.lightController.activeConnection = btConnection;
        this.navCtrl.push(ColorChooserPage);
    }, err => {
      console.log(err);
      this.connectionError = true;
      this.message = "Couldn't connect to device, try again !";
    });
  }

  //List all bonded BT devices
  getBondedDevices(refresher?) {
    this.lightController.getBondedDevices()
      .then((result) => {
        this.connectionError = false;
        this.message = "";
        console.log(result);
        this.bondedDevices = result;

        if(refresher) {
          refresher.complete();
        }
    });
  }
}
