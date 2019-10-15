## Valoa

An app meant for controlling the [Valoa-Bluetooth-Controller Arduino sketch](https://github.com/ErkHal/LedController) 

### Screenshot 
<img src="valoa.png" width="230" height="400">

## Setup & Installation
You will need to install Ionic and Cordova to compile the project.

When you have installed them you can compile the app for android with:
```
ionic cordova run android
```
or for iOS:
```
ionic cordova run ios
```
Notice that I haven't tested the app in iOS, only in Android.

## Usage
You will need to pair your smartphone with the HC-06 module by going to your bluetooth settings
and connecting to it. It will ask for a pin code, which is usually 1234 or 0000 if you haven't changed it.

After the pairing is completed you can start the application, and then choose the HC-06 named device from the
paired devices list.

If the connection succeeds, the app will open into the screen that is shown in the screenshot. There you can choose the color 
values for Red, Green and Blue and also the brightness.

After that just press "Set Color" button and the controller will setup the correct color for your lighting setup.

That's pretty much it. If you have some questions, feel free to send me a message. You are free to copy and reuse my code for your own project without any restrictions.
