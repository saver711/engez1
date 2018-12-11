import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

declare var $: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    
  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {

  }
    
    goTo(target) {
        if (target == 'daily') {
            this.navCtrl.push("DailyTasksPage");
        } else if (target == 'weekly') {
            this.navCtrl.push("WeeklyTasksPage");
        }
        else if (target == 'monthly') {
            this.navCtrl.push("MonthlyTasksPage");
        }
        else if (target == 'year') {
            this.navCtrl.push("YearTasksPage");
        }
        else if (target == 'task') {
            this.navCtrl.push("AddTaskPage");
        }
        else if (target == 'notes') {
            this.navCtrl.push("NotesPage");
        }
        else if (target == 'tomato') {
            this.navCtrl.push("TomatoPage");
        }
        else if (target == 'register') {
            this.navCtrl.push("RegisterPage");
        } else if (target == 'settings') {
            this.navCtrl.push("SettingsPage");
        } else {
            console.log('something wrong');
        }
    }

    
    /////////////
    slideToggle(target) {
        if (target == 'daily') {
            $('.daily-card .card__content').slideToggle(220);
            $('.daily-card .card__header i').toggleClass('fa-chevron-down');
            $('.daily-card .card__header i').toggleClass('fa-chevron-up');
        } 
        
        else if (target == 'weekly') {
            $('.weekly-card .card__content').slideToggle(220);
            $('.weekly-card .card__header i').toggleClass('fa-chevron-up');
            $('.weekly-card .card__header i').toggleClass('fa-chevron-down');
        } 
        
        else if (target == 'monthly') {
            $('.monthly-card .card__content').slideToggle(220);
            $('.monthly-card .card__header i').toggleClass('fa-chevron-up');
            $('.monthly-card .card__header i').toggleClass('fa-chevron-down');
        } 
        
        else if (target == 'year') {
            $('.year-card .card__content').slideToggle(220);
            $('.year-card .card__header i').toggleClass('fa-chevron-up');
            $('.year-card .card__header i').toggleClass('fa-chevron-down');
        } else {
            console.log('something wrong');
        }
        
    }
    
    ionViewWillEnter() {
        /*6/12*/
        $('.register-msg').delay(860).fadeIn();
        setTimeout(function(){
        $('.title').addClass('fadeAfter');
           },1010)
    }
    
    presentToast() {
  let toast = this.toastCtrl.create({
    message: 'سجل أولا',
    duration: 88888000,
    position: 'middle',
      cssClass: 'ourToast'
  });

  toast.present();
}
}