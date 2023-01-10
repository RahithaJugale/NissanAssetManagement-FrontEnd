import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AssetMaster } from './asset-master';

@Injectable({
  providedIn: 'root'
})
export class AssetMasterService {

  assetMaster: AssetMaster = new AssetMaster();
  assetMasters:AssetMaster[];
  constructor(private httpClient: HttpClient) { }

  //get all asset master
  getAllAssetMaster():Observable<any>{
    return this.httpClient.get(environment.apiUrl + '/api/assetMasters');
  }

  //update asset master
  updateAssetMaster(assetMaster:AssetMaster):Observable<any>{
    return this.httpClient.post(environment.apiUrl + '/api/assetMasters', assetMaster);
  }

  //delete asset master
  deleteAssetMaster(assetMaster:AssetMaster):Observable<any>{
    return this.httpClient.post(environment.apiUrl + '/api/assetMasters', assetMaster);
  }
}
