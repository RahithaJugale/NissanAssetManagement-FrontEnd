import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Vendor } from '../shared/vendor';
import { VendorService } from '../shared/vendor.service';

@Component({
  selector: 'app-vendor-manage',
  templateUrl: './vendor-manage.component.html',
  styleUrls: ['./vendor-manage.component.scss']
})
export class VendorManageComponent implements OnInit {

  constructor(public vendorService: VendorService, private router:Router, private toastr:ToastrService) { }

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

  editDetails(vendor){
    this.vendorService.vendor = vendor;
    this.router.navigateByUrl('/dashboard/vendor-edit');
  }

  deleteDetails(vendor){
    this.vendorService.vendor = vendor;
    if(confirm("Do you want to delete this Vendor?")){
      vendor.isActive = false;
      this.vendorService.deleteVendor(vendor).subscribe(
        (result) => {
          console.log(result);
          this.toastr.success("Vendor deleted");
        },
        (error) => {
          console.log(error);
          this.toastr.error("Error");
        }
      );
    }
  }
}
