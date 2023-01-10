import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterState } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AssetType } from 'src/app/assets/asset-type/shared/asset-type';
import { AssetTypeService } from 'src/app/assets/asset-type/shared/asset-type.service';
import { Vendor } from '../shared/vendor';
import { VendorService } from '../shared/vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.scss']
})
export class VendorEditComponent implements OnInit {

  isSubmitted:boolean = false;
  editVendorForm: FormGroup;
  constructor(private formBuilder: FormBuilder, public assetTypeService: AssetTypeService, public vendorService:VendorService, private toastr:ToastrService, private router:Router) { }

  ngOnInit(): void {
    this.editVendorForm = this.formBuilder.group(
      {
        //vendorId
        vendorId: [this.vendorService.vendor.vendorId],

        //vendorName
        vendorName: [this.vendorService.vendor.vendorName, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],

        //vendorType
        vendorType: ['Supplier', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],

        //assetTypeId
        assetTypeId: [this.vendorService.vendor.assetTypeId, [Validators.required]],

        //vendorFrom
        vendorFrom: [this.vendorService.vendor.vendorFrom, [Validators.required]],

        //vendorTo
        vendorTo: [this.vendorService.vendor.vendorTo, [Validators.required]],

        //vendorAddress
        vendorAddress: [this.vendorService.vendor.vendorAddress, [Validators.required, Validators.minLength(3), Validators.maxLength(70)]],

        //isActive
        isActive: [this.vendorService.vendor.isActive]
      }
    );

    this.getListOfAssetTypes();
  }

  submitDetails(){
    this.isSubmitted = true;
    if(this.editVendorForm.invalid){
      this.toastr.error("Please check all values");
      console.log(this.editVendorForm.value);
    }
    if(this.editVendorForm.valid){
      this.vendorService.updateVendor(this.editVendorForm.value).subscribe(
        (result) => {
          if(result == null){
            this.toastr.error("Error");
          }
          else{
            console.log(result);
            // this.vendorService.vendors = result as Vendor[];
            this.toastr.success("Vendor Changed Successfully");
            this.router.navigateByUrl('dashboard/vendor-manage');
          }
        },
        (error) => {
          console.log(error);
          this.toastr.error("Error");
        }
      );
    }
  }

  get formControls(){
    return this.editVendorForm.controls;
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
