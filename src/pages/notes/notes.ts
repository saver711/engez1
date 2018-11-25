import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

declare var $: any;

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotesPage');
  }
    
    slideToggle(target) {
        if (target == 'note1') {
            $('.note1 .note__content').slideToggle(220);
        $('.note1 .note__title i').toggleClass('fa-chevron-down');
        $('.note1 .note__title i').toggleClass('fa-chevron-up');
        } else if (target == 'note2') {
            $('.note2 .note__content').slideToggle(220);
        $('.note2 .note__title i').toggleClass('fa-chevron-down');
        $('.note2 .note__title i').toggleClass('fa-chevron-up');
        } else if (target == 'note3') {
            $('.note3 .note__content').slideToggle(220);
        $('.note3 .note__title i').toggleClass('fa-chevron-down');
        $('.note3 .note__title i').toggleClass('fa-chevron-up');
        } else if (target == 'note4') {
            $('.note4 .note__content').slideToggle(220);
        $('.note4 .note__title i').toggleClass('fa-chevron-down');
        $('.note4 .note__title i').toggleClass('fa-chevron-up');
        } else {
            console.log('something wrong');
        }
        
    }
    
    presentConfirm() {
      let alert = this.alertCtrl.create({
        title: 'تأكيد الحذف',
        message: 'هل تود حذف هذه المذكرة ؟',
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
    
    goToAddNote() {
        this.navCtrl.push('AddNotePage');
    }

}
