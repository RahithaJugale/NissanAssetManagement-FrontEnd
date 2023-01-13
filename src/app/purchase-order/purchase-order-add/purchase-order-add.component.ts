import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssetDefinition } from 'src/app/assets/asset-definition/shared/asset-definition';
import { AssetDefinitionService } from 'src/app/assets/asset-definition/shared/asset-definition.service';
import { VendorService } from 'src/app/vendors/shared/vendor.service';
import { PurchaseOrderService } from 'src/app/purchase-order/shared/purchase-order.service';
import { PurchaseOrder } from '../shared/purchase-order';
import { Vendor } from 'src/app/vendors/shared/vendor';
import { PurchaseStatus } from '../shared/purchase-status';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-order-add',
  templateUrl: './purchase-order-add.component.html',
  styleUrls: ['./purchase-order-add.component.scss']
})
export class PurchaseOrderAddComponent implements OnInit {

  isSubmitted: boolean = false;
  addPurchaseForm: FormGroup;
  constructor(private formBuilder: FormBuilder, public router: Router, public assetDefinitionService: AssetDefinitionService, public vendorService: VendorService, public purchaseOrderService: PurchaseOrderService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.addPurchaseForm = this.formBuilder.group(
      {
        //purchaseOrderNo
        purchaseOrderNo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern("^[A-Za-z0-9 ]+")]],

        //assetDefinitionId
        assetDefinitionId: ['', [Validators.required]],

        //assetTypeId
        assetTypeId: [''],

        //quantity
        quantity: ['', [Validators.required, Validators.min(1), Validators.max(50)]],

        //vendorId
        vendorId: ['', [Validators.required]],

        //orderDate
        orderDate: ['', [Validators.required]],

        //deliveryDate
        deliveryDate: ['', [Validators.required]],

        //statusId
        statusId: ['', [Validators.required]],

        //isActive
        isActive: [false]

      }
    );
    this.getAssetDefinition();
    this.getAllPurchaseStatus();
  }

  //on form submit
  submitDetails() {
    this.addPurchaseForm.value.assetTypeId = this.purchaseOrderService.assetTypeId;
    console.log(this.addPurchaseForm.value);
    this.isSubmitted = true;
    if (this.addPurchaseForm.invalid) {
      this.toastr.error("Please check values again");
    }
    if (this.addPurchaseForm.valid) {
      this.purchaseOrderService.addNewPurchaseOrder(this.addPurchaseForm.value).subscribe(
        (result) => {
          console.log(result);
          if (result == null) {
            this.toastr.error("Delivery date should be greater than Order Date");
          } else {
            this.toastr.success("Purchase Order added successfully");
            this.router.navigateByUrl("/purchase");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  get formControls() {
    return this.addPurchaseForm.controls;
  }

  //get all asset definition
  getAssetDefinition() {
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
    console.log(this.addPurchaseForm.value.assetDefinitionId);
    // this.getAssetDefinition();
    this.assetDefinitionService.assetDefinitions.forEach(assetDefinition => {
      if (assetDefinition.assetDefinitionId == this.addPurchaseForm.value.assetDefinitionId) {
        console.log(assetDefinition.assetDefinitionId);
        this.purchaseOrderService.assetTypeId = assetDefinition.assetTypeId;
        this.purchaseOrderService.assetTypeName = assetDefinition.assetType.typeName;
      }
    });
    console.log(this.purchaseOrderService.assetTypeName);
    this.addPurchaseForm.value.assetTypeId = this.purchaseOrderService.assetTypeName;

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

  //get purchase status
  getAllPurchaseStatus() {
    this.purchaseOrderService.getPurchaseStatus().subscribe(
      (result) => {
        console.log(result);
        this.purchaseOrderService.purchaseStatus = result as PurchaseStatus[];
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
