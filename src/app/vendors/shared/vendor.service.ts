import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vendor } from './vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  vendor:Vendor = new Vendor;
  vendors:Vendor[];

  constructor(private httpClient: HttpClient) { }

  //add new vendor
  addNewVendor(vendor:Vendor):Observable<any>{
    return this.httpClient.post(environment.apiUrl + '/api/vendors', vendor);
  }

  //getVendorList
  getVendorList():Observable<any>{
    return this.httpClient.get(environment.apiUrl + '/api/vendors');
  }

  //update vendor
  updateVendor(vendor:Vendor):Observable<any>{
    return this.httpClient.post(environment.apiUrl + '/api/vendors', vendor);
  }

  //delete vendor
  deleteVendor(vendor:Vendor):Observable<any>{
    return this.httpClient.post(environment.apiUrl + '/api/vendors', vendor);
  }
}
