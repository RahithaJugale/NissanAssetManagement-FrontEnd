import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VendorListComponent } from 'src/app/vendors/vendor-list/vendor-list.component';
import { AssetTypeService } from '../shared/asset-type.service';

@Component({
  selector: 'app-asset-type-edit',
  templateUrl: './asset-type-edit.component.html',
  styleUrls: ['./asset-type-edit.component.scss']
})
export class AssetTypeEditComponent implements OnInit {

  editAssetTypeForm: FormGroup;
  isSubmitted: boolean = false;
  constructor(private formBuilder: FormBuilder, public assetTypeService: AssetTypeService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.editAssetTypeForm = this.formBuilder.group(
      {
        //assetTypeId
        assetTypeId: [this.assetTypeService.assetTypeData.assetTypeId],
        //typeName
        typeName: [this.assetTypeService.assetTypeData.typeName, [Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern("[a-zA-Z ]+")]],

        //isActive
        isActive: [this.assetTypeService.assetTypeData.isActive, [Validators.required]]
      }
    );
  }

  get formControls() {
    return this.editAssetTypeForm.controls;
  }

  submitDetails() {
    this.isSubmitted = true;
    if (this.editAssetTypeForm.invalid) {
      this.toastr.error("Please check details again");
    }
    if (this.editAssetTypeForm.valid) {
      this.assetTypeService.updateAssetType(this.editAssetTypeForm.value).subscribe(
        (result) => {
          console.log(result);
          if (result == null) {
            this.toastr.error('Invalid values');
          }
          else {
            this.toastr.success("Changes saved successfully");
            this.router.navigateByUrl('/dashboard/asset-type-manage');
          }
        },
        (error) => {
          console.log(error);
          this.toastr.error("Error");
        }
      );
    }
  }
}
