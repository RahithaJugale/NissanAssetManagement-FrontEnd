import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AssetDefinition } from 'src/app/assets/asset-definition/shared/asset-definition';
import { AssetDefinitionService } from 'src/app/assets/asset-definition/shared/asset-definition.service';
import { Vendor } from 'src/app/vendors/shared/vendor';
import { VendorService } from 'src/app/vendors/shared/vendor.service';
import { PurchaseOrderService } from '../shared/purchase-order.service';
import { PurchaseStatus } from '../shared/purchase-status';

@Component({
  selector: 'app-purchase-order-edit',
  templateUrl: './purchase-order-edit.component.html',
  styleUrls: ['./purchase-order-edit.component.scss']
})
export class PurchaseOrderEditComponent implements OnInit {

  isSubmitted: boolean = false;
  editPurchaseForm: FormGroup;
  constructor(private formBuilder: FormBuilder, public router: Router, public assetDefinitionService: AssetDefinitionService, public vendorService: VendorService, public purchaseOrderService: PurchaseOrderService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.generateVendorDetails();
    this.editPurchaseForm = this.formBuilder.group(
      {

        //purchaseOrderId
        purchaseOrderId: [this.purchaseOrderService.purchaseOrder.purchaseOrderId],

        //purchaseOrderNo
        purchaseOrderNo: [this.purchaseOrderService.purchaseOrder.purchaseOrderNo, [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern("^[A-Za-z0-9 ]+")]],

        //assetDefinitionId
        assetDefinitionId: [this.purchaseOrderService.purchaseOrder.assetDefinitionId, [Validators.required]],

        //assetTypeId
        assetTypeId: [this.purchaseOrderService.purchaseOrder.assetType.typeName],

        //quantity
        quantity: [this.purchaseOrderService.purchaseOrder.quantity, [Validators.required, Validators.min(1), Validators.max(50)]],

        //vendorId
        vendorId: [this.purchaseOrderService.purchaseOrder.vendorId, [Validators.required]],

        //orderDate
        orderDate: [this.purchaseOrderService.purchaseOrder.orderDate, [Validators.required]],

        //deliveryDate
        deliveryDate: [this.purchaseOrderService.purchaseOrder.deliveryDate, [Validators.required]],

        //statusId
        statusId: [this.purchaseOrderService.purchaseOrder.purchaseStatus.statusId, [Validators.required]],

        //isActive
        isActive: [this.purchaseOrderService.purchaseOrder.isActive]

      }
    );
    this.getAssetDefinition();
    this.getAllPurchaseStatus();

  }

  submitDetails() {
    this.isSubmitted = true;
    this.editPurchaseForm.value.assetTypeId = this.purchaseOrderService.assetTypeId;
    console.log(this.editPurchaseForm.value);
    if (this.editPurchaseForm.invalid) {
      this.toastr.error("Please check values again");
    }
    if (this.editPurchaseForm.valid) {
      this.purchaseOrderService.updatePurchaseOrder(this.editPurchaseForm.value).subscribe(
        (result) => {
          console.log(result);
          if (result == null) {
            this.toastr.error("Delivery date should be greater than Order Date");
          } else {
            this.toastr.success("Purchase Order changed successfully");
            this.router.navigateByUrl("/purchase/purchase-order-manage");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  get formControls() {
    return this.editPurchaseForm.controls;
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
    console.log(this.editPurchaseForm.value.assetDefinitionId);
    // this.getAssetDefinition();
    this.assetDefinitionService.assetDefinitions.forEach(assetDefinition => {
      if (assetDefinition.assetDefinitionId == this.editPurchaseForm.value.assetDefinitionId) {
        console.log(assetDefinition.assetDefinitionId);
        this.purchaseOrderService.assetTypeId = assetDefinition.assetTypeId;
        this.purchaseOrderService.assetTypeName = assetDefinition.assetType.typeName;
      }
    });
    console.log(this.purchaseOrderService.assetTypeName);
    this.editPurchaseForm.value.assetTypeId = this.purchaseOrderService.assetTypeName;

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
  //to automatically display vendor details of selected purchase order during edit
  generateVendorDetails() {
    this.getAllVendors();
    let temp: Vendor[] = [];
    this.vendorService.vendors.forEach(vendor => {
      if (vendor.assetTypeId == this.purchaseOrderService.purchaseOrder.assetTypeId) {
        // console.log("HGF");
        console.log(vendor.assetTypeId);
        console.log(vendor);

        temp.push(vendor);
        this.purchaseOrderService.purchaseVendors = temp;
      }
    });
  }
}
