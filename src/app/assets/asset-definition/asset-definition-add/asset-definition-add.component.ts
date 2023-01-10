import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AssetType } from '../../asset-type/shared/asset-type';
import { AssetTypeService } from '../../asset-type/shared/asset-type.service';
import { AssetDefinitionService } from 'src/app/assets/asset-definition/shared/asset-definition.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asset-definition-add',
  templateUrl: './asset-definition-add.component.html',
  styleUrls: ['./asset-definition-add.component.scss']
})
export class AssetDefinitionAddComponent implements OnInit {

  isSubmitted:boolean = false;
  addAssetDefinitionForm:FormGroup;
  constructor(private formBuilder: FormBuilder, public assetTypeService:AssetTypeService, private toastr:ToastrService, public assetDefinitionService:AssetDefinitionService, private router:Router) { }

  ngOnInit(): void {
    this.addAssetDefinitionForm = this.formBuilder.group(
      {
        //name
        name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern("[a-zA-Z ]")]],

        //assetTypeId
        assetTypeId: [''],

        //classId
        classId: [''],

        //isActive
        isActive: [false]
      }
    );

    this.getListOfAssetTypes();
  }

  submitDetails(){
    this.isSubmitted = true;
    if(this.addAssetDefinitionForm.invalid){
      this.toastr.error("Please check all values");
    }
    if(this.addAssetDefinitionForm.valid){
      this.assetDefinitionService.addNewAssetDefinition(this.addAssetDefinitionForm.value).subscribe(
        (result) => {
          console.log(result);
          this.toastr.success("Asset Definition Added successfully");
          this.router.navigateByUrl('/dashboard/asset-definition');
        },
        (error) => {
          console.log(error);
          this.toastr.error("Error");
        }
      );
    }
  }

  get formControls(){
    return this.addAssetDefinitionForm.controls;
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
