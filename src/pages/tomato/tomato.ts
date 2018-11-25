import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LocalNotifications } from '@ionic-native/local-notifications';
import { Platform } from 'ionic-angular';

declare var $: any;

@IonicPage()
@Component({
  selector: 'page-tomato',
  templateUrl: 'tomato.html',
})
export class TomatoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private localNotifications: LocalNotifications, public plt: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TomatoPage');
  }
    
    hideExplain(){
        $('.explain').slideUp(200);
        $('.header').delay(200).slideDown(100);
        $('.mycontainer').css({
            height: 'auto'
        });
    }
    
    time: number = 20;
    
    pushNotification(){
        this.localNotifications.schedule({
            title: 'تم انجاز المهمة',
            text: 'نهنئك على انجاز هذه المهمة حان وقت الراحة القصيرة',
            sound: this.setSound(),
            trigger: {at: new Date(new Date().getTime() + .1)},
            led: 'FF0000'
    });
    }
    
    setSound() {
    if (this.plt.is('android')) {
      return 'file://assets/media/sound1.mp3'
        /*'file://assets/sounds/shame.mp3'*/
    } else {
      return 'file://assets/sounds/bell.mp3'
    }
  }

}
