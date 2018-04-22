import { Injectable } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

/*
  Author: Erkki Halinen 2018

  Notes:
  Provider class for bluetooth communication between the app and the Arduino
  microcontroller.
*/
@Injectable()
export class LightControlProvider {

  activeConnection;

  constructor(private bt: BluetoothSerial) {}

  enableBluetooth() {
    return this.bt.enable();
  }

  //Returns Promise and eventually all bonded devices.
  getBondedDevices() {
    return this.bt.list();
  }

  //Connect to MAC address using Cordova Insecure connection
  connect(address: string) {
    return this.bt.connectInsecure(address);
  }

  /* 
  Send the color code to the RGB controller
  The string contains numerical values from 0 - 255 for each color channel
  Example data: 255,255,255 <- This would set color to full brightness white.
  */
  sendColorCode(color: string) {
    return this.bt.write(color);
  }

}
