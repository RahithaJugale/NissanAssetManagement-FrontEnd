import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PurchaseOrder } from './purchase-order';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {

  assetType: number = 0;
  assetDefinitionId: number = 0;
  purchaseOrder : PurchaseOrder = new PurchaseOrder();
  purchaseOrders:PurchaseOrder[];
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
}
