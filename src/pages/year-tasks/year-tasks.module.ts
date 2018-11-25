import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YearTasksPage } from './year-tasks';

@NgModule({
  declarations: [
    YearTasksPage,
  ],
  imports: [
    IonicPageModule.forChild(YearTasksPage),
  ],
    exports: [
        YearTasksPage
    ]
})
export class YearTasksPageModule {}
