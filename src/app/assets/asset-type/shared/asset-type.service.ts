import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AssetType } from 'src/app/assets/asset-type/shared/asset-type';

@Injectable({
  providedIn: 'root'
})
export class AssetTypeService {

  assetTypeData : AssetType = new AssetType();
  assetTypes: AssetType[];

  constructor(private httpClient: HttpClient) { }

  //get list of all asset types
  getListOfAssetTypes():Observable<any>{
    return this.httpClient.get(environment.apiUrl + '/api/assetTypes');
  }

  //add new asset
  addNewAsset(assetType:AssetType):Observable<any>{
    return this.httpClient.post(environment.apiUrl + '/api/assetTypes', assetType);
  }

  //update existing asset type
  updateAssetType(assetType:AssetType):Observable<any>{
    return this.httpClient.post(environment.apiUrl + '/api/assetTypes', assetType);
  }

  //delete asset type
  deleteAssetType(assetType:AssetType):Observable<any>{
    return this.httpClient.post(environment.apiUrl + '/api/assetTypes', assetType);
  }
}
