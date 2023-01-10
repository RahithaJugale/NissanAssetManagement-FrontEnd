import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AssetDefinition } from '../shared/asset-definition';
import { AssetDefinitionService } from '../shared/asset-definition.service';

@Component({
  selector: 'app-asset-definition-manage',
  templateUrl: './asset-definition-manage.component.html',
  styleUrls: ['./asset-definition-manage.component.scss']
})
export class AssetDefinitionManageComponent implements OnInit {

  constructor(public assetDefinitionService: AssetDefinitionService, private router:Router, private toastr: ToastrService) { }

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

  editDetails(assetDefinition){
    this.assetDefinitionService.assetDefinition = assetDefinition;
    this.router.navigateByUrl('dashboard/asset-definition-edit');
  }

  deleteDetails(assetDefinition){
    this.assetDefinitionService.assetDefinition = assetDefinition;
    if(confirm("Do you want to delete this Asset Definition?")){
      assetDefinition.isActive = false;
      this.assetDefinitionService.deleteAssetDefinition(assetDefinition).subscribe(
        (result) => {
          console.log(result);
          this.toastr.success("Asset Definition deleted");
        },
        (error) => {
          console.log(error);
          this.toastr.error("Error");
        }
      );
    }
  }
}
