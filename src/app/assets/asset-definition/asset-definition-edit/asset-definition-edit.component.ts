import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AssetType } from '../../asset-type/shared/asset-type';
import { AssetTypeService } from '../../asset-type/shared/asset-type.service';
import { AssetDefinitionService } from '../shared/asset-definition.service';

@Component({
  selector: 'app-asset-definition-edit',
  templateUrl: './asset-definition-edit.component.html',
  styleUrls: ['./asset-definition-edit.component.scss']
})
export class AssetDefinitionEditComponent implements OnInit {

  isSubmitted:boolean = false;
  editAssetDefinitionForm:FormGroup;
  constructor(private formBuilder: FormBuilder, public assetTypeService:AssetTypeService, private toastr:ToastrService, public assetDefinitionService:AssetDefinitionService, private router:Router) { }

  ngOnInit(): void {

    this.editAssetDefinitionForm = this.formBuilder.group(
      {
        //assetDefinition Id
        assetDefinitionId: [this.assetDefinitionService.assetDefinition.assetDefinitionId],

        //name
        name: [this.assetDefinitionService.assetDefinition.name, [Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern("[a-zA-Z ]")]],

        //assetTypeId
        assetTypeId: [this.assetDefinitionService.assetDefinition.assetTypeId],

        //classId
        classId: [this.assetDefinitionService.assetDefinition.classId],

        //isActive
        isActive: [this.assetDefinitionService.assetDefinition.isActive]
      }
    );

    this.getListOfAssetTypes();
  }

  submitDetails(){
    this.isSubmitted = true;
    if(this.editAssetDefinitionForm.invalid){
      this.toastr.error("Please check all values");
    }
    if(this.editAssetDefinitionForm.valid){
      this.assetDefinitionService.addNewAssetDefinition(this.editAssetDefinitionForm.value).subscribe(
        (result) => {
          console.log(result);
          this.toastr.success("Asset Definition changed successfully");
          this.router.navigateByUrl('/dashboard/asset-definition-manage');
        },
        (error) => {
          console.log(error);
          this.toastr.error("Error");
        }
      );
    }
  }

  get formControls(){
    return this.editAssetDefinitionForm.controls;
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
