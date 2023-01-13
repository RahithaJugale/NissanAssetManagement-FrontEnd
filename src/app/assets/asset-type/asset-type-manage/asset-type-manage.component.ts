import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AssetType } from '../shared/asset-type';
import { AssetTypeService } from '../shared/asset-type.service';

@Component({
  selector: 'app-asset-type-manage',
  templateUrl: './asset-type-manage.component.html',
  styleUrls: ['./asset-type-manage.component.scss']
})
export class AssetTypeManageComponent implements OnInit {

  constructor(public assetTypeService: AssetTypeService, private router: Router, private toastr:ToastrService) { }

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

  editDetails(assetType:AssetType){
    this.assetTypeService.assetTypeData = assetType;
    this.router.navigateByUrl('dashboard/asset-type-edit');
  }

  deleteDetails(assetType:AssetType){
    this.assetTypeService.assetTypeData = assetType;
    if(confirm("Do you want to delete this Asset Type?")){
      assetType.isActive = false;
      this.assetTypeService.deleteAssetType(assetType).subscribe(
        (result) => {
          console.log(result);
          this.toastr.success("Asset Type deleted");
        },
        (error) => {
          console.log(error);
          this.toastr.error("Error");
        }
      );
    }
  }
}
