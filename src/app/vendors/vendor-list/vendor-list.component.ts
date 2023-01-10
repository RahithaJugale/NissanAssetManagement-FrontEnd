import { Component, OnInit } from '@angular/core';
import { AssetDefinition } from 'src/app/assets/asset-definition/shared/asset-definition';
import { AssetDefinitionService } from 'src/app/assets/asset-definition/shared/asset-definition.service';
import { Vendor } from '../shared/vendor';
import { VendorService } from '../shared/vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {

  constructor(public vendorService:VendorService ) { }

  ngOnInit(): void {
    this.getAllVendors();
  }

  //get all vendors
  getAllVendors(){
    this.vendorService.getVendorList().subscribe(
      (result) => {
        console.log(result);
        this.vendorService.vendors = result as Vendor[];
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
