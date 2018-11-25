import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TomatoPage } from './tomato';

@NgModule({
  declarations: [
    TomatoPage,
  ],
  imports: [
    IonicPageModule.forChild(TomatoPage),
  ],
    exports: [
        TomatoPage
    ]
})
export class TomatoPageModule {}
