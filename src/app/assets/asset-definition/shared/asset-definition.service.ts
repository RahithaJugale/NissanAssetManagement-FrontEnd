import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AssetDefinition } from './asset-definition';

@Injectable({
  providedIn: 'root'
})
export class AssetDefinitionService {

  assetDefinition: AssetDefinition = new AssetDefinition();

  assetDefinitions:AssetDefinition[];
  constructor(private httpClient:HttpClient) { }

  //get all asset definition
  getAllAssetDefinition():Observable<any>{
    return this.httpClient.get(environment.apiUrl + '/api/assets');
  }

  //add new asset definition
  addNewAssetDefinition(assetDefinition:AssetDefinition):Observable<any>{
    return this.httpClient.post(environment.apiUrl + '/api/assets',assetDefinition);
  }

  //delete asset definition
  deleteAssetDefinition(assetDefinition:AssetDefinition):Observable<any>{
    return this.httpClient.post(environment.apiUrl + '/api/assets',assetDefinition);
  }
}
