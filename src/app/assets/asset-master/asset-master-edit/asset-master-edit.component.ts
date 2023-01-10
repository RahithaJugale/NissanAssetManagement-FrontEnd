import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  constructor(public assetTypeService: AssetTypeService, private formBuilder: FormBuilder, public assetMasterService: AssetMasterService, public assetDefinitionService: AssetDefinitionService) { }

  ngOnInit(): void {
    this.editAssetMasterForm = this.formBuilder.group(
      {
        //assetMasterId
        assetMasterId: [],

        //assetTypeId
        assetTypeId: [],

        //vendorId
        vendorId:[],

        //assetDefinitionId
        assetDefinitionId: [],

        //model
        model: [],

        //serialNumber
        serialNumber: [],

        //manufacturingYear
        manufacturingYear: [],

        //purchaseDate
        purchaseDate: [],

        //warranty
        warranty:[],

        //warrantyFrom
        warrantyFrom:[],

        //warrantyTo
        warrantyTo:[],

        //isActive
        isActive:[]
      }
    );

    this.getAllAssetDefinition();
  }

  get formControls() {
    return this.editAssetMasterForm.controls;
  }

  submitDetails() {
    this.isSubmitted = true;
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

  getAllAssetDefinition(){
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

  getValue(assetDefinitionId){
    console.log(assetDefinitionId);
  }
}
