import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AssetType } from 'src/app/assets/asset-type/shared/asset-type';
import { AssetTypeService } from 'src/app/assets/asset-type/shared/asset-type.service';
import { VendorService } from 'src/app/vendors/shared/vendor.service';
import { Vendor } from '../shared/vendor';

@Component({
  selector: 'app-vendor-add',
  templateUrl: './vendor-add.component.html',
  styleUrls: ['./vendor-add.component.scss']
})
export class VendorAddComponent implements OnInit {

  isSubmitted:boolean = false;
  addVendorForm: FormGroup;
  constructor(private formBuilder:FormBuilder, public assetTypeService: AssetTypeService, private toastr: ToastrService, public vendorService:VendorService, private router:Router) { }

  ngOnInit(): void {
    this.addVendorForm = this.formBuilder.group(
      {
        //vendorName
        vendorName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern("[a-zA-Z ]")]],

        //vendorType
        vendorType: ['Supplier', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],

        //assetTypeId
        assetTypeId: ['', [Validators.required]],

        //vendorFrom
        vendorFrom: ['', [Validators.required]],

        //vendorTo
        vendorTo: ['', [Validators.required]],

        //vendorAddress
        vendorAddress: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(70)]],

        //isActive
        isActive: [false]
      }
    );

    this.getListOfAssetTypes();
  }

  submitDetails(){
    this.isSubmitted = true;
    if(this.addVendorForm.invalid){
      this.toastr.error("Please check all values");
      console.log(this.addVendorForm.value);
    }
    if(this.addVendorForm.valid){
      this.vendorService.addNewVendor(this.addVendorForm.value).subscribe(
        (result) => {
          console.log(result);
          this.vendorService.vendors = result as Vendor[];
          this.toastr.success("Vendor Added Successfully");
          this.router.navigateByUrl('dashboard/vendor');
        },
        (error) => {
          console.log(error);
          this.toastr.error("Error");
        }
      );
    }
  }

  get formControls(){
    return this.addVendorForm.controls;
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
