import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logOut():void{
    localStorage.removeItem("EMAIL");
    localStorage.removeItem("ACCESS_ROLE");
    localStorage.removeItem("ACCESS_TOKEN");
    sessionStorage.removeItem("EMAIL");
  }
}
