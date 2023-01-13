import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from 'src/app/vendors/shared/vendor';
import { environment } from 'src/environments/environment';
import { PurchaseOrder } from './purchase-order';
import { PurchaseStatus } from 'src/app/purchase-order/shared/purchase-status';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {

  assetTypeName: string ='';
  assetTypeId: number = 0;
  purchaseOrder : PurchaseOrder = new PurchaseOrder();
  purchaseOrders:PurchaseOrder[] =[];
  purchaseVendors: Array<Vendor>;
  purchaseStatus: PurchaseStatus[];
  constructor(private httpClient: HttpClient) { }

  //get all purchase orders
  getAllPurchaseOrders():Observable<any>{
    return this.httpClient.get(environment.apiUrl + '/api/purchaseOrders');
  }

  //add new purchase order
  addNewPurchaseOrder(purchaseOrder:PurchaseOrder):Observable<any>{
    return this.httpClient.post(environment.apiUrl + '/api/purchaseOrders', purchaseOrder);
  }
  //update purchase order
  updatePurchaseOrder(purchaseOrder:PurchaseOrder):Observable<any>{
    return this.httpClient.post(environment.apiUrl + '/api/purchaseOrders', purchaseOrder);
  }
  //add new purchase order
  deletePurchaseOrder(purchaseOrder:PurchaseOrder):Observable<any>{
    return this.httpClient.post(environment.apiUrl + '/api/purchaseOrders', purchaseOrder);
  }

  //get purchase status
  getPurchaseStatus():Observable<any>{
    return this.httpClient.get(environment.apiUrl + '/api/purchaseStatus');
  }
}
