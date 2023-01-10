import { Component, OnInit } from '@angular/core';
import { AssetDefinition } from '../shared/asset-definition';
import { AssetDefinitionService } from '../shared/asset-definition.service';

@Component({
  selector: 'app-asset-definition-list',
  templateUrl: './asset-definition-list.component.html',
  styleUrls: ['./asset-definition-list.component.scss']
})
export class AssetDefinitionListComponent implements OnInit {

  constructor(public assetDefinitionService:AssetDefinitionService) { }

  ngOnInit(): void {
    this.getAllAssetDefinition();
  }

  getAllAssetDefinition(){
    this.assetDefinitionService.getAllAssetDefinition().subscribe(
      (result) => {
        console.log(result);
        this.assetDefinitionService.assetDefinitions = result as AssetDefinition[];
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
