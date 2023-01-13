import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PurchaseOrderService } from 'src/app/purchase-order/shared/purchase-order.service';
import { PurchaseStatus } from 'src/app/purchase-order/shared/purchase-status';
import { Vendor } from 'src/app/vendors/shared/vendor';
import { VendorService } from 'src/app/vendors/shared/vendor.service';
import { AssetDefinition } from '../../asset-definition/shared/asset-definition';
import { AssetDefinitionService } from '../../asset-definition/shared/asset-definition.service';
import { AssetType } from '../../asset-type/shared/asset-type';
import { AssetTypeService } from '../../asset-type/shared/asset-type.service';
import { AssetMasterService } from '../shared/asset-master.service';

@Component({
  selector: 'app-asset-master-edit',
  templateUrl: './asset-master-edit.component.html',
  styleUrls: ['./asset-master-edit.component.scss']
})
export class AssetMasterEditComponent implements OnInit {

  isSubmitted: boolean = false;
  editAssetMasterForm: FormGroup;
  constructor(public assetTypeService: AssetTypeService, private formBuilder: FormBuilder, public assetMasterService: AssetMasterService, public assetDefinitionService: AssetDefinitionService, public purchaseOrderService: PurchaseOrderService, public vendorService: VendorService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.generateVendorDetails();
    if (this.assetMasterService.assetMaster.warranty === null) {
      this.assetMasterService.assetMaster.warranty = false;
    }
    if (this.assetMasterService.assetMaster.warrantyFrom == null) {
      this.assetMasterService.assetMaster.warrantyFrom = new Date;
    }
    if (this.assetMasterService.assetMaster.warrantyTo == null) {
      this.assetMasterService.assetMaster.warrantyTo = new Date;
    }
    this.editAssetMasterForm = this.formBuilder.group(
      {
        //assetMasterId
        assetMasterId: [this.assetMasterService.assetMaster.assetMasterId],

        //assetTypeId
        assetTypeId: [this.assetMasterService.assetMaster.assetType.typeName],

        //vendorId
        vendorId: [this.assetMasterService.assetMaster.vendorId, [Validators.required]],

        //assetDefinitionId
        assetDefinitionId: [this.assetMasterService.assetMaster.assetDefinitionId, [Validators.required]],

        //model
        model: [this.assetMasterService.assetMaster.model, [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern("[A-Za-z0-9]+")]],

        //serialNumber
        serialNumber: [this.assetMasterService.assetMaster.serialNumber, [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern("[A-Za-z0-9]+")]],

        //manufacturingYear
        manufacturingYear: [this.assetMasterService.assetMaster.manufacturingYear, [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.min(1990), Validators.max(2023)]],

        //purchaseDate
        purchaseDate: [this.assetMasterService.assetMaster.purchaseDate, [Validators.required]],

        //warranty
        warranty: [this.assetMasterService.assetMaster.warranty],

        //warrantyFrom
        warrantyFrom: [this.assetMasterService.assetMaster.warrantyFrom],

        //warrantyTo
        warrantyTo: [this.assetMasterService.assetMaster.warrantyTo],

        //isActive
        isActive: [this.assetMasterService.assetMaster.isActive]
      }
    );

    this.getAllAssetDefinition();
  }

  get formControls() {
    return this.editAssetMasterForm.controls;
  }

  submitDetails() {
    this.isSubmitted = true;
    this.editAssetMasterForm.value.assetTypeId = this.assetMasterService.assetMaster.assetTypeId;
    console.log(this.editAssetMasterForm.value);

    if (this.editAssetMasterForm.invalid) {
      this.toastr.error("Please check values again");
    }
    if (this.editAssetMasterForm.valid) {
      this.assetMasterService.updateAssetMaster(this.editAssetMasterForm.value).subscribe(
        (result) => {
          console.log(result);
          if (result == null) {
            this.toastr.error("To date should be greater than From Date");
          } else {
            this.toastr.success("Changes saved successfully");
            this.router.navigateByUrl('/dashboard/asset-master-manage');
          }
        },
        (error) => {
          console.log(error);
          this.toastr.error("Error");
        }
      );
    }
  }

  //get list of all asset types
  getListOfAssetTypes() {
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

  getAllAssetDefinition() {
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

  getValue() {

    this.purchaseOrderService.purchaseVendors = [];

    //to automatically populate asset type field while selecting asset definition id
    console.log(this.editAssetMasterForm.value.assetDefinitionId);
    // this.getAssetDefinition();
    this.assetDefinitionService.assetDefinitions.forEach(assetDefinition => {
      if (assetDefinition.assetDefinitionId == this.editAssetMasterForm.value.assetDefinitionId) {
        console.log(assetDefinition.assetDefinitionId);
        this.purchaseOrderService.assetTypeId = assetDefinition.assetTypeId;
        this.purchaseOrderService.assetTypeName = assetDefinition.assetType.typeName;
      }
    });
    console.log(this.purchaseOrderService.assetTypeName);
    this.editAssetMasterForm.value.assetTypeId = this.purchaseOrderService.assetTypeName;

    //to automatically filter vendors based on asset definition id input
    this.getAllVendors();
    let temp: Vendor[] = [];
    this.vendorService.vendors.forEach(vendor => {
      if (vendor.assetTypeId == this.purchaseOrderService.assetTypeId) {
        // console.log("HGF");
        console.log(vendor.assetTypeId);
        console.log(vendor);

        temp.push(vendor);
        this.purchaseOrderService.purchaseVendors = temp;
      }
    });
    console.log(temp);
  }

  //get all vendors
  getAllVendors() {
    this.vendorService.getVendorList().subscribe(
      (result) => {
        console.log(result);
        this.vendorService.vendors = result as Vendor[];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //to automatically display vendor details of selected asset master during edit
  generateVendorDetails() {
    this.getAllVendors();
    let temp: Vendor[] = [];
    this.vendorService.vendors.forEach(vendor => {
      if (vendor.assetTypeId == this.assetMasterService.assetMaster.assetTypeId) {
        console.log("HGF");
        console.log(vendor.assetTypeId);
        console.log(vendor);

        temp.push(vendor);
        this.purchaseOrderService.purchaseVendors = temp;
      }
    });
  }
}
