import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit-password',
  templateUrl: 'edit-password.html',
})
export class EditPasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPasswordPage');
  }
    
    goBack() {
        this.navCtrl.pop();
    }

}
