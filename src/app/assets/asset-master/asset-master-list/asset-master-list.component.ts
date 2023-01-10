import { Component, OnInit } from '@angular/core';
import { AssetMasterService } from 'src/app/assets/asset-master/shared/asset-master.service';
import { AssetMaster } from '../shared/asset-master';

@Component({
  selector: 'app-asset-master-list',
  templateUrl: './asset-master-list.component.html',
  styleUrls: ['./asset-master-list.component.scss']
})
export class AssetMasterListComponent implements OnInit {

  constructor(public assetMasterService: AssetMasterService) { }

  ngOnInit(): void {
    this.getAllAssetMasters();
  }

  getAllAssetMasters(){
    this.assetMasterService.getAllAssetMaster().subscribe(
      (result) => {
        console.log(result);
        this.assetMasterService.assetMasters = result as AssetMaster[];
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
