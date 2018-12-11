import { Component } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing';

import { WhatsPage } from '../whats/whats';
import { HomePage } from '../home/home';

declare var $: any;

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab3Root = WhatsPage;
tab4Root = 'CallPage';

  constructor(private socialSharing: SocialSharing) {

  }
    openFab(){
        $('.share').slideToggle(140);
    }
    
    share(target){
        if (target == 'Facebook') {
            this.socialSharing.shareViaFacebook('حمل تطبيق مفكرة انجز من هنا', '', 'https://play.google.com/store/apps/details?id=com.android4allah.anjez').catch(() => {alert('Please install facebook first!')});
            
        } else if (target == 'Twitter') {
            this.socialSharing.shareViaTwitter('حمل تطبيق مفكرة انجز من هنا', '', 'https://play.google.com/store/apps/details?id=com.android4allah.anjez').catch(() => {alert('Please install Twitter first!')});
            
        } else if (target == 'WhatsApp') {
            this.socialSharing.shareViaWhatsApp('حمل تطبيق مفكرة انجز من هنا', '', 'https://play.google.com/store/apps/details?id=com.android4allah.anjez').catch(() => {alert('Please install WhatsApp first!')});
            
        } else if (target == 'Instagram') {
            this.socialSharing.shareViaInstagram('حمل تطبيق مفكرة انجز من هنا', '').catch(() => {alert('Please install Instagram first!')});
            
        } else {
            console.log('something is wrong');
        }
        
    }
    
}
