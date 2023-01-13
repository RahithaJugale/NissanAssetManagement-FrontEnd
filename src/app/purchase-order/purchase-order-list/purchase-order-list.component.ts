import { Component, OnInit } from '@angular/core';
import { PurchaseOrder } from '../shared/purchase-order';
import { PurchaseOrderService } from '../shared/purchase-order.service';

@Component({
  selector: 'app-purchase-order-list',
  templateUrl: './purchase-order-list.component.html',
  styleUrls: ['./purchase-order-list.component.scss']
})
export class PurchaseOrderListComponent implements OnInit {

  constructor(public purchaseOrderService: PurchaseOrderService) { }

  ngOnInit(): void {
    this.getAllPurchaseList();
  }

  //get all purchase list
  getAllPurchaseList() {
    this.purchaseOrderService.getAllPurchaseOrders().subscribe(
      (result) => {
        console.log(result);
        this.purchaseOrderService.purchaseOrders = result as PurchaseOrder[];
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
