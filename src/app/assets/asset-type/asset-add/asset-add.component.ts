import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssetTypeService } from '../shared/asset-type.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asset-add',
  templateUrl: './asset-add.component.html',
  styleUrls: ['./asset-add.component.scss']
})
export class AssetAddComponent implements OnInit {

  addAssetTypeForm: FormGroup;
  isSubmitted:boolean = false;
  constructor(private formBuilder: FormBuilder, public assetTypeService:AssetTypeService, private toastr:ToastrService, private router:Router) { }

  ngOnInit(): void {
    this.addAssetTypeForm = this.formBuilder.group(
      {
        assetTypeId: [0],
        //typeName
        typeName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern("[a-zA-Z ]+")]],

        //isActive
        isActive: [false]
      }
    );
  }

  submitDetails(){
    this.isSubmitted = true;
    if(this.addAssetTypeForm.invalid){
      this.toastr.error("Please check values again");
    }
    if(this.addAssetTypeForm.valid){
      this.addNewAssetType();
    }
  }

  get formControls(){
    return this.addAssetTypeForm.controls;
  }

  addNewAssetType(){
    this.assetTypeService.addNewAsset(this.addAssetTypeForm.value).subscribe(
      (result) => {
        console.log(result);
        if(result == null){
          this.toastr.error('Invalid values');
        }
        else{
          this.toastr.success('Asset Type Added Successfully');
          this.router.navigateByUrl('/dashboard/asset-type');
        }
      },
      (error) => {
        console.log(error);
        this.toastr.error('Error');
      }
    );
  }
}
