import { AssetType } from "src/app/assets/asset-type/shared/asset-type";

export class Vendor {

    vendorId:number = 0;
    vendorName: string = '';
    vendorType: string = '';
    assetTypeId: number = 0;
    vendorFrom: Date = new Date;
    vendorTo: Date = new Date;
    vendorAddress: string = '';

    assetType:AssetType;
    isActive:boolean = false;
}
