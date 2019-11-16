import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';
import { UserProfileIconComponent } from './user-profile-icon/user-profile-icon.component';


@NgModule({
  declarations: [UserDashBoardComponent, UserProfileIconComponent],
  exports: [UserDashBoardComponent, UserProfileIconComponent],
 
  imports: [
    CommonModule,
    UserDashboardRoutingModule
  ]
})
export class UserDashboardModule { }
