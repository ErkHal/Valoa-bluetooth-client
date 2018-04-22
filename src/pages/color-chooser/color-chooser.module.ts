import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ColorChooserPage } from './color-chooser';

@NgModule({
  declarations: [
    ColorChooserPage,
  ],
  imports: [
    IonicPageModule.forChild(ColorChooserPage),
  ],
})
export class ColorChooserPageModule {}
