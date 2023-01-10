import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssetDefinition } from 'src/app/assets/asset-definition/shared/asset-definition';
import { AssetDefinitionService } from 'src/app/assets/asset-definition/shared/asset-definition.service';
import { VendorService } from 'src/app/vendors/shared/vendor.service';
import { PurchaseOrderService } from 'src/app/purchase-order/shared/purchase-order.service';

@Component({
  selector: 'app-purchase-order-add',
  templateUrl: './purchase-order-add.component.html',
  styleUrls: ['./purchase-order-add.component.scss']
})
export class PurchaseOrderAddComponent implements OnInit {

  isSubmitted:boolean = false;
  addPurchaseForm:FormGroup;
  constructor(private formBuilder: FormBuilder, public assetDefinitionService:AssetDefinitionService, public vendorService: VendorService, public purchaseOrderService:PurchaseOrderService) { }

  ngOnInit(): void {
    this.addPurchaseForm = this.formBuilder.group(
      {
        //purchaseOrderNo
        purchaseOrderNo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3), Validators.pattern("[a-zA-Z0-9 ]")]],

        //assetDefinitionId
        assetDefinitionId: ['', [Validators.required]],

        //assetTypeId
        assetTypeId: ['', [Validators.required]],

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
    console.log(this.addPurchaseForm.get('assetDefinitionId'));
    this.getAssetDefinition();
  }

  submitDetails(){

  }

  get formControls(){
    return this.addPurchaseForm.controls;
  }

  //get all asset definition
  getAssetDefinition(){
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

  getValue(){
    // console.log(assetDefinitionId);
    console.log(this.addPurchaseForm.value);
  }

}
