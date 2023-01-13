import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PurchaseOrder } from '../shared/purchase-order';
import { PurchaseOrderService } from '../shared/purchase-order.service';

@Component({
  selector: 'app-purchase-order-manage',
  templateUrl: './purchase-order-manage.component.html',
  styleUrls: ['./purchase-order-manage.component.scss']
})
export class PurchaseOrderManageComponent implements OnInit {

  constructor(public purchaseOrderService: PurchaseOrderService, private router:Router, private toastr: ToastrService) { }

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

  //edit details
  editDetails(purchaseOrder:PurchaseOrder){
    this.purchaseOrderService.purchaseOrder = purchaseOrder;
    this.router.navigateByUrl("/purchase/purchase-order-edit");
  }

  //deleteDetails
  deleteDetails(purchaseOrder:PurchaseOrder){
    this.purchaseOrderService.purchaseOrder = purchaseOrder;
    if(confirm("Do you want to delete this Purchase order?")){
      purchaseOrder.isActive = false;
      this.purchaseOrderService.deletePurchaseOrder(purchaseOrder).subscribe(
        (result) => {
          console.log(result);
          this.toastr.success("Purchase Order deleted");
        },
        (error) => {
          console.log(error);
          this.toastr.error("Error");
        }
      );
    }
  }
}

