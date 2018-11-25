import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyTasksPage } from './daily-tasks';

@NgModule({
  declarations: [
    DailyTasksPage,
  ],
  imports: [
    IonicPageModule.forChild(DailyTasksPage),
  ],
    exports: [
        DailyTasksPage
    ]
})
export class DailyTasksPageModule {}
