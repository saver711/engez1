import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonthlyTasksPage } from './monthly-tasks';

@NgModule({
  declarations: [
    MonthlyTasksPage,
  ],
  imports: [
    IonicPageModule.forChild(MonthlyTasksPage),
  ],
    exports: [
        MonthlyTasksPage
    ]
})
export class MonthlyTasksPageModule {}
