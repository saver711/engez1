import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//declare var $: any;

@IonicPage()
@Component({
  selector: 'page-year-tasks',
  templateUrl: 'year-tasks.html',
})
export class YearTasksPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YearTasksPage');
  }
    
    
}
