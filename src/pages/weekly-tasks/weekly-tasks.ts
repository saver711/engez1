import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//declare var $: any;

@IonicPage()
@Component({
  selector: 'page-weekly-tasks',
  templateUrl: 'weekly-tasks.html',
})
export class WeeklyTasksPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeeklyTasksPage');
  }
    
}
