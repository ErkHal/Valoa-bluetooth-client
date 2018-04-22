import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LightControlProvider } from '../providers/light-control/light-control';
import { ColorChooserPage } from '../pages/color-chooser/color-chooser';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ColorChooserPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ColorChooserPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BluetoothSerial,
    LightControlProvider,
  ]
})
export class AppModule {}
