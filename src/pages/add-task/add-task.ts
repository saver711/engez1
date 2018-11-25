import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var $: any;

@IonicPage()
@Component({
  selector: 'page-add-task',
  templateUrl: 'add-task.html',
}) 
export class AddTaskPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTaskPage');
  }
    
    toggle() {
        $('.repeat__msg').slideToggle(200);

    }
    
    classToggle() {
        $('.repeat__icon').toggleClass('active');
    }
    
    goBack() { 
        this.navCtrl.pop();
    }


}
