import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';

const routes: Routes = [
  {path:'',component:UserDashBoardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
