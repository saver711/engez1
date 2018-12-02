import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var $:any;
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
    
    goToeditPassword() {
        this.navCtrl.push('EditPasswordPage');
    }
    
    slideDown(target) {
        if(target == 'editName') {
            $('.set__edit--name').slideDown(200).css('display', 'flex');
        } else if(target == 'editPhone') {
            $('.set__edit--phone').slideDown(200).css('display', 'flex');
        } else if(target == 'editEmail') {
            $('.set__edit--email').slideDown(200).css('display', 'flex');
        } else {
            console.log('something is wrong')
        }
    }
    
    slideUp(target) {
        if(target == 'editName') {
            $('.set__edit--name').slideUp(200);
        } else if(target == 'editPhone') {
            $('.set__edit--phone').slideUp(200);
        } else if(target == 'editEmail') {
            $('.set__edit--email').slideUp(200);
        } else {
            console.log('something is wrong')
        }
    }

}
