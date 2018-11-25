import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//declare var $: any;

@IonicPage()
@Component({
  selector: 'page-monthly-tasks',
  templateUrl: 'monthly-tasks.html',
})
export class MonthlyTasksPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MonthlyTasksPage');
  }
    

}
