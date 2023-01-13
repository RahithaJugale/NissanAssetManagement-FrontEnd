import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { AssetMaster } from '../shared/asset-master';
import { AssetMasterService } from '../shared/asset-master.service';

@Component({
  selector: 'app-asset-master-manage',
  templateUrl: './asset-master-manage.component.html',
  styleUrls: ['./asset-master-manage.component.scss']
})
export class AssetMasterManageComponent implements OnInit {

  constructor(public assetMasterService:AssetMasterService, private router:Router, private toastr:ToastrService) { }

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

  editDetails(assetMaster:AssetMaster){
    this.assetMasterService.assetMaster = assetMaster;
    this.router.navigateByUrl('/dashboard/asset-master-edit');
  }

  deleteDetails(assetMaster:AssetMaster){
    this.assetMasterService.assetMaster = assetMaster;
    if(confirm("Do you want to delete this Asset Master?")){
      assetMaster.isActive = false;
      this.assetMasterService.deleteAssetMaster(assetMaster).subscribe(
        (result) => {
          console.log(result);
          this.toastr.success("Asset deleted");
        },
        (error) => {
          console.log(error);
          this.toastr.error("Error");
        }
      );
    }
  }
}
