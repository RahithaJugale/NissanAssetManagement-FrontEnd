import { Component, OnInit } from '@angular/core';
import { AssetTypeService } from 'src/app/assets/asset-type/shared/asset-type.service';
import { AssetType } from '../shared/asset-type';

@Component({
  selector: 'app-asset-type-list',
  templateUrl: './asset-type-list.component.html',
  styleUrls: ['./asset-type-list.component.scss']
})
export class AssetTypeListComponent implements OnInit {

  constructor(public assetTypeService: AssetTypeService) { }

  ngOnInit(): void {
    this.getListOfAssetTypes();
  }

  //get list of all asset types
  getListOfAssetTypes(){
    this.assetTypeService.getListOfAssetTypes().subscribe(
      (result) => {
        console.log(result);
        this.assetTypeService.assetTypes = result as AssetType[];
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
