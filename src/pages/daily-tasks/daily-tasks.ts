import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

declare var $: any;

@IonicPage()
@Component({
  selector: 'page-daily-tasks',
  templateUrl: 'daily-tasks.html',
})
export class DailyTasksPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DailyTasksPage');
  }

    presentConfirm() {
      let alert = this.alertCtrl.create({
        title: 'تأكيد الحذف',
        message: 'هل تود حذف هذا الهدف ؟',
        buttons: [
          {
            text: 'الغاء',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'تأكيد',
            handler: () => {
              console.log('agree clicked');
            }
          }
        ]
      });
      alert.present();
    }
    
    goToAddTask() {
        this.navCtrl.push('AddTaskPage');
    }
    
    showCheckbox() {
        let alert = this.alertCtrl.create();
        alert.setTitle('نسبة الانجاز');

        alert.addInput({
          type: 'radio',
          label: '10%',
          value: '10',
          checked: true
        });

        alert.addInput({
          type: 'radio',
          label: '30%',
          value: '30'
        });
        
        alert.addInput({
          type: 'radio',
          label: '50%',
          value: '50'
        });
        
        alert.addInput({
          type: 'radio',
          label: '75%',
          value: '75'
        });
        
        alert.addInput({
          type: 'radio',
          label: '100%',
          value: '100'
        });

        alert.addButton({
          text: 'موافق',
          handler: data => {
            console.log('Checkbox data:', data);
              $('.isDone').hide();
              $('.done1').css('display', 'inline-flex');
          }
        });
        alert.addButton('الغاء');
        alert.present();
    }


}
