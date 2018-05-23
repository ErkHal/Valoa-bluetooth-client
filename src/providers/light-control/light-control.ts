import { Injectable } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { ValueTransformer } from '@angular/compiler/src/util';

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

  bluetoothIsConnected() {
    return this.bt.isConnected();
  }

  //Returns Promise and eventually all bonded devices.
  getBondedDevices() {
    return this.bt.list();
  }

  //Connect to MAC address using Cordova Insecure connection
  connect(address: string) {
    return this.bt.connect(address);
  }

  /* 
  Send the color code to the RGB controller
  The string contains numerical values from 0 - 255 for each color channel
  Example data: 255,255,255 <- This would set color to full brightness white.
  */
  sendColorCode(colors: number[]) {

    let colorValueCommand = "<" + colors[0] + "," + colors[1] + ","
    + colors[2] + ">";
    console.log(colorValueCommand);
    return this.bt.write(colorValueCommand);
  }
}
