import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit-settings',
  templateUrl: 'edit-settings.html',
})
export class EditSettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditSettingsPage');
  }
    
    goBack(){
        this.navCtrl.pop(); 
    }

}
