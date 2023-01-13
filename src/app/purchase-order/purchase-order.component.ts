import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.scss']
})
export class PurchaseOrderComponent implements OnInit {

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
