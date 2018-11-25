import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeeklyTasksPage } from './weekly-tasks';

@NgModule({
  declarations: [
    WeeklyTasksPage,
  ],
  imports: [
    IonicPageModule.forChild(WeeklyTasksPage),
  ],
    exports: [
        WeeklyTasksPage
    ]
})
export class WeeklyTasksPageModule {}
