import { Vendor } from "src/app/vendors/shared/vendor";
import { AssetDefinition } from "../../asset-definition/shared/asset-definition";
import { AssetType } from "../../asset-type/shared/asset-type";

export class AssetMaster {
    assetMasterId: number = 0;
    assetTypeId: number = 0;
    vendorId: number = 0;
    assetDefinitionId: number = 0;
    model: string = '';
    serialNumber: string = '';
    manufacturingYear: Date = new Date;
    purchaseDate: Date = new Date;
    warranty:boolean = false;
    warrantyFrom: Date = new Date;
    warrantyTo: Date = new Date;
    isActive:boolean = false;

    assetType:AssetType;
    vendor:Vendor;
    assetDefinition: AssetDefinition;
}
