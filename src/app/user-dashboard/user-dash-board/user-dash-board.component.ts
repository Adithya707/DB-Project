import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dash-board',
  templateUrl: './user-dash-board.component.html',
  styleUrls: ['./user-dash-board.component.css']
})
export class UserDashBoardComponent implements OnInit {
  user: any;
  isLoggedIn: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
    this.getUser();
  }
  getUser() {
    if (localStorage.getItem('currentUser')) {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
      this.isLoggedIn = true;
    }
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.isLoggedIn = false;
    this.router.navigate(['/Home']);
  }
}
